function createPicsHTML(pics) {
  return pics
    .map(
      <figure>
        <img src="${pic.url}" alt=""></img>
        <figcaption>${pics.title}</figcaption>
      </figure>
    ))
}
export default st => `
<div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some small text</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some hdaer</h2>
        <p>Some small text</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some small text</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some small text</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some small text</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some Smaml Test</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some small text</p>
      </div>

      <div>
        <figure><img src="../image.jpg" alt="" /></figure>
        <h2>Some Heading</h2>
        <p>Some small text</p>
      </div>
`;
