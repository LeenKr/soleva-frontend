# SOLEVA redesign and production audit

Date: November 8, 2026 (Asia/Beirut).

## Delivery status

Implemented in the existing frontend and backend repositories. Complete corrected files are saved in place. No project dependencies were added, removed, or upgraded; package manifests and lockfiles are unchanged. No secrets or existing `.env` files were changed. No commits, pushes, or production deployments were performed.

The supplied attachment contained the written brief; there was no screenshot attachment in that attachment directory. Existing source, branding assets, and screenshots of the implementation formed the visual reference. The live frontend could not be retrieved through the available web tool. Production dashboard configuration and real inbox delivery were not accessible or verified.

## 1. Design and UX improvements

- Preserved original SOLEVA logo, hero artwork, navy #0F2233, secondary navy #183247, teal #14B8A6, white/slate palette, founders, services, and contact information.
- Refined typography, section numbering, spacing, borders, restrained gradients, and consistent cards and controls.
- Fixed navigation with scroll background/shadow, active section indicator, section offsets, desktop links, and responsive mobile menu. Mobile links close the menu; Escape closes it and returns focus to its button.
- Reworked hero hierarchy and primary/secondary actions. Entrance animation and smooth scrolling honor reduced-motion preferences.
- Retained About introduction, Our Approach, Who We Are, Focus and Values. No invented metrics, achievements, clients, or testimonials.
- Retained Landing Pages, Websites, SaaS & Dashboards, and Mobile Apps. Their CTAs scroll to Contact and select the matching project type.
- Preserved email `soleva.dev@gmail.com`, phone `+961 81 750 923`, correct WhatsApp conversation, Saida/remote information, Instagram, and response time.
- Refined contact layout, mobile stacking, labels, focus states, errors, loading indicator, slow-server notice, and honest success feedback.
- Refined footer layout and link presentation across screen sizes.
- Added skip link, landmarks, input error associations, first-invalid-field focus, required fields, live feedback, and reduced-motion support. Inputs use 16px text to avoid the common iPhone input zoom trigger; actual iPhone Safari still requires a device test.
- Updated title/description, canonical URL, Open Graph and Twitter metadata, branded favicon/apple icon, social image, robots.txt, and sitemap.xml. Logo dimensions and hero image dimensions are explicit; hero loading is prioritized. Existing Vercel Analytics remains.

## 2. Contact form problems found and corrected

| Previous behavior | Implemented behavior |
| --- | --- |
| Any HTTP 200 could show success | Requires successful HTTP response, `ok: true`, and a provider message ID |
| Honeypot produced client-only fake success | Submitted to backend, which rejects populated honeypots without sending or claiming success |
| Submit disabled while invalid, obscuring validation feedback | Submit permits validation; errors are displayed and first invalid field is focused |
| Only React state guarded sending | Immediate ref lock plus disabled fieldset/button prevents concurrent submissions |
| Retrying could send duplicate inquiries | Same unchanged payload reuses an idempotency key; backend shares pending/completed results |
| Backend errors could be arrays | Consistent string error and optional field-error map |
| 20-second timeout poorly suited to a sleeping backend | 65-second client deadline, slow-connection notice, explicit delivery-uncertain timeout message |
| Project type varied in capitalization | Consistent `Mobile App` and matching types in frontend/backend |
| Service links lost inquiry context | Corresponding project type preselected |

All eight requested fields remain. Budget is optional, free text, with a 200-character limit; it is not coerced into a number. Errors preserve the inquiry. Form resets only after confirmed provider acceptance.

## 3. Backend integration findings and changes

### Actual email path

The original implementation used Resend REST via native fetch, not Nodemailer or Gmail SMTP. Nodemailer was installed but unused. dotenv was installed but never loaded. The local backend environment contained `RESEND_API_KEY`, `MAIL_FROM`, and `MAIL_TO`, not SMTP credentials. Render dashboard values were not inspected, so no claim is made that new SMTP names already exist there.

The existing path is preserved by default:

`Contact form -> POST /api/contact -> Express -> honeypot -> Zod -> sendContactEmail -> Resend HTTPS API -> configured MAIL_TO inbox`

