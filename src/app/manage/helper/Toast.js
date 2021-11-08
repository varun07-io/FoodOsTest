import React from 'react';


const Toast = (props) => {
    return(
            <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Admin</strong>
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
            </Toast>
    )
}


export default Toast;