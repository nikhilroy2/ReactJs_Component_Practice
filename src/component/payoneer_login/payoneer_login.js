import React, { Fragment, useState } from 'react';
import './payonner_login.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
export default PayoneerLogin
document.title = "Hello Payoneer"
function PayoneerLogin() {
    const gallery = {
        logo: require('./img/payonner.svg').default
    };
    const [inputSmall, setInputSmall] = useState(false);

    function keyPress(event) {
        const { name, value } = event.target;
        if (event.target.value === '') {
            setInputSmall({
                ...inputSmall,
                [name]: false
            })
        } else {
            setInputSmall({
                ...inputSmall,
                [name]: true
            })
        }
    }
    console.log(inputSmall)
    return (
        <Fragment>
            <MDBContainer fluid className="login_container d-flex p-0 m-0">
                <aside className="p-5">
                    <div className="logo">
                        <img src={gallery.logo} alt="" />
                    </div>
                    <form action="">
                        <div className="form-group mb-3">
                            <input onInput={keyPress} required name="input1" type="text" className="form-control" />
                            <label htmlFor="">Email or Username</label>
                            <small className={inputSmall["input1"] ? 'd-none form-text' : 'form-text'}>
                                Email or username is required
                               </small>
                        </div>

                        <div className="form-group mb-3">
                            <input onInput={keyPress} required type="password" name="input2" id="" className="form-control" />
                            <label htmlFor="">Password</label>
                            <small className={inputSmall["input2"] ? 'd-none form-text' : 'form-text'}>
                                Password is required
                               </small>
                            <br />
                            <a href="#">Forgot Password</a>
                        </div>


                        <div className="form-group mb-3">
                            <button className="btn btn-danger w-100">
                                Sign In
                               </button>
                        </div>
                        <h6 className="text-center">
                            Need to payoneer? <a href="//#endregion">Sign Up</a>
                        </h6>
                    </form>
                </aside>
                <div className="bg_login">
                </div>
            </MDBContainer>
        </Fragment>
    )
}



const Testing = () => {
    const [state, setState] = useState({})

    function handleChange(event) {
        const { name, value } = event.target
        setState({
            ...state,
            [name]: value
        })
        console.log(state)
    }

    return (
        <>
            <div>
                <input
                    name="input1"
                    value={state["input1"]}
                    onChange={handleChange}
                />
                <input
                    name="input2"
                    value={state["input2"]}
                    onChange={handleChange}
                />
            </div>


        </>
    )
}