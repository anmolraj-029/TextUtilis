import React, {useState}from 'react'

// import PropTypes from 'prop-types'

export default function Textform(props) {
    const handleUpClick = ()=>{
       //console.log("uppercase" +text);
       let newText=text.toUpperCase();
       //console.log(newText);
       setText(newText);
    }

    const handleLoClick = ()=>{
        //console.log("uppercase" +text);
        let newText=text.toLowerCase();
        //console.log(newText);
        setText(newText);
     }
     const handleboClick = ()=>{
        //console.log("uppercase" +text);
        let newText='';
        //console.log(newText);
        setText(newText);
     }

    //  const handlesuClick = ()=>{
    //     //console.log("uppercase" +text);
    //     let newText=text.substr(text.length-1,5);
    //     //console.log(newText);
    //     setText(newText);
    //  }

    const handleOnChange =(event)=>{
       //console.log("On change "+ text);
       setText(event.target.value);
    }
    const[text,setText]=useState("Enter the text");
  return (
    <>
    <div className="container">
<div className="mb-3">
<h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10" cols="7"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleboClick}>Clear the text</button>
{/* <button className="btn btn-primary mx-3" onClick={handlesuClick}>Take out substring</button> */}
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p><b>{text.split("").length}</b> words and <b>{text.length}</b> characters</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

