import React from "react";
import ReactDOM from "react-dom";

const PortalDemo=(props)=>{
    return ReactDOM.createPortal(
    <h1>{props.name}</h1>
    ,document.getElementById('portal-demo')
    )
}
export default PortalDemo