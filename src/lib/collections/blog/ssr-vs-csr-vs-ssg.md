---
  title: SSR vs CSR vs SSG - Choosing the Right Rendering Strategy
  date: 2026-06-12
  excerpt: Understanding server-side rendering, client-side rendering, and static site generation—and when each approach makes sense.
  image: placeholder-8.png
---

One of the most important architectural decisions when building a website is deciding **how pages are rendered**.

Should the server generate the HTML?

Should JavaScript build the page in the browser?

Should pages be generated ahead of time during a build step?

Modern frameworks such as SvelteKit, Next.js, Nuxt, and Astro support multiple rendering strategies, but the concepts apply to any website regardless of framework.

In this article, we'll explore the three most common approaches:

- Server-Side Rendering (SSR)
- Client-Side Rendering (CSR)
- Static Site Generation (SSG)

We'll examine how they work, their advantages and disadvantages, and when each one makes sense.

## Server-Side Rendering (SSR)

With server-side rendering, the server generates the HTML for each request.

When a user visits a page:

```text
┌─────────┐     Request      ┌────────┐
│ Browser │ ───────────────► │ Server │
└─────────┘                  └────────┘
      ▲                           │
      │       Generated HTML      │
      └───────────────────────────┘

       ✓ Page displays immediately
```

```text
Browser
↓
Request Page
↓
Server Generates HTML
↓
Browser Receives HTML
↓
Page Displays
```

Traditional websites have worked this way for decades.

PHP, Ruby on Rails, Laravel, Django, and many other frameworks rely heavily on SSR.

### Advantages of SSR

- Content is available immediately.
- Excellent SEO.
- Works without JavaScript.
- Fast first render for content-heavy pages.
- Supports progressive enhancement naturally.

### Disadvantages of SSR

- The server must generate pages on demand.
- Expensive database queries can increase response times.
- Every page navigation requires another server request.

### Good Uses for SSR

SSR is often a great fit for:

- Marketing websites
- Ecommerce sites
- Blogs
- Documentation sites
- News websites

## Client-Side Rendering (CSR)

With client-side rendering, the browser receives a JavaScript application that builds the page.

The server often sends very little HTML initially.

```text
┌─────────┐      JS Bundle      ┌────────┐
│ Browser │ ◄────────────────── │ Server │
└─────────┘                     └────────┘
      │
      ▼
 Execute JavaScript
      │
      ▼
 Fetch Data
      │
      ▼
 Render Page
```

```text
Browser
↓
Downloads JavaScript
↓
JavaScript Runs
↓
Data Loads
↓
Page Displays
```

Many modern web applications use CSR.

### Advantages of CSR

- Smooth page transitions.
- Persistent application state.
- Rich interactive experiences.
- Fewer full-page reloads.

### Disadvantages of CSR

- Requires JavaScript.
- Larger bundles.
- Slower initial load in some situations.
- More complex debugging.
- Progressive enhancement becomes more difficult.

### Good Uses for CSR

CSR shines when building applications such as:

- Dashboards
- Project management tools
- Email clients
- Chat applications
- Interactive software

Examples include products such as Gmail, Trello, Notion, and Figma.

## Static Site Generation (SSG)

Static site generation produces pages during the build process.

Instead of generating pages on demand, the pages already exist before visitors arrive.

```text
        Build Time
            │
            ▼
      Generate HTML
            │
            ▼
      Deploy to CDN
            │
            ▼
       ┌─────────┐
       │ Browser │
       └─────────┘

✓ Instant delivery
```

```text
Build Site
↓
Generate HTML Files
↓
Deploy Files
↓
Serve Files Directly
```

When a visitor requests a page, the server simply sends a prebuilt file.

### Advantages of SSG

- Extremely fast.
- Excellent SEO.
- Low hosting costs.
- Very secure.
- Works well with CDNs.

### Disadvantages of SSG

- Content updates require rebuilding.
- Dynamic content can be more complicated.
- Very large sites may have lengthy build times.
- Build times can become expensive on hosted platforms.

### Build Times and Hosting Costs

Static sites are often extremely inexpensive to host because the server simply serves prebuilt files.

However, large static sites introduce a different cost: build time.

Imagine a site with:

- 10 portfolio posts
- 100 blog posts
- 10,000 product pages

As the number of pages grows, build times increase.

On platforms such as Vercel, Netlify, and Cloudflare Pages, build minutes are a finite resource.

For very large sites, rebuilding every page for every content change can become expensive and slow.

This is one reason modern hosting platforms introduced hybrid approaches.

## Incremental Static Regeneration (ISR)

Some frameworks support a hybrid approach commonly known as Incremental Static Regeneration (ISR).

