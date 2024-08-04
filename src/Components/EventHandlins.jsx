export const EventHandling = () => {
    const handleBtnClick=(e)=>{
        alert("Hey this is alert !!")
        console.log(e.type);
        console.log(e.target);
    }

    const sayName=(user)=>{
        console.log(`Hey ${user}, Welcome`);
    }

  return <>
    <button onClick={handleBtnClick} className="bg-blue-500 text-white py-2 px-4 rounded my-3" >Click Me</button>
    <button onClick={(e)=>handleBtnClick(e)} className="bg-red-500 text-white py-2 px-4 rounded-xl my-3" >Click Me2</button>
    <button onClick={()=>sayName("Sam")} className="bg-green-500 text-white py-2 px-4 rounded-xl my-3" >Click Me3</button>
  </>;
}; 
