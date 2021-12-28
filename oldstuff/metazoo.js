//
//
// iterate 0 till 5000, find all with gold
// just do 2400 to 2499
const info = document.querySelector(".info");
//let num = "2401";
//const link = `https://metazoo-metadata-server.herokuapp.com/api/metadata/${num}`;
// fetch(link)
//   .then((response) => response.json())
//   .then((data) => {
//     info.innerHTML = JSON.stringify(data.attributes);
//     info.innerHTML += `<br> <strong>Link</strong>: ${link}`;
//     console.log(data.attributes[0].value);
//     console.log(data.attributes[3].value);
//     return console.log(data);
//   });

//for loop increase 1, if data
//search function
//

const core = async (val = 2399, val2 = 2500) => {
  let endingnum = parseInt(val2) + parseInt(5);

  info.innerHTML = "";
  for (let index = val; index < endingnum; index++) {
    const link = `https://metazoo-metadata-server.herokuapp.com/api/metadata/${index}`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        //   info.innerHTML = JSON.stringify(data.attributes);
        info.innerHTML += `<div><style>display: inline-block;</style> Type #${index}: ${data.attributes[0].value} <br>
      Background: ${data.attributes[1].value} <br>
      Mint State: ${data.attributes[2].value} <br>
      Coin Metal: ${data.attributes[3].value} <br> <br></div>`;

        // console.log(`Type #${index}: ${data.attributes[0].value}`);
        // console.log(`Background: ${data.attributes[1].value}`);
        // console.log(`Mint State: ${data.attributes[2].value}`);
        // console.log(`Coin Metal: ${data.attributes[3].value}`);
        // return console.log(data);
      });
  }
};
core();

const button = document.querySelector(".enter");
const form = document.querySelector(".wha");
let input1 = document.querySelector(".one");
let input2 = document.querySelector(".two");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const values = () => {
  console.log("hii");
  core(input1.value, input2.value);
};

const core2 = async (val = 2399, val2 = 2500) => {
  let endingnum = parseInt(val2) + parseInt(5);

  info.innerHTML = "";
  for (let index = val; index < endingnum; index++) {
    const link = `https://metazoo-metadata-server.herokuapp.com/api/metadata/${index}`;
    await fetch(link)
      .then((response) => response.json())
      .then((data) => {
        //   info.innerHTML = JSON.stringify(data.attributes);
        info.innerHTML += `<div><style>display: inline-block;</style> Type #${index}: ${data.attributes[0].value} <br>
        Background: ${data.attributes[1].value} <br>
        Mint State: ${data.attributes[2].value} <br>
        Coin Metal: ${data.attributes[3].value} <br> <br></div>`;

        // console.log(`Type #${index}: ${data.attributes[0].value}`);
        // console.log(`Background: ${data.attributes[1].value}`);
        // console.log(`Mint State: ${data.attributes[2].value}`);
        // console.log(`Coin Metal: ${data.attributes[3].value}`);
        // return console.log(data);
      });
  }
};

const valuesslow = () => {
  core2(input1.value, input2.value);
};

// `Type #${index}: ${data.attributes[0].value}
// Background: ${data.attributes[1].value}
// Mint State: ${data.attributes[2].value}
// Coin Metal: ${data.attributes[3].value}`;
