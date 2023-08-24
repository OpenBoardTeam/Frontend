import React from "react";
import "./Profile.css";
import ProfileMy from "./ProfileMy";
import { useState } from "react";

const Profile = () => {
    const [menu, setMenu] = useState(0)
    const [state, setState] = useState(0)
    return (
        <>
            <div className="postheader">

            </div>
            <div className="profilebody">
                <div className={menu === 0 ? "profilemenuclose" : "profilemenuopen"}>
                    {menu === 0 && (
                        <div className="profilemenubutton" onClick={() => setMenu(1)}>=</div>
                    )}
                    {menu === 1 && (
                        <>
                            <div className="profilemenubutton" onClick={() => setMenu(0)}>{`<`}</div>
                            <div className={state !== 0 ? "buttonmy" : "buttonmyclick"} onClick={() => setState(0)}>My Profile</div>
                            <div className={state !== 1 ? "buttonproject" : "mybuttonclick"} onClick={() => setState(1)}>Project Detail</div>
                            <div className={state !== 2 ? "buttoninterest" : "mybuttonclick"} onClick={() => setState(2)}>Interest</div>
                        </>
                    )}
                    
                </div>
                <div className="profilemain">
                    {state === 0 && <ProfileMy/>}
                </div>
            </div>
            <div className="postfooter">

            </div>
        </>
    );
};

export default Profile;
