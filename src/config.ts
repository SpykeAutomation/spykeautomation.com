/**
 * Site-wide switches and addresses.
 *
 * PAUSED takes the whole marketing site off the air: every page renders the
 * coming-soon screen, and the real pages sit untouched in the repo. Flip it
 * back to `false` to bring the site up exactly as it was.
 */
export const PAUSED = false;

/** The quoting app itself; "Log in" goes here. */
export const APP_URL = 'https://app.spykeautomation.com';

/** Where demo requests and questions go. Shown as text as well as linked. */
export const CONTACT_EMAIL = 'hello@spykeautomation.com';

/**
 * Every "Get a demo" button: an email with the subject set and a few prompts
 * in the body, so the first reply already says what the shop quotes from.
 * Lines end in CRLF, which every mail client reads as a line break.
 */
const demoBody = [
  'Shop name:',
  'Jobs quoted per month:',
  'What you quote from (PDF drawings, Excel BOMs, specs):',
  'Best time for a call:',
  '',
].join('\r\n');
export const DEMO_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Demo request')}&body=${encodeURIComponent(demoBody)}`;

/** The closing call's "Talk to sales" button: an email with the subject set. */
export const SALES_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Sales question')}`;
