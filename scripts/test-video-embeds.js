/**
 * Verifies every demo video embed by driving a real headless browser:
 * loads each project page, confirms no iframe is present before
 * interaction (lazy-loading works), clicks the actual "Play demo"
 * button, and checks the resulting iframe's src and load status.
 *
 * Usage:
 *   npm install --save-dev playwright && npx playwright install chromium
 *   npm run build && npm run start &
 *   BASE_URL=http://localhost:3000 node scripts/test-video-embeds.js
 *
 * Or against a live deployment:
 *   BASE_URL=https://your-deployed-site.vercel.app node scripts/test-video-embeds.js
 */
const { chromium } = require("playwright");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const targets = [
  { path: "/work/vidura", expectId: "1p0akouhyAvJfiILye-fS5pwkOkDgxu9G" },
  { path: "/work/dbguard", expectId: "1BzvqGXDz2992D9rT9VX0HOweOzcjXcER" },
  { path: "/work/cyberguard360", expectId: "1j8ilDjNg7jd0SGcwop8Mk0spYrxQf2Yb" },
  { path: "/work/genai-finance", expectId: "1tP7f9WN3n9ZCVV4Pn248M2Iaz6v52Iq7" },
  { path: "/work/optivox", expectId: "1UUvLh2dvT44kEfcd9bHiz37Fi6UIIYBG" },
  { path: "/work/jewelry-design", expectId: "1Y6R0k5hBvtJjBbngNeYk002NL0KPYCBA" },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = [];

  for (const t of targets) {
    const resp = await page.goto(`${BASE_URL}${t.path}`, { waitUntil: "networkidle" });
    const cspHeader = resp.headers()["content-security-policy"] || "(none)";
    const iframeBeforeClick = await page.$("iframe");

    const playButton = await page.$('button[aria-label^="Play demo"]');
    let iframeSrc = null;
    let responseStatus = null;

    if (playButton) {
      const [iframeResponse] = await Promise.all([
        page.waitForResponse((r) => r.url().includes("drive.google.com"), { timeout: 10000 }).catch(() => null),
        playButton.click(),
      ]);
      const iframe = await page.$("iframe");
      if (iframe) iframeSrc = await iframe.getAttribute("src");
      if (iframeResponse) responseStatus = iframeResponse.status();
    }

    results.push({
      path: t.path,
      cspAllowsDrive: cspHeader.includes("drive.google.com"),
      iframeLazyLoaded: !iframeBeforeClick,
      playButtonFound: !!playButton,
      iframeSrcCorrect: iframeSrc === `https://drive.google.com/file/d/${t.expectId}/preview`,
      driveResponseStatus: responseStatus,
    });
  }

  console.table(results);
  await browser.close();
})();
