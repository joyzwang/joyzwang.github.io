import DOMPurify from "dompurify";

export function cleanPage(page) {
  for (const key in page) {
    if (page[key] === undefined) {
      page[key] = "";
    }
    page[key] = sanitize(page[key]);
  }
  return page;
}

function sanitize(html) {
  return DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
}
