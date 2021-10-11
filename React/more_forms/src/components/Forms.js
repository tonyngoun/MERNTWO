import React, {useState} from 'react';


const Forms = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const formDataDivStyle = {
        width: "500px",
        margin: "auto",
        height: "500px",
    }
    const inputDataDivStyle = {
        border: "1px solid #D3D3D3",
    }
    
    return (
        <div>
            <form style = {{ marginTop: "5px "}}>
                <div style = { inputDataDivStyle } >
                    <label htmlFor = "firstName" > First Name </label>
                    <input
                        type = "text"
                        name = "firstName"
                        onChange = { (e) => setFirstName (e.target.value) }
                        />
                </div>
                {
                    firstName.length > 0 ?
                    firstName.length < 2 ?
                    <p className = "error" > First name must be at least 2 characters </p>
                    :null
                    :null
                }

                <div style = { inputDataDivStyle } >
                    <label htmlFor = "lastName" > Last Name </label>
                    <input
                        type = "text"
                        name = "lastName"
                        onChange = { (e) => setLastName (e.target.value) }
                    />
                </div>

                {
                    lastName.length > 0 ?
                    lastName.length < 2 ?
                    <p className = "error" > Last name must be more than 1 character </p>
                    :null
                    :null
                }

                <div style = { inputDataDivStyle } >
                    <label htmlFor = "email" > Email </label>
                    <input
                        type = "text"
                        name = "email"
                        onChange = { (e) => setEmail (e.target.value) }
                        />
                </div>

                {
                    email.length > 0 ?
                    email.length < 5 ?
                    <p className="error">Email must be at least 5 characters</p>
                    : null
                    : null 
                }

                <div style = { inputDataDivStyle}  >
                    <label htmlFor = "password" > Password </label>
                    <input
                        type = "password"
                        name = "password"
                        onChange = { (e) => setPassword (e.target.value) }
                        />
                </div>
                {
                password.length > 0 ?
                password.length < 8 ?
                <p className="error">Password must be at least 8 characters</p>
                : null
                : null 
            }



                <div style= { inputDataDivStyle } >
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </div>
            {
                password.length > 0 ?
                password.length < 8 ?
                <p className="error">Password must be at least 8 characters</p>
                : null
                : null 
            }

            {
                password.length >= 8 && confirmPassword.length > 0 ?
                password !== confirmPassword ?
                <p className="error" > Passwords does not match</p>
                :null
                :null
            }
    
            

            </form>

            <div style={ formDataDivStyle } >
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                    <p>
                        <label>First Name: </label>{ firstName }
                    </p>
                    <p>
                        <label>Last Name: </label>{ lastName }
                    </p>
                    <p>
                        <label>Email: </label>{ email }
                    </p>
                    <p>
                        <label>Password: </label>{ password }
                    </p>
                    <p>
                        <label>Confirm Password: </label>{ confirmPassword }
                    </p>
            </div>
    </div>

    )
}


export default Forms;