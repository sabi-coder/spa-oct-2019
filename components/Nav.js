function createListHTML(links) {
  return links
    .map(
      link =>
        `{li class="button"><a href="./${link.toLowerCase()}/">${link}</a></li>`
    )
    .join("");
}

export default st => `
    <nav>
      <ul class="flex justify-space-around">
        ${createListHTML(st)}
      </ul>
    </nav>
  `;
