import DOMPurify from "dompurify";

export function cleanHTML(object) {
  for (const key in object) {
      if (object[key] === undefined) {
        object[key] = "";
      }
      object[key] = sanitized(object[key]);
    }
  return object;
}

function sanitize(html) {
  return DOMPurify.sanitize(html, {USE_PROFILES: { html: true }});
}