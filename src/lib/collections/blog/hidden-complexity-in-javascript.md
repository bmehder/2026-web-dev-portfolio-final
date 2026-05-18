---
title: The Hidden Complexity in a Simple JavaScript Function
date: 2026-05-18
excerpt: A simple loadTodos() function reveals how JavaScript quietly mixes effects, nullability, parsing, and error handling into a single function — and how functional programming languages approach the same problem differently.
image: placeholder-1.png
---

*Estimated read time: 12 min*

At first glance, this JavaScript function seems fairly straightforward:

```js
const loadTodos = () => {
  if (typeof localStorage == 'undefined' || storageKey == null) {
    return []
  }

  const savedTodos = localStorage.getItem(storageKey)

  if (savedTodos == null) {
    return []
  }

  try {
    return JSON.parse(savedTodos)
  } catch (error) {
    console.error(error)
    return []
  }
}
```

The goal is simple:

> Get some todos from LocalStorage and parse them.

But if you look more closely, this tiny function is doing much more than that.

## What Is This Function Actually Doing?

This one function is responsible for:

1. Checking whether the runtime environment supports `localStorage`
2. Checking whether a `storageKey` exists
3. Reading external mutable state
4. Handling missing data
5. Parsing JSON
6. Handling parsing failures
7. Logging errors
8. Providing fallback values

The actual business logic is tiny:

```txt
storage key -> stored string -> parsed todos
```

But in JavaScript, concerns tend to collapse together into one imperative block.

This is extremely normal in JavaScript codebases, so many developers never stop to notice it.

## The JavaScript Problem

JavaScript makes many things feel simple because it allows:

- global mutable state
- runtime exceptions
- nullable values
- hidden effects
- implicit failure paths

all in the same function.

The function works, but it quietly mixes:

- IO
- parsing
- environment checks
- error handling
- fallback behavior
- business logic

into one place.

This is one reason JavaScript functions often grow “busy” over time.

## How Functional Programming Thinks About This

Functional programming languages tend to separate these concerns.

Instead of one function doing everything, different problems are modeled explicitly.

For example:

- Missing values become `Maybe`
- Parsing failures become `Result`
- Side effects are isolated
- Pure transformations stay pure

The goal is not “more code.”

The goal is:

> Make the important parts of the program visible.

## What Elm Might Look Like

In Elm, JSON parsing does not throw exceptions.

Instead, decoding returns a `Result`.

Conceptually, the actual decoding step might look something like this:

```elm
decodeTodos : String -> Result Decode.Error (List Todo)
decodeTodos json =
    Decode.decodeString todosDecoder json
```

This tells us:

- decoding may fail
- failure is expected
- callers must handle it

No hidden exceptions.

No `try/catch`.

No hidden control flow.

Another important detail is that Elm separates the decoder definition from the decoding operation itself.

For example, the decoder might look something like this:

```elm
todoDecoder : Decoder Todo
todoDecoder =
    Decode.map3 Todo
        (Decode.field "task" Decode.string)
        (Decode.field "id" Decode.int)
        (Decode.field "isCompleted" Decode.bool)


todosDecoder : Decoder (List Todo)
todosDecoder =
    Decode.list todoDecoder
```

This is conceptually very similar to the Zod schema:

```ts
const TodoSchema = z.object({
  task: z.string(),
  id: z.number(),
  isCompleted: z.boolean()
})
```

In both cases, the structure of the data is modeled explicitly before any parsing occurs.

The decoder is not merely parsing JSON.

It is validating that the runtime data actually matches the expected structure.

Then another function could decide how to handle missing or invalid storage:

```elm
loadTodos : Maybe String -> List Todo
loadTodos maybeStoredJson =
    case maybeStoredJson of
        Nothing ->
            []

        Just json ->
            case decodeTodos json of
                Ok todos ->
                    todos

                Err _ ->
                    []
```

Notice what disappeared:

- no environment checks
- no exceptions
- no global access
- no implicit failure paths


The function only describes the data flow.

## Where TypeScript Fits Into This

TypeScript also helps reveal some of the hidden complexity in the original JavaScript function.

At first glance, it may seem like adding static types completely solves the problem.

For example:

