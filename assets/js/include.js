async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.getAttribute("data-include");

    try {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;
    } catch (err) {
      console.error("Include error:", file, err);
    }
  }
}

loadIncludes();