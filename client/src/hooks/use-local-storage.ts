import { useCallback, useEffect, useState } from "react";

// export function useLocalStorage(key: string, initialState: any) {
//   const [state, setState] = useState(initialState);

//   useEffect(() => {
//     const restored = getStorage(key);
//     if(restored){
//         setState((prevValue:any)=>({
//             ...prevValue,
//             ...restored
//         }))
//     }
//   },[key]);

//   const updateState = useCallback((updateValue:any)=>{
//     setState((prev:any)=>{
//         setStorage(key,{
//             ...prev,
//             ...updateValue
//         })
//         return {
//             ...prev,
//             ...updateValue
//         }
//     })

//   },[key])

//   const update = useCallback((name:string,updateValue:any)=>{
//         updateState({
//             [name]: updateValue
//         })
//   },[updateState])

//   const reset = useCallback(()=>{
//     removeStorage(key);
//     setState(initialState)
//   },[initialState,key])
  
//   return{
//     state, update ,reset
//   }

// }


export function getStorage(key: string) {
  let value = null;
  try {
    const result = window.localStorage.getItem(key);
    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.error(error);
  }

  return value;
}

export function setStorage(key:string, value:any){
    try{
        window.localStorage.setItem(key,value);
    }catch(error){
        console.error(error)
    }
}

export const removeStorage = (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };