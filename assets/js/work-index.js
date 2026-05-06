async function loadProjects() {
  const res = await fetch("/data/projects.json");
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach(project => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `projects.html?slug=${project.slug}`;

    card.innerHTML = `
      <div class="card-image">
        <img src="${project.media.thumbnail || project.media.hero}" alt="${project.title}">
      </div>

      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

loadProjects();