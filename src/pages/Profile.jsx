import React from "react";
import "./Profile.css";

const Profile = () => {
    return (
        <>
            <div className="postheader">

            </div>
            <div className="profilebody">
                <div className="mybody">
                    <div className="myleft">
                        <div className="myedit">Edit Profile</div>
                        <div className="myimg"></div>
                        <div className="myname">Lihan</div>
                        <div className="myid">Lihan030</div>
                        <div className="mybookmark">7 bookmark</div>
                    </div>
                    <div className="myright">
                        <div className="myprojecttitle">Project List</div>
                        <div className="myprojectlist">

                        </div>
                        <div className="myintro">Intro</div>
                        <div className="mycontent">contents</div>
                        <div className="mybadge">Badge</div>
                    </div>
                </div>
                <div className="mywith">withdrawal</div>
            </div>
            <div className="postfooter">

            </div>
        </>
    );
};

export default Profile;
