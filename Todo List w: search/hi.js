const addForm = document.querySelector(".add");
const textbox = document.querySelector("form.add input");
const inner = document.querySelector(".inner");
let trash = document.querySelectorAll(".delete");
const arrayindex = [];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(textbox.value);
  if (textbox.value == "") return;
  inner.insertAdjacentHTML(
    "beforeend",
    `<ul class="list-group todos mx-auto text-light">
          <li
            class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <span>${textbox.value}</span>
            <i class="fas fa-trash delete"></i>
          </li>
        </ul>`
  );
  index();
  textbox.value = "";
  input.value = "";
  func();
});

//dont do that, it destroys the innerhtml root, removes all listeners

// search displays the elements with an inner span of the value of the text field.
// hides everything else

// get the span elements into a list

let listofspans;
let arraytext = [];

const index = () => {
  arraytext = [];
  listofspans = document.querySelectorAll("span");
  listofspans.forEach((i) => {
    console.log(i);
    console.log(i.textContent);
    arraytext.push(i);
  });
};
setTimeout(() => {
  index();
}, 0);

//trash remove
inner.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.closest("i")) {
    e.target.parentElement.parentElement.remove();
  }
});

let searchbar = document.querySelector(".search ");
searchbar.addEventListener("submit", (e) => {
  e.preventDefault();
});

//loop through
//if you find it, JUST DISPLAY IT. display none everything else
// make the li have display none / flex
let input = document.querySelector(".search input");
input.addEventListener("input", () => {
  func();
});
const func = () => {
  let value = input.value.toUpperCase();
  listofspans.forEach((span) => {
    console.log(span.textContent.toUpperCase().indexOf(value));
    if (!(span.textContent.toUpperCase().indexOf(value) >= 0)) {
      span.parentElement.parentElement.classList.remove("d-flex");
      span.parentElement.parentElement.classList.add("d-none");
    } else {
      span.parentElement.parentElement.classList.remove("d-none");

      span.parentElement.parentElement.classList.add("d-flex");
    }
    //indexOf is like substring for string method Big.indexOf(small)
  });
};

// refactor code to make the trash can event delegated vs. added to each one
