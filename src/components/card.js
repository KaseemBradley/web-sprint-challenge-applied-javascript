import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //DIV Instantiate, attrs
  const div = document.createElement("div");
  div.classList.add("card");

  //DIVHEADLINE Instantiate, attrs, text
  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = article.headline;

  //DIVAUTHOR Instantiate, attrs
  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  //DIVIMG Instantiate, attrs, text
  const divImg = document.createElement("div");
  divImg.classList.add("img-container");

  //IMG Instantiate, attrs
  const img = document.createElement("img");
  img.src = article.authorPhoto;

  //SPAN Instantiate, text
  const span = document.createElement("span");
  span.textContent = `By ${article.authorName}`;

  //interactivity
  div.addEventListener("click", () => {
    console.log(article.headline);
  });

  //Hierarchy
  div.appendChild(divHeadline);
  div.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(img);
  divAuthor.appendChild(span);

  return div;
};


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  //FETCHING Data
  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      const cardContainer = document.querySelector(selector);

      cardContainer.appendChild(Card(res.data.articles.bootstrap[0]));
      cardContainer.appendChild(Card(res.data.articles.bootstrap[1]));
      cardContainer.appendChild(Card(res.data.articles.bootstrap[2]));
      cardContainer.appendChild(Card(res.data.articles.javascript[0]));
      cardContainer.appendChild(Card(res.data.articles.javascript[1]));
      cardContainer.appendChild(Card(res.data.articles.javascript[2]));
      cardContainer.appendChild(Card(res.data.articles.javascript[3]));
      cardContainer.appendChild(Card(res.data.articles.jquery[0]));
      cardContainer.appendChild(Card(res.data.articles.jquery[1]));
      cardContainer.appendChild(Card(res.data.articles.jquery[2]));
      cardContainer.appendChild(Card(res.data.articles.node[0]));
      cardContainer.appendChild(Card(res.data.articles.node[1]));
      cardContainer.appendChild(Card(res.data.articles.technology[0]));
      cardContainer.appendChild(Card(res.data.articles.technology[1]));
      cardContainer.appendChild(Card(res.data.articles.technology[2]));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
