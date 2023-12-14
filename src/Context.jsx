import { createContext, useContext, useEffect, useState } from "react"


export const API_URL=`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_URL}`




const AppContext=createContext()
//provider
 const AppProvider=({children})=>{

    const[isLoading,setisLoading]=useState(true)
    const[movie,setMovie]=useState([])
    const[iserror,issetError]=useState({show:false,msg:""})
   const[search,setSearch]=useState("Titanic")

   
    const getMovies=async(url)=>
{
    try{

        const res=await fetch(url)
        const data=await res.json()
        console.log(data.Search)
        if(data.Response==="True")
        {
            setisLoading(false)
            setMovie(data.Search)
            issetError({ show: "false", msg: "" });
        }else
        {
            issetError({ show: "true", msg: data.Error });
            
        }
    }
    catch(e)
    {
        console.log(e)
    }

}

useEffect(()=>{

    //set timeout and clear timeout is for debouncing concept 
    let timerOut=setTimeout(()=>{
        getMovies(`${API_URL}&s=${search}`)
    },1000)

    return () =>clearTimeout(timerOut)
   
},[search])

return(
<AppContext.Provider value={{movie,isLoading,search,setSearch,iserror,issetError}}>{children}</AppContext.Provider>
)
    

}

//global context hook
const useGlobalContext=()=>{
    return useContext(AppContext)
}

export{AppContext,AppProvider,useGlobalContext}