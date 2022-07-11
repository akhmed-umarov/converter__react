import { useState , useEffect , PropTypes, useMemo} from "react"
import BankServer from "../bank-server/BankServer";


const useValidation = (elemValue)=>{ 
   const [value , setValue] = useState(elemValue)

   

   const onChangeValue = (e)=>{ 
   setValue(()=>(setValue(e.target.value)))
   }

   return { 
      value , setValue , onChangeValue
   }
}



const Converter = (props)=>{ 

   const Input2 = useValidation('hello world'); 

   const testArray = [{ name: 'RUB' , price: 1} ,    
   { name: 'USD' , price: 58 },
   { name: 'EUR' , price: 65},
   { name: 'JPN' , price: 0.8}]

   
   const [dis , setDis] = useState(false);
   const [count , setCount] = useState(props.num);
   const [nowPrice , setNowPrice] = useState('');
   
   const bankserver = new BankServer();

   //сначала компонент создастся потом будет данный хук как  и componentDidMount и потом componentDidUpdate
   useEffect(()=>{
      bankserver.getPrice().then(data=> setNowPrice(data))
   } , [])



   const onConvert = ( num )=>{ 
      setCount((count)=>(
         count * nowPrice/num
      ))
      setNowPrice(num)
   }

   const onDisInp = (index)=>{ 
      setDis(!!index)
   }

   const btnList = testArray.map(({name , price} , index)=>(
      <button key={index} onClick={()=>{onConvert(price) ; onDisInp(index)}}> {name} </button>
   ))

   console.log(nowPrice);

   return (
      <div>
      <p>{Input2.value}</p>
      <input type="text" value={Input2.value} onChange={Input2.onChangeValue}/>

      <input type="text" value={count} 
      disabled = {dis}
      onChange={(e)=>{setCount(e.target.value)}} 
      onKeyDown={(e)=>(e.target.value=e.target.value.replace(/\D/,''))}
      />
      <br/>
      {btnList}
      </div>
   )
}
Converter.defaultProps = { 
   number: '0'
}
export default Converter