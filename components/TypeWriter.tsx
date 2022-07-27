import { useEffect, useState } from "react";

const TypeWriter = () => {
  const [role, setRole] = useState("");
  useEffect(() => {
    let words = ["Developer", "FreeLancer", "Programmer", "Student"];
    console.log(words);
    words.map((word) => {
      Array.from(word).forEach(async (letter, idx) => {
        console.log(letter);
        setTimeout(() => setRole(word), 1000);
      });
    });
    // for (let word in words) {
    //   console.log(word);
    //   for (let letter in Array(word)) {
    //     console.log(letter);
    //     setRole(letter);
    //   }
    // }
  }, []);
  return <div>{}</div>;
};
export default TypeWriter;
