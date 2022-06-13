import React from "react";

const WordCounter = () => {
  const [word, setWord] = React.useState("");
  const [maxCharLen, setMaxCharLen] = React.useState(null);
  // console.log(word);

  const wordHandler = (e) => {
    setWord(e.target.value);
  };

  const wordCounter =
    word === "" ? "" : word.split(" ").filter((char) => char !== " ").length;
  let charCounter = word === "" ? "" : word.trim().length;

  // const wordCounter = (word) =>{
  //   console.log(word);
  //   let countWord = 0;
  //   if(word !== " "){
  //     for(let index of word){
  //       if(word[index] === " "){
  //         countWord++;
  //         console.log(countWord);
  //       }
  //     }
  //   }
  //   setWordCount(countWord);
  // }

  return (
    <div>
      <h1>font size Picker</h1>
      <input
        type="number"
        onChange={(e) => setMaxCharLen(e.target.value)}
        id="char-limit-input"
      />
      <br />
      <br />
      <textarea
        type="textarea"
        minLength={50}
        maxLength={maxCharLen}
        onChange={wordHandler}
      />
      <div id="word-counter">{wordCounter}</div>
      <div id="char-counter">{charCounter}</div>
    </div>
  );
};

export default WordCounter;
