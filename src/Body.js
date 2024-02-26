import React, { useState } from 'react'

const Body = () => {

  const [screen, SetScreen] = useState('');

  const addValue = (param) => {
    SetScreen(screen+param); // Change the input value when the button is clicked
  };
  const buttonStyle = {
    width: '25px', // Set the width
    height: '25px', // Set the height
    // Add any other desired styles here
  };

  const handleButtonClick = (param) =>{
    console.log(screen);
    if (screen.includes('+')){
      const [val1, val2] = screen.split('+').map(Number);
      console.log(val1, val2)
      SetScreen(val1+val2)
      console.log(screen)

    }
    else if (screen.includes('-')){ 
      const [val1, val2] = screen.split('-').map(Number)
      console.log(val1, val2)
      SetScreen(val1-val2)
      console.log(screen)

    
    }
    else if (screen.includes('*')){ 
      const [val1, val2] = screen.split('*').map(Number)
      console.log(val1, val2)
      SetScreen(val1*val2)
      console.log(screen)

    
    }
    else if (screen.includes('/')){ 
      const [val1, val2] = screen.split('/').map(Number)
      console.log(val1, val2)
      SetScreen(val1/val2)
      console.log(screen)
    }
    else{
      alert('Error')
    }
  };

  const clearScreen = ()=>{
    SetScreen('')

  };

  return (
    <div>
      <div>
        <input type="text" id="screen"  value={screen}></input>
      </div>

      <div>
        <button style={buttonStyle} onClick={()=>addValue('1')}>1</button>
        <button style={buttonStyle} onClick={()=>addValue('2')}>2</button>
        <button style={buttonStyle} onClick={()=>addValue('3')}>3</button>
        <button style={buttonStyle} onClick={()=>addValue('+')}>+</button>

      </div>

      <div>
        <button style={buttonStyle} onClick={()=>addValue('4')}>4</button>
        <button style={buttonStyle} onClick={()=>addValue('5')}>5</button>
        <button style={buttonStyle} onClick={()=>addValue('6')}>6</button>
        <button style={buttonStyle} onClick={()=>addValue('-')}>-</button>

      </div>

      <div>
        <button style={buttonStyle} onClick={()=>addValue('7')}>7</button>
        <button style={buttonStyle} onClick={()=>addValue('8')}>8</button>
        <button style={buttonStyle} onClick={()=>addValue('9')}>9</button>
        <button style={buttonStyle} onClick={()=>addValue('*')}>*</button>

      </div>
        <button style={buttonStyle} onClick={()=>clearScreen()}>A</button>
        <button style={buttonStyle} onClick={()=>addValue('0')}>0</button>
        <button style={buttonStyle} onClick={()=>handleButtonClick('=')}>=</button>
        <button style={buttonStyle} onClick={()=>addValue('/')}>/</button>




      <div>

      </div>
      <div></div>
      <div></div>

      


    </div>
  )
}


export default Body
