import { useReducer } from "react";
import {reducer , rnd} from './reduc'
import useValidation from "./useValidation";


const MyReduce = ()=>{
   const [count , dispach] = useReducer(reducer , {number: 10} , rnd);
   const {value , onChange} = useValidation(0);
   return (
      <>
      <p>{count.number}</p>
      <button onClick={()=>dispach({type: `plus`})}>+</button>
      <button onClick={()=>dispach({type: `minus`})}>-</button>
      <input type="text" value={value} onChange={onChange}/>
      <button onClick={()=>dispach({type: `custom` , playload: value})}>custom</button>
      </>
   )
}

export default MyReduce