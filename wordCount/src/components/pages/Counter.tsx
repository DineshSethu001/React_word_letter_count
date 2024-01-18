import React, { useState } from "react";
import "./Counter.css";

export default function () {
    const [text,setText]=useState("")
    const wordCount=text
                    .split(/\s+/)
                    .filter(Boolean).length;
    const letterCount=text.length;

    // function
    const handleTextChange = (event:any) => { 
        setText(event.target.value); 
    }; 
    
  return (
    <div className="CounterContainer">
      <textarea
       placeholder="Type your text here . . . . "
       onChange={handleTextChange}
       rows={5}
       cols={50}
       value={text}
      
       />

      <p>
        wordCount:{wordCount}
      </p>
      <p>
        letterCount:{letterCount}
      </p>
    </div>
  );
}
