import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export function useInterval (callback: ()=>void, delay:number | null){
    const savedCallback = useRef(callback)

    //remember the last callback if it change
    useIsomorphicLayoutEffect(()=>{ 
        savedCallback.current = callback
    },[callback])
    
    //set up the interval 
    useEffect(()=>{
        //don't schedule if no delay is specified 
        //Note: 0 is a valid value for delay

        if (delay === null) {
            return
        }

        const id = setInterval(()=>{
            savedCallback.current()
        },delay)
        
        return ()=>{
            clearInterval
        }
    },[delay])
}