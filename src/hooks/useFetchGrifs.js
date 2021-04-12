import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGrifs = (category) => {
   const [state, setstate] = useState({
       data: [],
       loading: true
   });
   

    useEffect( () =>{
       
            getGifs(category).then(imgs =>{

               
                setstate({
                    data: imgs,
                    loading: false
                });
             
            });
              
    }, [category])

   return state; //el state es [ data: [] ,loading: ture]
}
