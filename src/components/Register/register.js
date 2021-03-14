import React, { useState } from 'react';

const Register = ({ setIsAuth, getUser, setImageUrl }) => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');



    const onSubmit = () => {
        fetch('https://polar-garden-61408.herokuapp.com/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: nameInput,
                email: emailInput,
                password: passwordInput
            })
        }).then(res => res.json())
            .then(user => {
                if (user.id) {
                    getUser(user);
                    setIsAuth(true);
                    setImageUrl('');
                }
            });
    }



    return (
        <div className="pl4 pr4 pt5">
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure" >
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                            <legend className="f3 fw6 ph0 mh0 @media(min-width: 300px) {
                            f2-ns }">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    onChange={(e) => setNameInput(e.target.value)}
                                    className="f6 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 @media(min-width: 300px) {
                                    f5-ns }"
                                    type="text"
                                    name="name"
                                    id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    onChange={(e) => setEmailInput(e.target.value)}
                                    className="f6 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 @media(min-width: 300px) {
                                    f5-ns }"
                                    type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    className="f6 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 @media(min-width: 300px) {
                                    f5-ns }"
                                    type="password"
                                    name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="center">
                            <input
                                onClick={onSubmit}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Register;