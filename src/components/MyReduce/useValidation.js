import { useState } from "react"



const useValidation = (num)=>{
   const [value, setValue]= useState(num)


   const onChange = (e)=>{
      e.target.value = e.target.value.replace(/\D/img , "");
      setValue(e.target.value)
   }

   return { value , onChange}
}

export default useValidation