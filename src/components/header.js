const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  // DIV instantiate, attrs
  const div = document.createElement("div");
  div.classList.add("header");

  //SPAN instantiate, attrs, text
  const span = document.createElement("span");
  span.classList.add("date");
  span.textContent = date;

  //H1 instantiate, text
  const h1 = document.createElement("h1");
  h1.textContent = title;

  //SPAN2 instantiate, attrs, text
  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = temp;

  //Hierarchy
  div.appendChild(span);
  div.appendChild(h1);
  div.appendChild(span2);

  return div;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  //Header create
  const newHeader = Header("Kaseem Times", "April 9, 2021", "55");

  //Class selected
  const headerContainer = document.querySelector(selector);

  //Header Appended
  headerContainer.appendChild(newHeader);
};

export { Header, headerAppender };