Instead of rebuilding the entire site whenever content changes, individual pages can be regenerated as needed.

Conceptually, it works like this:

```text
Visitor Requests Page
↓
Serve Existing Static Page
↓
Regenerate In Background
↓
Future Visitors Receive Updated Version
```

ISR attempts to combine many of the advantages of SSR and SSG:

- Fast static delivery
- Lower server costs
- Fresh content
- Reduced build times

Different frameworks and hosting providers implement this idea differently, but the underlying goal is the same: avoid rebuilding the entire site when only a small portion has changed.

For large content-heavy sites, ISR can be an excellent compromise between SSR and SSG.

For SvelteKit, Incremental Static Regeneration (ISR) is available when deploying with `adapter-vercel`.

This allows pages to be regenerated incrementally rather than rebuilding an entire site whenever content changes.

However, ISR is tied to specific hosting platforms and adapters rather than being a universal SvelteKit feature that works everywhere.

One of SvelteKit's strengths is that it allows different rendering strategies to coexist within the same project. A blog post might be prerendered, a contact page might use SSR, and an interactive tool might use CSR.

For many small and medium-sized sites, simple prerendering or SSR is still sufficient. ISR becomes more attractive as content volume, build times, and hosting costs increase.

## Progressive Enhancement

One important consideration is progressive enhancement.

Progressive enhancement means starting with a working HTML experience and adding JavaScript enhancements when available.

Consider a simple form:

```html
<form method="POST">
  <input name="email" />
  <button>Submit</button>
</form>
```

This works even if JavaScript fails.

Later, we can enhance the experience with client-side validation, loading indicators, or AJAX submissions.

SSR and SSG tend to support progressive enhancement naturally.

CSR often assumes JavaScript is required from the beginning.

## Performance Considerations

Many developers assume CSR is always faster.

The reality is more nuanced.

For example, a static page generated with SSG may load almost instantly from a CDN.

Meanwhile, a client-rendered page might need to:

- Download JavaScript
- Parse JavaScript
- Execute JavaScript
- Fetch data
- Render content

before the user sees meaningful content.

The best choice depends on the specific site.

## A Useful Question

Svelte creator Rich Harris often frames the decision with a simple question:

> Will any two people always see the same thing when visiting the same route?

If the answer is yes, the page is often a good candidate for static site generation.

Examples include:

- Blog posts
- Portfolio entries
- Documentation pages
- Marketing pages

A blog post about CSS Grid is the same document for every visitor.

Generating it ahead of time is usually faster, cheaper, and simpler than rendering it on every request.

However, if the page depends on user-specific information, authentication, shopping carts, dashboards, or frequently changing data, SSR or CSR may be more appropriate.

## User Experience Considerations

CSR can provide a more app-like experience.

Because the page isn't fully reloaded, elements such as sidebars, menus, and application state can remain intact between navigations.

For example, imagine a music player fixed to the bottom of the screen. With CSR, a song can continue playing as users navigate between pages because the player remains mounted in the browser. With SSR or SSG, a traditional page navigation typically reloads the document, causing the audio player to restart unless additional techniques are used.

However, CSR can sometimes introduce unexpected behavior.

For example, hover states, focus states, and scroll positions may persist because the browser never loads a new document.

SSR and SSG often avoid these issues because each navigation creates a fresh page.

## Modern Frameworks

Frameworks such as SvelteKit support all three approaches.

A single project can even use multiple strategies:

```text
          ┌─────────────────┐
          │   SvelteKit     │
          └─────────────────┘
              /    |      |
             /     |      |
            ▼      ▼      ▼
        Blog   Dashboard Contact
        SSG      CSR       SSR
```

- SSG for blog posts
- SSR for dynamic pages
- CSR for highly interactive tools

This flexibility allows developers to choose the best solution for each page rather than forcing the entire site into a single architecture.

## Which Approach Should You Choose?

There is no universal answer.

A useful rule of thumb is:

### Choose SSG when:

- Content changes infrequently.
- SEO is important.
- Maximum performance is desired.

### Choose SSR when:

- Content changes frequently.
- SEO is important.
- Pages depend on server-side data.

### Choose CSR when:

- The site behaves more like software than a document.
- Users spend long periods interacting with the application.
- Maintaining client-side state is valuable.

## Final Thoughts

The web began as a collection of documents.

Many modern websites are still primarily documents, even when built with sophisticated frameworks.

Before choosing a rendering strategy, ask a simple question:

> Is this page primarily a document or an application?

For document-oriented pages, SSG or SSR are often excellent choices.

For application-oriented experiences, CSR may provide a better user experience.

Understanding the tradeoffs allows you to choose the right tool for the job rather than following the latest trend.
