import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const AuthTrouble = () => {
	const { store, actions } = useContext(Context);

	return <>
    {
        store.successMessages 
        ? 
        <div className="alert alert-success 
            animate__animated animate__bounce
            d-flex 
            justify-content-center 
            align-items-center" 
            role="alert" 
            style={{zIndex:9999}}
        >
            <div>
                { store.successMessages }
            </div>
        </div>
        :
        <div className="alert alert-danger
            animate__animated animate__bounce
            d-flex 
            justify-content-center 
            align-items-center" 
            role="alert" 
            style={{zIndex:9999}}
        >
            <div >
                { store.errorMessages }
            </div>
         </div>
    }                
</>	
};

