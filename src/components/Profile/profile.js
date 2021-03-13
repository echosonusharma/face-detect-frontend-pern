const Profile = ({ setShowProfile, profile, loadUser }) => {

    return (
        <>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="ml9 f2 fw6 ph0 mh0 grow pb4" style={{ textAlign: 'center' }}>Profile</div>
                    <h3>Name : {profile.name}</h3>
                    <h3>Email : {profile.email}</h3>
                    <h3>Search Entries : {loadUser.user.entries}</h3>
                    <div className="lh-copy mt3 center">
                        <p
                            onClick={() => { setShowProfile(false) }}
                            className="f4 link dim black underline pa3 pointer"
                            style={{ fontFamily: 'Audiowide' }}>Back To Search</p>
                    </div>
                </main>
            </article>
        </>
    )
};

export default Profile;