import { useParams } from 'react-router'

const Marque = () => {

    //let params = useParams()
    //params.name
    let {name} = useParams()

    return ( 
        <>
            <h1>Marque {name}</h1>
        </>
     );
}
 
export default Marque;