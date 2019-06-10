import React, { useState } from 'react';


const Door = () => {
    const [open, setOPen] = useState(false);
    return (
        <div>
            <h1>La puerta está <p style={{color:"blue"}}>{open ? "Abierta" : "Cerrada"}</p></h1>
            <button onClick={() => setOPen(!open)}>
                {open ? "Abierta" : "Aerrada"}
            </button>
        </div>

    )
}
export default Door;
