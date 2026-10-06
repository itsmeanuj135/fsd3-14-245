import React from 'react'
const handleClick = () => {
    alert("Button Clicked");
}
const MyButton = () => {
    return ( 
    <button style ={{backgroundColor: "blue", color: "white",height: "50px", width: "100px"}} onClick={handleClick}>
        Click Me</button>
)
};

const Event = () => {
  return (
    <div><MyButton /></div>
  )
}

export default Event