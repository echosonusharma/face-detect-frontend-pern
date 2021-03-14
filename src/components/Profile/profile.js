const Profile = ({ setShowProfile, profile, loadUser }) => {

    return (
        <div className="pl4 pr4 pt5">
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center pt4">
                <main className="pa4 black-80 ">
                    <div className="ml9 f4 fw6 ph0 mh0 grow pb4 @media (min-width: 300px) {
                                f2-ns pb4-ns }"
                        style={{ textAlign: 'center' }}>Profile</div>
                    <h3 className="f5 @media(min-width: 300px) {
                                f4-ns }">Name : {profile.name}</h3>
                    <h3 className="f5 @media(min-width: 300px) {
                                f4-ns }">Email : {profile.email}</h3>
                    <h3 className="f5 @media(min-width: 300px) {
                                f4-ns }">Search Entries : {loadUser.user.entries}</h3>
                    <div className="lh-copy mt3 center">
                        <p
                            onClick={() => { setShowProfile(false) }}
                            className="f5 link dim black underline pa3 pointer @media (min-width: 300px) {
                                f4-ns }"
                            style={{ fontFamily: 'Audiowide' }}>Back To Search</p>
                    </div>
                </main>
            </article>
        </div>
    )
};

export default Profile;