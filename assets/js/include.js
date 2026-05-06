async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  for (const el of elements) {
    const file = el.getAttribute("data-include");

    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error("Include not found");

      const html = await res.text();
      el.innerHTML = html;

    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  }
}

loadIncludes();