function createArticleHTML(posts) {
  return posts
    .map(({ title, body }) => {
      return `
      <article>
        <h2>${title}</h2>
        <p>${body}</p>
      </article>
    `;
    })
    .join("");
}

export default st => `
  ${createArticleHTML(st.posts)}
  `;
