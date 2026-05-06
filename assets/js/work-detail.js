async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const res = await fetch("/data/projects.json");
  const projects = await res.json();

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    document.getElementById("project").innerHTML =
      "<div class='container'><p>Project not found</p></div>";
    return;
  }

  if (!project) return;

  document.getElementById("title").textContent = project.title;
  document.getElementById("summary").textContent = project.summary;
  document.getElementById("hero").src = project.hero;

  document.getElementById("meta").innerHTML = `
    <div><span>Client</span><p>${project.client}</p></div>
    <div><span>Role</span><p>${project.role}</p></div>
    <div><span>Year</span><p>${project.year}</p></div>
  `;

  const container = document.getElementById("content");

  project.sections?.forEach(section => {
    let block = "";

    if (section.type === "text") {
      block = `
        <div class="container case-section">
          <h2>${section.heading}</h2>
          <p>${section.body}</p>
        </div>
      `;
    }

    if (section.type === "image") {
      block = `
        <div class="case-image">
          <img src="${section.src}" alt="">
        </div>
      `;
    }

    if (section.type === "quote") {
      block = `
        <div class="container case-quote">
          <blockquote>${section.text}</blockquote>
        </div>
      `;
    }

    container.insertAdjacentHTML("beforeend", block);
  });
}

loadProject();