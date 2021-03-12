import React, { useEffect, useState } from "react";

const Profile = ({ setShowProfile, id }) => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch(`https://polar-garden-61408.herokuapp.com/profile/${id}`)
            .then(res => res.json())
            .then(user => setProfile(user));
    }, [id]);
    return (
        <>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure" >
                        <fieldset className="ba b--transparent ph0 mh0" >
                            <legend className="f2 fw6 ph0 mh0 grow">Profile</legend>
                            <h3>Name : {profile.name}</h3>
                            <h3>Email : {profile.email}</h3>
                            <h3>Search Entries : {profile.entries}</h3>
                        </fieldset>
                        <div className="lh-copy mt3 center">
                            <p
                                onClick={() => { setShowProfile(false) }}
                                className="f4 link dim black db pointer">Back To Search</p>
                        </div>
                    </div>
                </main>
            </article>
        </>
    )
};

export default Profile;