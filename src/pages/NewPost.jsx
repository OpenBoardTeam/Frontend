import React from "react";
import "./NewPost.css"
import { useState } from "react";
import PlusSystem from "./PlusSystem";

const Posts = () => {
    const [catelist, setCatelist] = useState(["Education", "Environment", "Life", "Security"])
    const [framelist, setFramelist] = useState(["React", "Angular", "Spring", "AndroidStudio", "Unity", "Vanila", "Etc"])
    const [cate, setCate] = useState([0, 0, 0, 0])
    const [frame, setFrame] = useState([0, 0, 0, 0, 0, 0, 0])
    const [plus, setPlus] = useState(0)

    const cateclick = ( num ) => {
        const temp = [...cate]
        if (temp[num] === 0) {
            temp[num] = 1
        }
        else {
            temp[num] = 0
        }
        setCate(temp)
    }

    const frameclick = ( num ) => {
        const temp = [...frame]
        if (temp[num] === 0) {
            temp[num] = 1
        }
        else {
            temp[num] = 0
        }
        setFrame(temp)
    }

    const cateplusclick = () => {
        setPlus(1)
    }

    const frameplusclick = () => {
        setPlus(2)
    }

    return (
        <>
            <div className="postheader">

            </div>   
            <div className="postbody">
                <div className="postmain">
                <div>Project image</div>
                    <div className="posttop">
                        <div className="postimg"></div>
                        <div className="posttitle">
                            <div>Project name</div>
                            <input className="postname"></input>
                            <div className="des">Single description</div>
                            <input className="postsimple"></input>
                        </div>
                    </div>
                    <div className="postmid">
                        <div className="postmidtitle">Description.md</div>
                        <div className="h">Load README.md From Github</div>
                    </div>
                    <textarea className="postdesc"></textarea>
                    <div className="postcate">Categories</div>
                    <div className="postcatelist">
                        {catelist.map((x, idx) => (cate[idx] === 1) ? (<div onClick={() => cateclick(idx)} className="postlistcheck">{x}</div>) : (<div onClick={() => cateclick(idx)} className="postlist">{x}</div>))}
                        <div onClick={() => cateplusclick()} className="postlist">+</div>
                    </div>
                    <div className="postframe">Framework</div>
                    <div className="postframelist">
                        {framelist.map((x, idx) => (frame[idx] === 1) ? (<div onClick={() => frameclick(idx)} className="postlistcheck">{x}</div>) : (<div onClick={() => frameclick(idx)} className="postlist">{x}</div>))}
                        <div onClick={() => frameplusclick()} className="postlist">+</div>
                    </div>
                </div>
            </div>
            <div className="postfooter">

            </div>
            {plus === 1 && (
                <PlusSystem setPlus={setPlus} list={catelist} value={cate} setList={setCatelist} setValue={setCate}/>
            )}
            {plus === 2 && (
                <PlusSystem setPlus={setPlus} list={framelist} value={frame} setList={setFramelist} setValue={setFrame}/>
            )}
        </>
    );
};

export default Posts;
