---
name: Production asset paths
description: Cross-platform asset path casing for deployment builds
---

Imported frontend projects can appear to work on case-insensitive local filesystems while failing on Linux-hosted deployment builders when import paths use different casing from the asset directories.

**Why:** Netlify and Vercel build on Linux, where `Images` and `images` are different paths.

**How to apply:** When a production build reports unresolved assets, compare import casing with the exact tracked directory and filename casing before changing the project structure.