
import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
           console.log("Upper case clicked" + text)
           let newText = text.toUpperCase();
           setText(newText)
           alert( " Hello Your Uppercase Text is here : " + newText);
  }

  const handleLowerClick = () =>{
           console.log("Lower case clicked" + text)
           let newText = text.toLowerCase();
           setText(newText)
  }     

  const handleClearClick = () =>{           
           console.log("Cleared" + text)
           let newText = '';
           setText(newText)
  }  

  const handleOnChange = (event) =>{
           console.log("On Change")
           setText(event.target.value)
  }

  const handleExtraSpace = () =>{
           let nText = text.split(/[ ]+/);
           setText(nText.join(" "))
  }

  const [text, setText] = useState('');
  // setText("");

  return (
    <>
    <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <label htmlFor="myBox" className="form-label"></label>
         <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
         
      </div>
      <button className="btn btn-info mx-2" onClick={handleUpClick}> Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}> Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpace}> Remove Extra space</button>
      
    </div>

    <div className="container">
      <h1>Text Summary is Here</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{ 0.008 * text.split(" ").length}  Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to Preview the Text"}</p>
    </div>
    </>
  )
}

