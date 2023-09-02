import React from "react";
import "./NewPost.css"
import { useState } from "react";
import SetList from "./SetList";
import SetLink from "./SetLink";
import axios from "axios";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"

const Posts = () => {
    const [cate, setCate] = useState([])
    const [frame, setFrame] = useState([])
    const [lang, setLang] = useState([])
    const [caten, setCaten] = useState([])
    const [framen, setFramen] = useState([])
    const [langn, setLangn] = useState([])
    const [plus, setPlus] = useState(0)
    const [link, setLink] = useState("")
    const [linkkey, setLinkkey] = useState(0)

    const [name, setName] = useState("")
    const [sdes, setSdes] = useState("")
    const [des, setDes] = useState("")

    const submit = () => {

        axios.post('/project',
            {
                "categories": [...cate, ...caten],
                "description": des,
                "gitUrl": link,
                "name": name,
                "simple_description": sdes,
                "userId": 7
            }
        );
    }

    return (
        <>
            {(linkkey === 0) && (
                <SetLink setLink={setLink} setLinkkey={setLinkkey}/>
            )}
            <div className="postheader">
                <Header/>
            </div>   
            <div className="postbody">
                <div className="postmain">
                <div>Project image</div>
                    <div className="posttop">
                        <div className="postimg"></div>
                        <div className="posttitle">
                            <div>Project name</div>
                            <input className="postname" onChange={(e) => setName(e.target.value)}></input>
                            <div className="des">Single description</div>
                            <input className="postsimple" onChange={(e) => setSdes(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="postmid">
                        <div className="postmidtitle">Description.md</div>
                        <div className="h">Load README.md From Github</div>
                    </div>
                    <textarea className="postdesc" onChange={(e) => setDes(e.target.value)}></textarea>
                    <div className="postcate">Categories</div>
                    <div className="postcatelist">
                        {cate.map((x) => (<div className="postlist">#{x}</div>))}
                        {caten.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(1)} className="postplus">+</div>
                    </div>
                    <div className="postframe">Framework</div>
                    <div className="postframelist">
                        {frame.map((x) => (<div className="postlist">#{x}</div>))}
                        {framen.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(2)} className="postplus">+</div>
                    </div>
                    <div className="postframe">Language</div>
                    <div className="postframelist">
                        {lang.map((x) => (<div className="postlist">#{x}</div>))}
                        {langn.map((x) => (<div className="postlistn">#{x}</div>))}
                        <div onClick={() => setPlus(3)} className="postplus">+</div>
                    </div>
                    <div onClick={()=> submit()} className="postsubmit">Submit</div>
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
            {plus === 1 && (
                <SetList cate={cate} setCate={setCate} caten={caten} setCaten={setCaten} setPlus={setPlus} title="category"/>
            )}
            {plus === 2 && (
                <SetList cate={frame} setCate={setFrame} caten={framen} setCaten={setFramen} setPlus={setPlus} title="framework"/>
            )}
            {plus === 3 && (
                <SetList cate={lang} setCate={setLang} caten={langn} setCaten={setLangn} setPlus={setPlus} title="language"/>
            )}
        </>
    );
};

export default Posts;
