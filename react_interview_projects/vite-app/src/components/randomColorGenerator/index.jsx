import {useState} from "react"
function RandomColor()
{
    const [color,setColor]=useState("white")
    function generateRandomColor()
    {
        const color=`rgb(${Math.random() *255},${Math.random() *255},${Math.random() *255})`
        return color
    }
    const PageStyle = {
        backgroundColor: `${color}`,
        height:'100vh'
    };
    return (<div style={PageStyle}><button onClick={()=>{
       setColor(generateRandomColor())
    }}>change color</button></div>)
}
export default RandomColor