An explicit optional Gmail path is implemented with the already-installed Nodemailer:

`Contact form -> same route/validation -> sendContactEmail -> awaited sendMail -> Gmail SMTP -> configured MAIL_TO inbox`

Set `EMAIL_PROVIDER=gmail` to select it. Gmail always uses SMTP_USER as its sender, matching the authenticated account; customer email becomes Reply-To. Existing Resend variable names are unchanged. No insecure email-testing endpoint was added.

### Correctness and safety

- Server now loads dotenv, preserving externally supplied production environment variables.
- Required project type and explicit true consent are enforced server-side. Name/email/message validation and field limits are consistent with the form.
- Server-side honeypot rejects bot payloads before mail delivery.
- API success waits for provider acceptance and a message ID. SMTP requires at least one accepted recipient and no rejected recipients. Provider failure returns HTTP 500 with a safe message.
- Provider credentials, bodies, customer details, and raw provider exceptions are not logged. Failure logs are fixed diagnostic strings.
- Email includes escaped HTML and a plain-text alternative. Subject uses the validated project type.
- Explicit mail configuration checks replace potentially misleading fallback sender/recipient defaults. Existing local environment already contains MAIL_FROM/MAIL_TO; production must also supply them for Resend.
- Exact production and localhost CORS origins remain allowed. Unrelated `.vercel.app` websites are no longer automatically allowed. Add exact preview/custom origins through CORS_ALLOWLIST as needed. OPTIONS permits Content-Type and Idempotency-Key.
- Render trust proxy remains one hop. General API limiter remains 60/minute/IP; contact adds 8/minute/IP. Limits return JSON 429 responses.
- Request body limit is 32 KB. Invalid JSON, oversized bodies, CORS rejection, unknown routes, and server errors return safe JSON.
- Resend requests have a 25-second deadline. SMTP connection, greeting, and socket timeouts are configured with TLS enabled and debug logging disabled.
- Extracted a testable Express application factory; the existing Node startup command and route structure remain.

### Duplicate-delivery limits

The bounded in-memory idempotency cache holds up to 1,000 attempt records for 15 minutes and protects concurrent retries within one running process. Resend also receives the same provider idempotency key. The cache is not durable or shared across Render instances/restarts; SMTP cannot guarantee exactly-once delivery after an ambiguous network failure. No persistent queue or database was introduced. Rate limiting is also process-local.

### Render SMTP constraint

Render's free web services block outbound SMTP ports 25, 465, and 587. Gmail SMTP therefore requires a compatible paid Render instance; HTTPS Resend remains suitable where SMTP ports are blocked. The current instance tier was not verified. References: [Render free-service limits](https://render.com/docs/free), [Render SMTP change](https://render.com/changelog/free-web-services-will-no-longer-allow-outbound-traffic-to-smtp-ports), [Nodemailer SMTP configuration](https://nodemailer.com/smtp).

## 4. Complete file inventory

Frontend files modified or added:

- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\.gitignore`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\.env.example`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\eslint.config.js`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\index.html`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\App.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\components\Navbar.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\components\Footer.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\sections\Hero.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\sections\About.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\sections\Services.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\sections\Contact.jsx`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\src\index.css`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\public\soleva-icon.png`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\public\soleva-social.png`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\public\robots.txt`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\public\sitemap.xml`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing\SOLEVA-AUDIT.md`

Backend files modified or added:

- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\.env.example`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\src\index.js`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\src\app.js`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\src\routes\contact.js`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\src\middleware\validate.js`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\src\utils\mailer.js`
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\backend\test\contact.test.js`

Generated, Git-ignored review artifacts:

- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing/dist/`: complete production build.
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing/.qa/viewport-{width}.png`: full-page screenshots for all seven widths.
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing/.qa/browser-results.json`: browser assertions and viewport measurements.
- `C:\Users\Leenk\Desktop\Desktop folders\About Me\solevaa\soleva-landing/.qa/browser-test.mjs` and `.qa/cdp.mjs`: local browser QA scripts, using no project dependency additions.

Backend automated tests are retained in the backend repository. Temporary backend staging files were removed. Local QA/browser-profile artifacts are ignored by Git and ESLint. The existing tracked frontend .env contains the public API base; adding ignore rules does not untrack existing files.

## 5. Tests executed and results

| Check | Result |
| --- | --- |
| Frontend `npm ls --depth=0` | All declared direct dependencies resolved |
| Backend `npm ls --depth=0` | All declared direct dependencies resolved |
| Frontend `npm run lint` | Passed after excluding local QA profile files and allowing capitalized JSX component parameters |
| Backend `node --test test/contact.test.js` | 12 tests passed, zero failures; mocked providers, no actual mail sent |
| Backend actual `node src/index.js` startup | Started successfully; GET /api/health returned HTTP 200 and ok:true |
| Chrome at 1440, 1280, 1024, 430, 390, 375, 320 px | All passed horizontal-overflow and section/input checks; full-page screenshots saved |
| Chrome menu interaction | Opens, link selection closes, section scroll offset respected |
| Chrome service CTA | Contact project type preselected |
| Chrome invalid submission | First invalid field receives focus |
| Chrome concurrent submit | One request; sending button disabled |
| Chrome mocked provider success | Confirmed message ID required; successful inquiry resets form |
| Chrome mocked HTTP 500 | Error shown; entered data retained |
| Chrome mocked HTTP 200 without message ID | Rejected as unconfirmed; no false success |
| Chrome mocked network failure | Error shown; entered data retained |
| Browser runtime exceptions | Zero during automated checks |
| Whitespace diff checks | Passed |

Backend tests cover required fields, optional/arbitrary budget, honeypot, concurrent and completed retries, changed-payload conflict, sanitized mail errors, failed-provider retry, missing message IDs, CORS preflight for both requested origins, rejection of unrelated origins, health, malformed JSON, rate limiting, Resend payload/escaping/idempotency/deadline, missing mail configuration, Gmail sender/reply-to, SMTP rejection handling, and backward compatibility for clients without an idempotency header.

The project originally had no automated tests configured. Frontend interaction checks use mocked responses inside the QA browser. Backend integration tests exercise real HTTP requests to the Express application with injected mail providers. These checks do not establish real inbox delivery.

Initial sandbox attempts blocked Node/esbuild child processes with EPERM. The required build/tests were rerun successfully with approved execution. A lint run initially included Chrome's generated extension files; explicit QA ignores resolved that scope issue. No dependency updates were needed.

## 6. Production build result

`npm run build`: passed with Vite 7.1.7, 1,680 transformed modules.

- HTML: 2.15 KB (0.80 KB gzip).
- CSS: 20.16 KB (5.36 KB gzip).
- JavaScript: 216.51 KB (67.73 KB gzip).
- Hero artwork: 7.06 KB; original logo: 21.43 KB.
- Branded icons, social image, robots.txt and sitemap.xml included in dist.

Build emitted advisory warnings about outdated Browserslist/baseline mapping datasets. They did not fail the build, and dependencies were not upgraded. No Lighthouse score or Core Web Vitals result is claimed.

## 7. Vercel environment and deployment

Set for the intended Production/Preview environments:

```dotenv
VITE_API_BASE_URL=https://soleva-backend.onrender.com
```

Framework: Vite. Build: `npm run build`. Output: `dist`. Existing vercel.json SPA rewrite remains unchanged. Vite embeds the API base at build time, so environment changes require a fresh frontend deployment. Preserve existing Vercel Analytics integration.

The actual Vercel dashboard was not accessed. The local .env already points to the requested backend URL. Canonical/social/sitemap URLs use the current production domain; update them together if a custom domain is introduced.

## 8. Render environment and deployment

Common settings:

```dotenv
NODE_ENV=production
CORS_ALLOWLIST=http://localhost:5173,https://soleva-alpha.vercel.app
MAIL_TO=<existing intended receiving inbox>
```

Render normally supplies PORT; keep its platform value. The code defaults to 5000 locally. Keep start command `npm start` and the repository's current root directory. Existing dependencies can be restored with `npm ci` during deployment.

Existing/default Resend path:

```dotenv
EMAIL_PROVIDER=resend
RESEND_API_KEY=<existing valid private key>
MAIL_FROM=<sender authorized by the Resend account>
MAIL_TO=<intended receiving inbox>
```

EMAIL_PROVIDER may remain unset to preserve the Resend default. Verify the sender and recipient restrictions of the actual Resend account. The public contact address is not automatically substituted for MAIL_TO.

Optional Gmail SMTP path:

```dotenv
EMAIL_PROVIDER=gmail
SMTP_USER=<authenticated Gmail address>
SMTP_PASS=<Gmail app password>
MAIL_TO=<intended receiving inbox>
```

SMTP_USER and SMTP_PASS are explicitly introduced opt-in names, not verified existing Render variables. MAIL_FROM and RESEND_API_KEY are unused in Gmail mode. SMTP_USER also supplies the sender; Reply-To is always the customer's address. Gmail uses smtp.gmail.com:465 with TLS. Use a Render instance that allows outbound SMTP. Do not copy placeholder credentials to production or commit secrets.

Both repositories now contain non-secret .env.example files.

## 9. Redeployment requirements

- Frontend redeployment: **required**.
- Backend redeployment: **required**.
- No deployment was performed.
- Deploy backend before frontend. Older clients without Idempotency-Key remain supported; updated clients supply a stable key for retry protection. The backend returns messageId as before.

## 10. Remaining manual production checks

1. Review and commit/push the frontend and backend changes in their respective repositories.
2. Inspect the real Render environment and instance tier. Keep Resend as configured, or explicitly choose Gmail and supply the documented SMTP values on a compatible plan.
3. Confirm MAIL_TO is the intended receiving inbox. For Resend, confirm MAIL_FROM is authorized. For Gmail, authenticate the chosen SMTP_USER with an app password.
4. Confirm Vercel's VITE_API_BASE_URL and Render's exact CORS origins, including any preview/custom domain used for testing.
5. Deploy the backend first, then redeploy the frontend. Verify the production health endpoint and contact preflight.
6. Submit one identifiable real inquiry through the deployed frontend, confirm its arrival in MAIL_TO (including spam), inspect customer Reply-To, and verify no duplicate after a retry. **Actual Gmail/Resend inbox delivery has not been tested. Production SMTP testing is still required if Gmail is selected.** Provider acceptance alone does not prove final inbox placement.
7. Test on an actual iPhone Safari device and a desktop browser: menu, anchor offsets, form zoom, select/checkbox behavior, validation, success/failure states, keyboard, and links. Chrome mobile viewport emulation is not Safari verification.
8. Inspect link previews/social images after deployment. No screen-reader audit or production performance audit was completed.

## 11. Technology foundation for future SOLEVA work

Continue using the existing stack and verify the source before changing it:

- JavaScript ES modules + JSX, HTML, CSS; no TypeScript implementation.
- React/React DOM 19.1.1; Lucide React 0.544.0; Vercel Analytics 1.5.0.
- Vite 7.1.7 + @vitejs/plugin-react 5.0.3 (Babel), npm lockfiles, ESLint 9.36.0.
- Tailwind CSS 3.4.13 with PostCSS 8.5.6 and Autoprefixer 10.4.21; custom global CSS provides the refined component styles. @tailwindcss/postcss 4.1.13 remains declared but is not the configured Tailwind pipeline.
- Node.js + Express 4.21.2; CORS 2.8.5; Helmet 7.2.0; Compression 1.8.1; express-rate-limit 7.5.1; Zod 3.25.76.
- dotenv 16.6.1 now actively loads local backend configuration. Nodemailer 6.10.1 now supports explicit optional Gmail mode. Nodemon 3.1.10 remains the development runner.
- Native fetch + JSON HTTP API. Resend HTTPS is the default mail provider; Gmail SMTP is optional. Node 18+ provides native fetch; the actual Render runtime version was not verified. Local checks used Node 20.19.4.
- Frontend Vercel; backend Render. Existing frontend and backend are separate Git repositories, not npm workspaces. The parent folder also has an independent package.json.
- No database, ORM, queue, authentication service, payment integration, external state manager, or frontend router was introduced.
- Frontend structure remains components/, sections/, assets/, public/ and App/main. Backend remains routes/, middleware/, utils/ with a small app.js factory and retained test/ suite.
