import Cookies from "js-cookie";

export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
  }


export async function csrfFetch(url, options = {}) {
  options.method = options.method || "GET";
   options.headers = options.headers || {};

  if (options.toUpperCase() !== "GET") {
    options.headers["Content-type"] =
    options.headers["Content-type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-Token");
  }

  const res = await window.fetch(url, options);

  if (res.status >= 400) throw res;

  return res;
}


