import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error.error.message)

    return ( 
        
        <div id="error-page">
            <h1>Oops</h1>
            <p>Désolé une erreur est survenue</p>
            <i>{error.statusText || error.error.message}</i>
            <p>{error.error.message}</p>
        </div>
       
     );
}
 
