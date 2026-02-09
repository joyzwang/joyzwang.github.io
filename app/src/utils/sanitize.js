import DOMPurify from "dompurify";

export function sanitize(html) {
  return DOMPurify.sanitize(html, {USE_PROFILES: { html: true }});
}