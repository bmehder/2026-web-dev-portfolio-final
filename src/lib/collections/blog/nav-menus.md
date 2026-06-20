---
title: The Surprisingly Complex World of Navigation Menus
date: 2026-06-12
excerpt: Building a simple submenu reveals surprising lessons about HTML, CSS, accessibility, mobile devices, and modern single-page applications.
image: placeholder-7.png
---

# The Surprisingly Complex World of Navigation Menus

At first glance, navigation menus seem simple.

Most websites have them. Most users never think about them. As developers, we often assume they are one of the easier parts of a website to build.

Then you decide to build one from scratch.

What begins as a simple requirement:

> Add a submenu under "Portfolio"

quickly turns into a lesson in web development history, browser behavior, accessibility, responsive design, and modern application architecture.

## The Simple Solution

Most developers start with something like this:

```html
<li class="has-submenu">
  <a href="/portfolio">Portfolio</a>

  <ul class="submenu">
    <li><a href="/page-1">Page 1</a></li>
    <li><a href="/page-2">Page 2</a></li>
    <li><a href="/page-3">Page 3</a></li>
  </ul>
</li>
```

Then some CSS:

```css
.has-submenu:hover > .submenu,
.has-submenu:focus-within > .submenu {
  display: block;
}
```

Done, right?

Not quite.

## The Mobile Problem

Hover works great with a mouse.

Phones do not have hover.

Suddenly we need to answer questions like:

- Should tapping the parent navigate?
- Should tapping open the submenu?
- Should there be a separate button?
- Should the submenu always be visible on mobile?

There is no universally correct answer.

Different websites solve this in different ways.

## Exploring Modern APIs

Modern browsers provide interesting alternatives.

### The Popover API

The Popover API makes it easy to create dropdown-like interfaces.

It handles:

- Esc key support
- Outside click dismissal
- Layering above other content

However, it is designed more for menus and temporary UI than traditional site navigation.

When used for navigation, developers often find themselves fighting browser defaults.

### The Details Element

Another option is:

```html
<details>
  <summary>Portfolio</summary>

  <ul>
    ...
  </ul>
</details>
```

This works surprisingly well on mobile.

Unfortunately, the summary element becomes the toggle, making it difficult for the parent item to also function as a normal link.

## Accessibility Matters

A navigation menu should work for more than mouse users.

Keyboard users should be able to:

- Tab into the menu
- Open submenus
- Access submenu items

This is why many CSS-only menus use:

```css
:focus-within
```

alongside:

```css
:hover
```

Accessibility often introduces additional complexity that isn't immediately obvious.

## The SPA Surprise

One of the most interesting discoveries comes when using a framework such as SvelteKit.

Imagine this sequence:

1. Hover Portfolio.
2. The submenu opens.
3. Click Portfolio.
4. The page navigates.

On a traditional multi-page website, the browser loads a completely new document. The menu disappears.

On a single-page application, the navigation happens without reloading the page.

The mouse is still hovering over the navigation item.

As far as the browser is concerned:

```css
:hover
```

is still true.

The submenu remains visible until the user moves their mouse.

This can feel strange when you first encounter it, but it is actually expected browser behavior.

## Why Most Developers Don't Talk About This

Many developers never build these components themselves.

Instead, they use libraries that handle the edge cases.

Popular solutions include:

- Bits UI
- Melt UI
- shadcn/ui-style components
- Other headless component libraries

These libraries manage state, focus, keyboard interactions, positioning, and accessibility concerns automatically.

As a result, many developers never have to think deeply about how navigation menus actually work.

## What We Learned

After exploring multiple approaches, we ultimately returned to a very traditional solution:

```html
<li class="has-submenu">
  <a href="/portfolio">Portfolio</a>

  <ul class="submenu">
    ...
  </ul>
</li>
```

Combined with a little CSS and responsive design, it turned out to be the simplest solution that met our requirements.

Sometimes modern APIs are the right answer.

Sometimes older patterns have survived for decades because they are still effective.

The most valuable lesson was not learning how to build a submenu.

It was discovering how much complexity can hide behind a feature that appears on nearly every website on the internet.
