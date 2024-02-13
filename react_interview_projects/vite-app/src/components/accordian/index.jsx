import data from "./assets/data"
import {useState} from "react"
function Accordian(){
    const [index,setIndex]=useState(null)
    const [multi,setMulti]=useState(true)
    const [multiple, setMultiple] = useState([]);
    function handleClick(key)
    {
  setIndex((prevKey)=>{
return prevKey===key ? null:key
  })
  function handleMultiSelection()
  {

  }
    }
    const accordian=data.map((obj,key)=>{
return <div>{obj.name}<button onClick={()=>{
handleClick(key)
}}>{index===key ? "+":"-"}</button>{index===key ? obj.age:""}</div>
    })
    return (<div>
        <button onClick={()=>{
            setMulti(!multi)
        }}>MultiSelection</button>
        <div>{accordian}</div>
    </div>)
}
export default Accordian