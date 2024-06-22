import { useState } from "react";

const CounterWithComponentfunction = () => {
    const [count,setcount]=useState(0)
console.log(count);
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>{count}</button>
    </div>
  );
};

export default CounterWithComponentfunction;
