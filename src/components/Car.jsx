import { useParams } from "react-router";

const Car = () => {

    let { model } = useParams()

    return ( 
        <>
            <h1>Voiture modèle: {model}</h1>
        </>
     );
}
 
export default Car;