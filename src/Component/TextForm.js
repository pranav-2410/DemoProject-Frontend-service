import React, { useState } from 'react'

export default function TextForm(props) {
    const converToUpper = ()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }

    const convertToLower = ()=>{
      setText(text.toLowerCase());
    }

    const convertToSpeech = ()=>{
      let utter = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utter);
    }
    const clearText=()=>{
      setText("")
    }
    const OnChange = (event)=>{
        setText(event.target.value)
    }


    const [text, setText] = useState('') //Hook

  return (
    <>
    <div className="container my-3">
        <h2>Enter your Text below</h2>
    <textarea className="form-control" value={text} onChange={OnChange} id="exampleFormControlTextarea1"   rows="8"></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={converToUpper}>Convert to Upper Case</button>
    <button className="btn btn-dark my-3 mx-2" onClick={convertToLower}>Convert to Lower Case</button>
    <button className="btn btn-primary my-3 mx-2" onClick={convertToSpeech}>Convert to Speech</button>
    <button className="btn btn-dark my-3 mx-2" onClick={clearText}>Clear</button>
    </div>

    <div className="container my-5">
        <h2>Text Summary</h2>
        <p>You'r text contains : Words: {text.split(" ").length}, Characters: {text.length}</p>
    </div>
    </>
  )
}
