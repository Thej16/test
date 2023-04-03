// import  { useState } from "react";

import { useMemo, useState } from "react";


// function App() {

//   // const list = [
//   //   "Banana",
//   //   "Apple",
//   //   "Orange",
//   //   "Mango",
//   //   "Pineapple",
//   //   "Watermelon"
//   // ];

//   // const [filterList, setFilterList] = useState(list);

//   // const handleSearch = (e) => {

//   //   const filteredValues = list.filter( (item) => item.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) !== -1
//   //   );
//   //   setFilterList(filteredValues);
//   // } 

//   return (
//     <div className="app">
//       <div>
//         Serach: <input type={"text"} onChange={handleSearch} />
//       </div>
//         {filterList && filterList.map((item, index) => (
//           <div key={index}> { item } </div>
//         ))}
//     </div>

//   );
// }

// export default App;



function App() {
  
  const [word, setWord] = useState("");

  const isPalindrome = useMemo( () => {
    return word === word.split("").reverse().join("");
  }, [word])
  return (
    <div>
      <input type={"text"} placeholder={"enter a word"}
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <div>Is Palindrome : { isPalindrome ? "Yes" : "No" } </div>
    </div>
  )
}

export default App;