```ts
type Todo = {
  task: string
  id: number
  isCompleted: boolean
}
```

Then we might write:

```ts
const loadTodos = (): Todo[] => {
  // ...
}
```

This certainly improves the code.

The expected structure of the data is now visible.

But an important problem still remains.

This line:

```ts
JSON.parse(savedTodos)
```

still returns:

```ts
any
```

TypeScript does not actually know whether the parsed JSON matches the `Todo[]` type.

This is still valid JSON:

```json
[
  {
    "task": 42,
    "id": "hello",
    "isCompleted": "maybe"
  }
]
```

Or even:

```json
null
```

Or:

```json
{
  "banana": true
}
```

The following code compiles:

```ts
const todos: Todo[] = JSON.parse(savedTodos)
```

But TypeScript is essentially trusting the developer.

It does not verify the runtime data.

This is one reason developers sometimes describe TypeScript types as:

> “Compile-time promises.”

The type system disappears at runtime.

## Why Zod Is Interesting

This is where libraries like Zod become useful.

Zod allows JavaScript and TypeScript applications to validate runtime data.

For example:

```ts
import { z } from 'zod'

const TodoSchema = z.object({
  task: z.string(),
  id: z.number(),
  isCompleted: z.boolean()
})

const TodosSchema = z.array(TodoSchema)

type Todo = z.infer<typeof TodoSchema>
```

Now the parsed JSON can be checked explicitly:

```ts
const parsed = JSON.parse(savedTodos)

const result = TodosSchema.safeParse(parsed)

if (!result.success) {
  return []
}

return result.data
```

This changes the role of the function considerably.

Instead of:

1. Read storage
2. Parse JSON
3. Hope the structure is correct

we now have:

1. Read storage
2. Parse JSON
3. Validate structure
4. Return trusted data

This starts to resemble the explicit decoding approaches commonly used in languages like Elm and Gleam.

One particularly interesting detail is that the TypeScript type can now be inferred directly from the Zod schema:

```ts
type Todo = z.infer<typeof TodoSchema>
```

This removes another source of duplication.

Without inference, developers often end up maintaining:

1. a runtime validation schema
2. a separate TypeScript type

which can silently drift apart over time.

With inference, the runtime validator becomes the source of truth.

This starts to push JavaScript and TypeScript even closer toward the kind of explicit modeling commonly found in FP languages.

## What About fp-ts?

Some TypeScript developers push these ideas even further using libraries like `fp-ts`.

`fp-ts` brings many functional programming concepts directly into TypeScript, including:

- `Option`
- `Either`
- compositional pipelines
- explicit error modeling
- immutable transformations

A simplified `fp-ts` version of `loadTodos()` might look something like this:

```ts
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as E from 'fp-ts/Either'
import { z } from 'zod'

const TodoStatusSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('Complete')
  }),

  z.object({
    type: z.literal('Incomplete')
  })
])

const TodoSchema = z.object({
  task: z.string(),
  id: z.number(),
  status: TodoStatusSchema
})

const TodosSchema = z.array(TodoSchema)

type Todo = z.infer<typeof TodoSchema>


type LoadTodosError =
  | {
      type: 'StorageUnavailable'
    }
  | {
      type: 'ParseError'
      error: Error
    }
  | {
      type: 'ValidationError'
      error: z.ZodError
    }


const safeParseJson = (
  json: string
): E.Either<LoadTodosError, unknown> => {
  try {
    return E.right(JSON.parse(json))
  } catch (error) {
    return E.left({
      type: 'ParseError',
      error:
        error instanceof Error
          ? error
          : new Error('Unknown parse error')
    })
  }
}


const validateTodos = (
  value: unknown
): E.Either<LoadTodosError, Todo[]> => {
  const result = TodosSchema.safeParse(value)

  if (!result.success) {
    return E.left({
      type: 'ValidationError',
      error: result.error
    })
  }

  return E.right(result.data)
}


const loadTodos = (
  storageKey: string | null
): E.Either<LoadTodosError, Todo[]> => {
  if (
    typeof localStorage === 'undefined' ||
    storageKey == null
  ) {
    return E.left({
      type: 'StorageUnavailable'
    })
  }

  return pipe(
    O.fromNullable(localStorage.getItem(storageKey)),

    O.getOrElse(() => '[]'),

    safeParseJson,

    E.flatMap(validateTodos)
  )
}
```

