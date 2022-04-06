import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Uppercase", "success")
    }
    const handleLowCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lowercase", "success")
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    <button onClick={handleUpCase} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
                    <button onClick={handleLowCase} className="btn btn-primary mx-2 ">Convert to Lowercase</button>
                    <button onClick={handleClearText} className="btn btn-primary mx-2 ">Clear Text</button>
                    <button onClick={handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
                    <button onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces1</button>
                </div>
            </div>
            <div className="container">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{.008 * text.split(" ").length} Minutes Read</p>
            </div>
        </>
    )
}

