//count the letters, ignoring punctuation and spaces

const countIt = (word) => {
  word = document.getElementById("word").value
    // .replace(/[.,\/#!$%\^&\*;:{}=-_`~()]/g, "")
    // .replace(/ +/g, "")
    // .trim();
  let letterCount = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }

  // const myJSON = JSON.stringify(obj)
  console.log(JSON.stringify(letterCount).length);
  const displayWord = document.getElementById("display-word");

  if((JSON.stringify(letterCount).length) > 0) {
  displayWord.innerHTML = `${JSON.stringify(letterCount)}`;
  } else {
    displayWord.innerHTML = "";
  }
  // return letterCount;
};

console.log(countIt("cat"));

/*
const letterCounted = (letterCount) => {
  const displayWord = document.getElementById("display-word");
  displayWord.innerHTML = `${letterCount}`;
};*/