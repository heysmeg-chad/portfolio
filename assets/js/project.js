async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const res = await fetch("data/projects.json");
  const projects = await res.json();

  const project = projects.find(p => p.slug === slug);

  const container = document.getElementById("project");

  container.innerHTML = `
    <section class="case-hero container">
      <h1>${project.title}</h1>
      <p class="lead">${project.summary}</p>
    </section>

    <section class="case-image">
      <img src="${project.hero}" alt="">
    </section>

    <section class="container case-meta">
      <div><span>Client</span><p>${project.client}</p></div>
      <div><span>Role</span><p>${project.role}</p></div>
      <div><span>Year</span><p>${project.year}</p></div>
    </section>
  `;
}

loadProject();