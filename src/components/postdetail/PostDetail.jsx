import { useState, useEffect } from "react";
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"
import axios from "axios"

const PostDetail = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/project/17')
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data)
            })
    }, [])
    return (
        <>
            <div className="postheader">
                <Header/>
            </div>   
            <div className="postbody">
                <div className="postmain">
                <div>Project image</div>
                    <div className="posttop">
                        <div className="postimg" onClick={() => console.log(data.name)}></div>
                        <div className="posttitle">
                            <div>Project name</div>
                            <div className="des">{data.name}</div>
                            <div className="des">Single description</div>
                            <div className="des">{data.simple_description}</div>
                        </div>
                    </div>
                    <div className="postmid">
                        <div className="postmidtitle">Description.md</div>
                        <div className="h">Load README.md From Github</div>
                    </div>
                    <div className="des">{data.description}</div>
                    <div className="postcate">Group</div>
                    <div className="postcatelist">
                    </div>
                    <div className="postframe">Social</div>
                    <div className="postframelist">
                    </div>
                    <div className="postframe">Language</div>
                    <div className="postframelist">
                    </div>
                    <div className="postframe">Framework</div>
                    <div className="postframelist">
                    </div>
                    <div className="postframe">Infra</div>
                    <div className="postframelist">
                    </div>
                </div>
            </div>
            <div className="postfooter">
                <Footer/>
            </div>
        </>
    );
};

export default PostDetail;
