import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";

export const Calendly = (url) => {

    // useEffect(() => {
    // }, [url]);

    return <>
        <div className="row" style={{ paddingTop: '20px' }}> {/* Añade padding superior aquí */}
            <h2 style={{ fontWeight: 'bold' }}>Programa tus clases</h2>
            <div className="App">
                <InlineWidget styles={{ height: "80vh" }} url={url} />
            </div>
        </div>
    </>
};
