const reducer =(state , action)=>{
   switch (action.type){
      case 'plus':
        return {number: state.number+1}
      case 'minus':
        return {number: state.number-1}
      case 'custom':
         return {number: state.number + +action.playload}
      default:
         throw new Error()
   }
}

const rnd =(count)=>{
return { number: Math.floor(Math.random()*count.number) }
}

export {reducer , rnd}