import React, { useState } from 'react'

export default function TextForm(props) {
    const converToUpper = ()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Converted to Upper case", "Success");
    }

    const convertToLower = ()=>{
      setText(text.toLowerCase());
      props.showAlert("Converted to Lower case", "success");
    }

    const convertToSpeech = ()=>{
      let utter = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utter);
    }
    const clearText=()=>{
      setText("")
      props.showAlert("Text Cleared!", "success");
    }
    const OnChange = (event)=>{
        setText(event.target.value)
    }
    const wordCount=(text)=>{
      let words = text.split(/\s+/);
      if(words.includes("")){
        return words.length -1;
      }
      else{
        return words.length;
      }
    }


    const [text, setText] = useState('') //Hook

  return (
    <>
    <div className="container my-3" style={{color: props.mode==="dark"?"black":"white"}}>
        <h2>Enter your Text below</h2>
    <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#e9ecef":"white",color: "black"}} value={text} onChange={OnChange} id="exampleFormControlTextarea1"   rows="8"></textarea>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={converToUpper}>Convert to Upper Case</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={convertToLower}>Convert to Lower Case</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={convertToSpeech}>Convert to Speech</button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear</button>
    </div>

    <div className="container my-5" style={{color: props.mode==="dark"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p>You'r text contains : Words: {wordCount(text)}, Characters: {text.length}</p>
    </div>
    </>
  )
}
