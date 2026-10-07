// PostHog, bundled into the site. Loaded by components/Analytics.astro once the
// page is up, so it never holds anything else back.
//
// This is PostHog's full build: the session recorder, web vitals and dead-click
// detection are already inside it, so the SDK never downloads them. Downloaded,
// they come as /static/posthog-recorder.js and friends, and privacy lists such
// as EasyPrivacy (uBlock Origin, Brave, AdGuard) block those names on any
// domain, our proxy included: those visitors sent events but never a replay.
// The file is named site.ts so its bundle carries no name a list could match.
import posthog from 'posthog-js/dist/module.full';
import type { PostHog } from 'posthog-js/dist/module.full';
import { POSTHOG_KEY, POSTHOG_HOST } from '../config';

declare global {
  interface Window { posthog?: PostHog }
}

// Set before init: the cookie banner checks window.posthog.__loaded, which init
// sets, in case it runs after `ph:loaded` has already gone out.
window.posthog = posthog;

posthog.init(POSTHOG_KEY, {
  api_host: POSTHOG_HOST,
  // Links from the toolbar and replays still open PostHog's own app.
  ui_host: 'https://us.posthog.com',
  defaults: '2026-08-30',
  // Rejecting switches to cookieless counting rather than stopping it.
  cookieless_mode: 'on_reject',
  // We use no feature flags, so skip the /flags request. (Not
  // advanced_disable_flags: that also stops the remote config that switches
  // session replay on.)
  advanced_disable_feature_flags: true,
  // A person profile for every visitor, not only identified ones, so each
  // carries its device, location, referrer and UTM properties.
  person_profiles: 'always',
  // Heatmaps (clicks, mouse movement, scroll depth) and dead clicks: clicks
  // that change nothing on the page.
  capture_heatmaps: true,
  capture_dead_clicks: true,
  // Web vitals (LCP, CLS, FCP, INP) and the timing of every request.
  capture_performance: { web_vitals: true, network_timing: true },
  // Session replay still needs "Record user sessions" switched on in the
  // project settings; these only widen what a replay captures once it runs.
  enable_recording_console_log: true,
  session_recording: { maskAllInputs: false, recordCrossOriginIframes: true },
  loaded: (ph) => {
    // Not answered yet → track as if accepted. `on_reject` alone would wait
    // for an answer. No $opt_in event: the visitor didn't click anything.
    if (ph.get_explicit_consent_status() === 'pending') ph.opt_in_capturing({ captureEventName: false });
    document.dispatchEvent(new CustomEvent('ph:loaded', { detail: ph }));
  },
});

export default posthog;
