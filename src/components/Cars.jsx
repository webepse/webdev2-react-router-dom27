import { Outlet } from "react-router-dom";

const Cars = () => {
    return ( 
        <>
            <h1>Liste de voitures</h1>
            <div>
                Rechercher: 
                <input type="text" />
            </div>
            <div>Voiture 1</div>
            <div>Voiture 2</div>
            <div>Voiture 3</div>
            <div>Voiture 4</div>
            <Outlet />
        </>
     );
}
 
export default Cars;