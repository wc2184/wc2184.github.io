(async () => {
  let hashperma = 0;
  let height = 0;
  let bits = 0;
  let bitsexp = 0;
  let bitsexpreal = 0;
  let bitsreal = 0;
  let leadingofhash = 0;

  console.log("test: " + BigInt(parseInt("0ba21f", 16)));
  const proxyOfTheMonth = "https://corsproxy.io/?";

  const func = async () => {
    let response = await fetch(
      proxyOfTheMonth +
        // "https://api.allorigins.win/raw?url=https://blockchain.info/latestblock"
        // "https://blockchain.info/latestblock"
        // "https://chain.api.btc.com/v3/block/latest/tx"
        "https://chain.api.btc.com/v3/block/latest/tx"
      //https://nordicapis.com/10-free-to-use-cors-proxies/ CORS PROXIES
      // "https://pokeapi.co/api/v2/pokemon/pikachu"
      // {
      //   headers: {
      //     mode: "cors",
      //   },
      // }
    );
    console.log(response, "hero");
    console.log(typeof response);
    let data = await response.json();
    console.log(data);
    // console.log(data.height);
    // height = data.hash; //height is not the height, its the block hash now
    height = data.data.list[0].block_hash; //2023 update for btc.com api instead
    console.log(typeof height);
    console.log(height);
    for (let i = 0; i < height.length; i++) {
      if (height.charAt(i) !== "0") break;
      if (height.charAt(i) === "0") leadingofhash++;
    }
    hashperma = height;

    data.height = data.data.list[0].block_height; //2023 update for btc.com api instead
    document.querySelector(
      ".enter"
    ).innerHTML = `Block Number: <a href='https://btc.com/btc/block/${data.height}'>${data.height} (click to view on blockchain) </a> <br> Current Hash of Latest Block: 0x${height}`;
  };

  setTimeout(async () => {
    await func();
    console.log("hello");
    await single();
  }, 200);

  const single = async () => {
    console.log("inside call", height);
    let res = await fetch(
      `${proxyOfTheMonth}https://chain.api.btc.com/v3/block/${height}`
      // `${proxyOfTheMonth}https://blockchain.info/rawblock/${height}`
    );
    let data = await res.json();
    data = data.data; // for btc api ** MAJOR CHANGE IF CHANGE API
    console.log("This is the nBits: " + data.bits);
    bits = data.bits.toString(16);
    document.querySelector(
      ".bits"
    ).innerHTML = `Current nBits (Compact 32-bit Target) of Latest Block: 0x${bits}`;
    console.log("here " + bits);
    console.log(bits.slice(2));
    console.log(bits.slice(0, 2));
    bitsexp = bits.slice(0, 2);
    bitsreal = bits.slice(2);

    console.log("real num: " + parseInt(bitsreal, 16));
    bitsexpreal = parseInt(bitsexp, 16);
    console.log(bitsexp);
    console.log(
      `bits: ${bits} // bitsexp: ${bitsexp} // bitsreal: ${bitsreal} // bitsexpreal: ${bitsexpreal}`
    );
    console.log(parseInt(bitsexp, 16) - 3);
    console.log("hi" + Math.pow(256, bitsexp, 16) - 3);
    console.log(
      "the GOAT ANSWER: " +
        (
          BigInt(parseInt(bitsreal, 16)) * BigInt(Math.pow(256, bitsexp - 3))
        ).toString(16)
    );
    document.querySelector(".number").innerHTML =
      "Equivalent to finding less than or equal to this number:  <p style='background-color: #FFFF00' ><strong>" +
      (
        BigInt(parseInt(bitsreal, 16)) * BigInt(Math.pow(256, bitsexp - 3))
      ).toLocaleString() +
      "</strong></p>out of <br>" +
      BigInt(Math.pow(2, 256)).toLocaleString() +
      "<br> (The 256-bit integer max calculated by 2^256) " +
      "<br><p style='font-size: small'>The first number being roughly " +
      (
        (
          parseInt(bitsreal, 16) *
          Math.pow(256, bitsexp - 3) *
          (1 / Math.pow(2, 256))
        ).toFixed(50) * 100
      ).toFixed(50) +
      "% of the max 256-bit integer. </p>"; //decimal number of the hash
    //find max number in decimal
    // console.log(
    //   "Difficulty: " +
    //     BigInt(Math.pow(65535, )) / BigInt(Math.pow(256, bitsexp, 16) - 3)
    // );

    let leadingzero = "";
    let goatans = (
      BigInt(parseInt(bitsreal, 16)) * BigInt(Math.pow(256, bitsexpreal - 3))
    ).toString(16);

    let length = goatans.length;
    let howmany = 0;
    for (let index = 0; index < 64 - length; index++) {
      leadingzero += "0";
      howmany++;
    }
    console.log(length);
    console.log(howmany);
    document.querySelector(".bitsrealwtrail").innerHTML =
      "The target hash looks like this with leading zeros added:" +
      "<p style='background-color: #FFFF00' >0x" +
      leadingzero +
      goatans +
      "<br>(" +
      howmany +
      " leading zeros)" +
      "</p>And this cryptographic puzzle for this block was solved with this answer: <br>0x" +
      hashperma +
      "<br>(" +
      leadingofhash +
      " leading zeroes)" +
      "<br>(And is the current solved block hash) <br>";
    document.querySelector(".gen").style.display = "none";
  };
})();
