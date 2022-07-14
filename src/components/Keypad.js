// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function keyPass(){
        console.log("Entering password...")
    }
  return (
    <input onChange={keyPass}
    type="password"
    />
  )
}

export default Keypad