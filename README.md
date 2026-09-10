# Sankeerthana — Portfolio

A dark, editorial portfolio built with Next.js (App Router), TypeScript, and
Tailwind CSS v4. Content lives in plain data files so you can update it
without touching any component code.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js app — deploy it anywhere Next.js runs. The
easiest path is [Vercel](https://vercel.com): push this folder to a GitHub
repo, import it in Vercel, and it deploys with zero config. Netlify and
Cloudflare Pages also work with their Next.js adapters.

## Where content lives

Everything you're likely to edit is in `/data`, as plain TypeScript objects
— no CMS, no build step needed to change text.

| File | What it controls |
|---|---|
| `data/site.ts` | Name, tagline, hero statement, email, GitHub/LinkedIn URLs, resume link, nav items, focus-area tags |
| `data/projects.ts` | Every project: tagline, problem, product bullets, team-vs-personal contribution, architecture, tech stack, links, and the homepage tier (1 = large feature, 2 = medium, 3 = compact) |
| `data/experience.ts` | Work/hackathon experience timeline |
| `data/skills.ts` | "Technical DNA" skill groups + LeetCode/problem-solving stats |
| `data/achievements.ts` | Achievements list + education history |
| `data/certifications.ts` | Certification cards (featured + "view all") — each links out to the real Drive document |

### Add a new project

Add an object to the `projects` array in `data/projects.ts` with a unique
`slug` — that automatically creates the page at `/work/<slug>`, adds it to
the homepage grid, the sitemap, and the "next project" links on other case
studies. No other file needs to change.

### Edit an existing project

Find it by `slug` in `data/projects.ts` and edit the fields directly. The
`tier` field controls how large its homepage card is (`1` = full-width
feature row, `2` = two-column, `3` = compact three-column).

### Change colors / theme

All color tokens are defined once, in `app/globals.css` under `@theme`:
`--color-bg`, `--color-ink`, `--color-accent`, etc. Change a value there and
it updates everywhere.

### Change typography

Fonts are self-hosted via `@fontsource/inter` and `@fontsource/jetbrains-mono`
(imported in `app/layout.tsx`), so the site doesn't depend on a live
connection to Google Fonts at build or runtime. Swap in a different
`@fontsource` package and update the `--font-sans` / `--font-mono` values in
`app/globals.css` to change typefaces.

### Change navigation

Edit the `nav` array in `data/site.ts`.

### Update your resume

Replace `public/Sankeerthana-Resume.pdf` with a new PDF of the same
filename (or update `resumeHref` in `data/site.ts` if you rename it).

### Update social links

`data/site.ts` → `email`, `github`, `linkedin`.

## About the project data — sourcing and honesty

This site was built from:
- The candidate's resume (uploaded directly), for all project summaries,
  experience, education, skills, and achievements.
- Direct inspection of the public GitHub repositories for **OptiVox**,
  **Jewelry Design Pattern Generation**, and **Genai_Finance_Tools** — code,
  READMEs, and configs were read directly, not assumed.
- The connected Google Drive folder: 7 real demo videos and 9 real
  certificates/documents were inspected directly and mapped to the correct
  project (see "Demo videos" below).

Two repositories referenced in the original brief — **Vidura_Chloe_Centific**
and **DBGuard** — returned 404 when fetched and could not be verified beyond
the resume's own description and their demo videos.

Two corrections worth knowing about, both flagged in-page as "Sourcing
notes" rather than silently fixed:
- **No Tara demo video exists** in the connected Drive, despite being
  expected. Both Drive folders were searched directly and nothing surfaced.
  Tara's case study has no demo section as a result — nothing was faked.
- **The Vidura/Centific hackathon date was corrected** from the resume's
  "Apr – May 2026" to "Apr – May 2025", based on the signed Centific offer
  letter (dated 3 May 2025, describing a hackathon that ran 20 Apr – 3 May
  2025) — a primary document is treated as more reliable than a resume line.

On every case study, "Team / project" is explicitly separated from "My
contribution," and CyberGuard360 (the internship) and DBGuard (the research
project worked on during it) are kept as two distinct entries, per your
instruction — even though a signed certificate confirms DBGuard was that
internship's official project title.

