import React from "react";
import { useState } from "react";

const PlusSystem = ( props ) => {
    const [value, setValue] = useState("")
    
    const add = () => {
        props.setList([...props.list, value])
        props.setValue([...props.value, 0])
        props.setPlus(0)
    }

    return (
        <>
            <div className="plusback">
                <div className="plusform">
                    <input className="plusinput" onChange={(e) => setValue(e.target.value)} ></input>
                    <div className="plusbutton">
                        <div className="plusadd" onClick={() => add()}>추가</div>
                        <div className="pluscancel" onClick={() => props.setPlus(0)}>취소</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlusSystem;