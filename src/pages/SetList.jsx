import React from "react";
import { useState } from "react"

const SetCate = ( props ) => {
    const [list, setList] = useState(["React.js", "React.ts", "sad", "asasd", ".Tasdasd"])
    const [want, setWant] = useState(props.cate)
    const [slist, setSlist] = useState([])
    const [listn, setListn] = useState(["Unity", "Unreal Engine"])
    const [wantn, setWantn] = useState(props.caten)
    const [slistn, setSlistn] = useState([])
    const [skey, setSkey] = useState(0)

    const add = ( value ) => {
        if(want.filter((x) => x === value).length === 0 ) {
            const temp = [...want, value]
            setWant(temp)
        }
    }

    const addn = ( value ) => {
        if(wantn.filter((x) => x === value).length === 0 ) {
            const temp = [...wantn, value]
            setWantn(temp)
        }
    }

    const cancel = ( value ) => {
        const temp = want.filter((x) => x !== value)
        setWant(temp)
    }

    const canceln = ( value ) => {
        const temp = wantn.filter((x) => x !== value)
        setWantn(temp)
    }

    const search = ( value ) => {
        if (value === "")
            setSkey(0)
        else
            setSkey(1)

        let temp = []
        list.filter((x) => {
            if(x.toLowerCase().includes(value.toLowerCase()))
                temp = [...temp, x]
        })
        setSlist(temp)

        let tmp = []
        listn.filter((x) => {
            if(x.toLowerCase().includes(value.toLowerCase()))
                tmp = [...tmp, x]
        })
        setSlistn(tmp)
    }

    const listadd = (e) => {
        if(e.key === "Enter" && slist !== null && slistn !== null && skey === 1) {
            const temp = [...listn, e.target.value]
            setListn(temp)
        }
    }

    return (
        <>
            <div className="setcateback">
                <div className="setcatetitle">Add your {props.title}</div>
                <div className="setcatebody">
                    <div className="setcateleft">
                        <div className="setcatelists">
                            {want.map((x) => (
                                <div className="setcatewantgroup">
                                    <div className="setcatewant">{x}</div>
                                    <div className="setcatedlt" id={x} onClick={(e) => cancel(e.target.id)}>x</div>
                                </div>
                            ))}
                            {wantn.map((x) => (
                                <div className="setcatewantgroup">
                                    <div className="setcatewantn">{x}</div>
                                    <div className="setcatedlt" id={x} onClick={(e) => canceln(e.target.id)}>x</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="setcateright">
                        <input className="setcateinput" onChange={(e) => search(e.target.value)} onKeyDown={(e) => listadd(e)}></input>
                        <img src="sd" className="setcateimg"></img>
                        <hr></hr>
                        <div className="setcatelists">
                            {skey === 0 && list.map((x) => (<div onClick={(e) => add(e.target.textContent)} className="setcatelist">{x}</div>))}
                            {skey === 0 && listn.map((x) => (<div onClick={(e) => addn(e.target.textContent)} className="setcatelistn">{x}</div>))}
                            {skey === 1 && slist.map((x) => (<div onClick={(e) => add(e.target.textContent)} className="setcatelist">{x}</div>))}
                            {skey === 1 && slistn.map((x) => (<div onClick={(e) => addn(e.target.textContent)} className="setcatelistn">{x}</div>))}
                        </div>
                    </div>
                </div>
                <div className="setcatebtngroup">
                    <div className="setcatecnl" onClick={() => props.setPlus(0)}>Cancel</div>
                    <div className="setcateadd" onClick={() => {props.setCate(want); props.setCaten(wantn); props.setPlus(0)}}>Apply</div>
                </div>
            </div>
        </>
    );
};

export default SetCate;