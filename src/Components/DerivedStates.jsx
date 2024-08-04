// const users = [
//     {name:"Sam", age:25},
//     {name:"Kaate", age:20},
//     {name:"Prihym", age:19},
//     {name:"Kattu", age:20},
// ]

import { useState } from "react";

export const DerivedStates = () => {
  const [users, setUser] = useState([
    { name: "Sam", age: 25 },
    { name: "Kaate", age: 20 },
    { name: "Prihym", age: 19 },
    { name: "Kattu", age: 20 },
  ]);

  const userCount = users.length;
  console.log(userCount);

  const average = users.reduce((accu, currEl,)=>accu+currEl.age,0)/userCount;

  return (
    <>
      <div className="main-div">
        <h1>User List</h1>
        <ul>
          {users.map((currEl, index) => {
            return (
              <>
                <li key={index}>
                  {currEl.name} - {currEl.age} years old
                </li>
              </>
            );
          })}
        </ul>
        <p>Total User: {userCount}</p>
        <p>The Average: {average}</p>
      </div>
    </>
  );
};
