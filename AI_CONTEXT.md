# AI Context & Developer Documentation

- **Target Audience:** AI Agents (Cursor, Windsurf, Copilot, Gemini) & Human Developers.
- **Project:** Hoxmot Blog
- **Domain:** hoxmot.eu

## 1\. Project Overview

Hoxmot Blog is a high-performance, statically generated personal blog focusing on Software Development, Video Games, and Tech. It utilizes **Astro v5** for zero-JS default rendering, **Tailwind CSS** for styling, and **Pagefind** for static search.

### Core Philosophy

1. **Static First:** Zero runtime JavaScript unless absolutely necessary (e.g., Theme Toggle, Search).
2. **Type Safety:** Strict TypeScript and Zod schemas for all content.
3. **Visual Identity:** "Fire & Ice" theme (Orange/Blue) with a strict "Editorial" font stack.
4. **Privacy:** No tracking cookies. localStorage usage is strictly consent-gated via a versioned banner.

## 2\. Tech Stack

| Component     | Technology         | Configuration Notes                                    |
| :------------ | :----------------- | :----------------------------------------------------- |
| **Framework** | Astro v5           | SSG Mode (output: 'static').                           |
| **Styling**   | Tailwind CSS v3    | Configured in tailwind.config.mjs.                     |
| **Logic**     | TypeScript         | Strict mode enabled.                                   |
| **Testing**   | Vitest             | Unit testing for utilities and logic. Coverage via v8. |
| **Search**    | Pagefind           | Indexing runs post-build.                              |
| **Linting**   | ESLint \+ Prettier | Run via pnpm lint and pnpm format.                     |
| **Content**   | MD/MDX             | Managed via Astro Content Collections.                 |

## 3\. Project Structure

```
├── public/                  \# Static assets (images, favicon, robots.txt)
├── src/
│   ├── components/          \# Reusable UI (Header, Footer, ArticleCard)
│   ├── content/             \# The Database
│   │   ├── blog/            \# Content Entries (Categorized folders: software/, games/, tech/)
│   │   ├── pages/           \# Static pages (About)
│   │   └── config.ts        \# Zod Schemas (Source of Truth)
│   ├── layouts/
│   │   ├── BaseLayout.astro \# HTML Shell \+ SEO \+ Theme Script \+ Cookie Banner
│   │   └── BlogPost.astro   \# Article specific layout (Intro Rule applied here)
│   ├── pages/               \# File-based Routing
│   │   ├── index.astro      \# Landing Page
│   │   ├── rss.xml.ts       \# Global Feed
│   │   └── \[...slug\].astro  \# Dynamic Routes
│   ├── styles/
│   │   └── global.css       \# Tailwind base layers & CSS Variables
│   └── utils/
│       ├── readTime.ts      \# Reading time logic
│       ├── seoUtils.ts      \# Meta tag logic
│       ├── slugUtils.ts     \# URL cleaning
│       └── storageUtils.ts  \# Consent-aware storage wrapper
├── astro.config.mjs         \# Integrations & Sitemap config
└── tailwind.config.mjs      \# Design Tokens
```

## 4\. Design System ("Fire & Ice")

### Color Palette

- **Primary (Action):** \#ff9900 (Amazon Orange). Text on top must be Dark.
- **Secondary (Accent):** \#1e90ff (Dodger Blue). Used for links, borders, focus.
- **Backgrounds:**
  - Light: \#ffffff / \#f8f9fa
  - Dark: \#0f172a (Deep Slate) / \#1e293b

### Typography Rules

- **Headings/Code:** JetBrains Mono
- **UI/Nav/Meta:** Inter
- **Body Copy:** Merriweather

### The "Intro Rule"

In BlogPost.astro, we apply a CSS utility that targets the **first paragraph** of the content.

- **First Paragraph:** Rendered in **Inter** (Sans-Serif). Acts as a summary/lead.
- **Rest of Content:** Rendered in **Merriweather** (Serif). Optimized for long-form reading.

### Assets & Images

- **Format:** Prefer **WebP** for all web assets.
- **Storage:** Currently stored in public/.
- **Optimization:** Ensure images are compressed before committing.

## 5\. Development Workflow

### Commands

- **Start Dev Server:** pnpm dev
- **Lint & Format:** pnpm lint && pnpm format
- **Test:** pnpm test (Unit tests)
- **Production Build:** pnpm build (Runs checks \-\> builds \-\> indexes search)
- **Preview Production:** pnpm preview

### Implementation Guidelines for Agents

1. **Atomic Tasks:** Break requests into small, testable steps.
2. **Verify First:** Before marking a task complete, run pnpm build to ensure no regression.
3. **Strict Typing:** Never use any. Use the types defined in src/content/config.ts or create new interfaces.
4. **Centralized Config:** Do not hardcode strings (titles, descriptions, event names). Use src/consts.ts.
5. **Storage:** **NEVER** use localStorage directly. Use src/utils/storageUtils.ts to ensure GDPR/Consent compliance.

### Testing Strategy

- **Current State:** Low coverage.
- **Goal:** Increase coverage incrementally.
- **Rule:** When adding a new utility function (in src/utils), **YOU MUST** write a corresponding .test.ts file in src/test/.

## 6\. Content & Editorial Guidelines

**Role:** The AI Agent acts as a **Reviewer/Editor**, not a Ghostwriter.

### Voice & Tone

- **Casual but Competent:** Professional knowledge delivered in a conversational way.
- **Engaging:** Avoid stiff, academic language. Use active voice.
- **No Hype:** Focus on technology and reality, not marketing fluff.

### Review Checklist (When Agent reviews user content)

1. **Frontmatter:** Does it have valid title, description, pubDate, category (strict enum), and tags (strict enum)?
2. **Structure:** Does it have a clear Lead Paragraph (for the Intro Rule)?
3. **Tags:** Are the tags in ALLOWED_TAGS list in src/consts.ts? If not, ask user to add them or choose valid ones.

## 7\. Meta-Documentation

### How to Update This File

- If you change the **File Structure**, update Section 3\.
- If you add a new **Tech Stack** component, update Section 2\.
- If you modify **Design Tokens**, update Section 4\.
- **Rule:** This file is the source of truth. Keep it synchronized with the code.
