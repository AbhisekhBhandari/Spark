import { useEffect, useState } from "react";


export function useDebounce<T>(value:T, delay =550){
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setDebouncedValue(value)
    },delay);
    return ()=>clearTimeout(timeOut);

  },[value,delay])
 
  return debouncedValue;

}