Architecturally, this version is substantially different from the original JavaScript implementation.

The original function silently collapsed all failures into:

```js
return []
```

But the `fp-ts` version models failures explicitly:

```ts
type LoadTodosError =
  | { type: 'StorageUnavailable' }
  | { type: 'ParseError' }
  | { type: 'ValidationError' }
```

This means callers can distinguish between:

- malformed JSON
- unavailable storage
- invalid runtime structure

instead of treating all failures identically.

The Todo model also became more explicit.

Instead of:

```ts
isCompleted: boolean
```

we now have:

```ts
status:
  | { type: 'Complete' }
  | { type: 'Incomplete' }
```

This may initially seem more verbose, but it introduces several important advantages.

The model becomes:

- easier to extend
- more self-documenting
- harder to misuse
- more explicit about domain states

For example, adding:

- `Archived`
- `Deleted`
- `InProgress`

later becomes straightforward without refactoring boolean logic throughout the application.

This is one of the major themes in FP-inspired modeling:

> Make the domain more explicit, even if the code becomes slightly more verbose.

One especially interesting detail is this line:

```ts
O.getOrElse(() => '[]')
```

The fallback value is a string because the pipeline is still operating on raw JSON text at that point.

The actual parsing happens later in the pipeline:

```ts
safeParseJson
```

This kind of staged transformation pipeline is very common in FP-style codebases.

## TypeScript and Zod vs FP Languages

TypeScript and Zod move JavaScript closer to some functional programming ideas.

In particular:

- runtime uncertainty becomes explicit
- parsing is treated as a fallible operation
- external data is treated as untrusted
- validation becomes part of the model

However, there is still an important difference.

In Elm and Gleam:

- decoding is deeply integrated into the ecosystem
- failure handling is part of the language culture
- effects are intentionally isolated
- the type system is central to the architecture

In TypeScript:

- these ideas are largely library-driven
- runtime validation is optional
- exceptions still exist underneath everything
- mutable global state is still normal

Even so, TypeScript and Zod can serve as an excellent bridge for JavaScript developers beginning to notice these problems.

## But What About LocalStorage?

This is where newcomers to FP languages often get frustrated.

In Elm, accessing LocalStorage itself is more awkward.

You typically need:

- ports
- JavaScript interop
- explicit effect boundaries

At first, this feels annoying.

But the language is intentionally forcing you to acknowledge something important:

> Reading from LocalStorage is an effect.

Effects are:

- unreliable
- environment-dependent
- mutable
- outside the pure program

Elm pushes those concerns to the edges instead of allowing them to quietly leak everywhere.

## A Gleam Example

Gleam has a similar philosophy.

A decoder might look like this:

```gleam
pub fn decode_todos(json: String) -> Result(List(Todo), DecodeError)
```

Again, the type tells the story:

- decoding can fail
- failure is part of the model
- callers must handle it explicitly

Instead of:

```js
try {
  JSON.parse(...)
} catch {
  ...
}
```

the possibility of failure is represented directly in the function signature.

## JavaScript Hides Complexity

JavaScript often feels simpler because many concerns are implicit.

But hidden complexity is still complexity.

The original `loadTodos()` function looked tiny, yet it quietly bundled together:

- runtime environment concerns
- storage access
- nullable values
- exception handling
- parsing
- fallback behavior
- logging

Functional programming languages tend to distribute those concerns into:

- separate functions
- separate types
- explicit effect systems
- explicit failure paths

The result can initially feel more verbose.

But over time, the code often becomes easier to reason about because the hidden assumptions become visible.

## Final Thought

Importantly, nothing about the original JavaScript version is inherently “wrong.”

In fact, it is fairly reasonable JavaScript.

The important insight is simply this:

> A function that appears simple may actually be carrying many different responsibilities.

Once you start noticing this, you begin to see why functional programming languages care so much about:

- purity
- effects
- explicit failure handling
- separation of concerns

Even in something as seemingly small as loading todos from LocalStorage.