## Demo videos — how they're hosted

**Debugging note:** an earlier version of this site had the video embeds
render but untested — a real headless-browser click-through (see
`scripts/test-video-embeds.js`) since confirmed: every "Play" button
mounts an iframe with the exact `https://drive.google.com/file/d/<id>/preview`
URL, `next.config.ts` now ships an explicit CSP with `drive.google.com` in
`frame-src` (so no hosting platform can silently strip it), and every
individual file's sharing permission was re-verified ("Anyone with the
link: Viewer"). Run `npm run test:videos` against a running instance
(local or deployed) to re-verify this yourself at any time — see the
script's header comment for exact usage. One caveat: actual video *byte
streaming* could not be confirmed from the sandboxed environment this site
was built in, since that sandbox blocks all outbound requests to
`drive.google.com` at the network level (unrelated to this app's code) —
so if a video still won't play after deploying this version, it's most
likely one of: your own network/browser blocking embedded Google content,
or (less likely, since already checked) a Drive-side restriction on the
specific file. The "Open" link next to every player is the fallback for
exactly that case.

Every demo video lives in your Google Drive, not this repo. The videos
range from ~2MB to **1.4GB** (the Vidura demo) — far too large to download,
bundle, and self-host as part of this build. Instead, `DriveVideoPlayer`
(`components/DriveVideoPlayer.tsx`) embeds each one via Google Drive's own
inline preview (`drive.google.com/file/d/<id>/preview`) inside an iframe:

- It plays **inside the page** — no tab redirect to Drive.
- It shows a custom poster + play button first (matching the dark theme)
  and only mounts the iframe on click, so no video loads on page load.
- Fullscreen, play/pause, volume, and scrubbing are Drive's native player
  controls, not a fully custom `<video>` element — that's the trade-off for
  not fabricating a direct-stream URL or silently dropping the size limit.
- All 7 videos are confirmed set to "Anyone with the link: Viewer," so a
  recruiter with no Google account can watch them without a login wall.

Video → project mapping (all verified against actual Drive file IDs):

| Project | Video | Drive file |
|---|---|---|
| Vidura | `Chloe- demo of Vidura.mp4` | 1.4GB |
| DBGuard | `DBGuard_Demo.mp4` | 37MB |
| Cyber Guard 360 | `CBG360_WorkDemo.mp4` + `CBG360_PromoVideo.mp4` (two, separate from DBGuard's) | 1.9MB + 6.7MB |
| GenAI Finance GPT | `Genai Finance GPT Demo.mp4` | 13MB |
| OptiVox | `optivox_demo.mp4` | 19MB |
| Jewelry Design Pattern Generation | `jewelryDesignPatternGeneration_demo.mp4` | 24MB |
| Tara | — none found | — |
| SafeJourney | — none exists (confirmed) | — |

**If you later want true self-hosted `<video>` playback** (e.g. after
moving to a CDN-backed host), download each file from Drive yourself, drop
it in `public/videos/`, and swap the `driveFileId` prop on
`DriveVideoPlayer` for a `src` pointing at your local file — the component
would need a small follow-up change to branch between an `<iframe>` (Drive)
and a native `<video>` tag (self-hosted).

**If you connect access to the two private repos** (Vidura_Chloe_Centific,
DBGuard), the right next step is to re-run the research pass on those two
and expand their "How it works" sections with verified implementation
detail rather than hand-editing.


## Key files to know

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx             Homepage — assembles all sections
  globals.css          Design tokens (colors, fonts)
  work/[slug]/page.tsx Case study template (reads from data/projects.ts)
  sitemap.ts, robots.ts
data/
  site.ts, projects.ts, experience.ts, skills.ts, achievements.ts,
  certifications.ts
components/
  Navbar, Footer, Hero, SystemMap, ProjectCard, ProjectGrid,
  ExperienceTimeline, TechStack, AchievementList, CertificationSection,
  AboutSection, ContactCTA, CaseStudySection, DriveVideoPlayer
public/
  Sankeerthana-Resume.pdf
```
