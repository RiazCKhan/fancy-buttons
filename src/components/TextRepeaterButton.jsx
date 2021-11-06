import { useState } from "react";

const TextRepeaterButton = function (props){
  const [repetitions, setRepetitions] = useState();

  return (
    <button className="TextRepeaterButton">
      <span>I like this text</span>
    </button>
  );
}

export default TextRepeaterButton;