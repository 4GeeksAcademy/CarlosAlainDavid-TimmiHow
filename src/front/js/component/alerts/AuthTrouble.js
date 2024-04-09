import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const AuthTrouble = ({alertMsg}) => {
	const { store, actions } = useContext(Context);

	return <>
     
        
    
                <div className="alert alert-danger
                    animate__animated animate__bounce
                    d-flex 
                    justify-content-center 
                    align-items-center" 
                    role="alert" 
                    style={{zIndex:9999}}>
                    <div >
                        { alertMsg }
                    </div>
                </div>
        
</>	
};

