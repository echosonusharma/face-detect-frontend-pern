import React, { useState } from 'react';

const SighIn = ({ setIsAuth, setReg, getUser }) => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const onSubmit = () => {
        fetch('https://polar-garden-61408.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: emailInput,
                password: passwordInput
            })
        }).then(res => res.json())
            .then(user => {
                if (user.id) {
                    getUser(user);
                    setIsAuth(true);
                }
            });
    }


    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure" >
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                        <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label
                                className="db fw6 lh-copy f6"
                                htmlFor="email-address">Email</label>
                            <input
                                onChange={(e) => setEmailInput(e.target.value)}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={(e) => setPasswordInput(e.target.value)}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                    </fieldset>
                    <div className="center">
                        <input
                            onClick={onSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in" />
                    </div>
                    <div className="lh-copy mt3 center">
                        <p
                            onClick={() => { setReg(true) }}
                            className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
    )
}

export default SighIn;
