const init = () => {
  const form = document.querySelector("form");
  const searchById = document.querySelector("#searchByID");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // These bottom two are the same thing
    // console.log(e.target.children[1].value);
    console.log(searchById.value);

    fetch(`http://localhost:3000/movies/${searchById.value}`)
      .then((res) => res.json())
      .then((data) => {
        const title = document.querySelector("h4");
        const summary = document.querySelector("p");

        title.textContent = data.title;
        summary.textContent = data.summary;
      });

    form.reset();
  });
};

document.addEventListener("DOMContentLoaded", init);
