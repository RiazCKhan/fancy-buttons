import { useState } from "react";

const CounterButton = function (props){
  const [clickAmount, setClickAmount] = useState();

  return (
    <button className="CounterButton">
      You clicked me X amount of times
    </button>
  );
}

export default CounterButton;