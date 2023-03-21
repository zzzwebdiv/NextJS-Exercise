import {useEffect} from "react";
import { useRouter } from "next/router";

const ErrorPage= () => {
    const route = useRouter();
    
    
    useEffect(()=>{
        setTimeout(() => {
            route.push('/');
        }, 2000);
        
    },[]); // empty array to tell function to run when the page first load

    return(
      <div>
        <h1>Page not Found</h1>
       
      </div>
    );
  }
  
  export default ErrorPage;