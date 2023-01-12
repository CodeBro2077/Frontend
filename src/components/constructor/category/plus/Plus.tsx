import React from "react";
import './Plus.scss'




function Plus() {


    const [isOpen, setIsOpen] = React.useState(false)
    const clickPlus = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div onClick={clickPlus} className={`plus ${isOpen ? 'plus-open' : 'plus-close'}`}>
            <span>+</span>
        </div >
    );
}

export default Plus;
