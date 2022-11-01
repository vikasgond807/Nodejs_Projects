import React from 'react'
import { FaSignInAlt} from 'react-icons/fa'
import { useState, useEffect } from 'react'

function Login() {
    const [formData, setformData] = useState({
        
        email: '',
        password: '',
        

    })

    const {  email, password,  } = formData

    const onChange = (e) => {
        console.log('')
        setformData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }



    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Login Here </p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Enter Your email'
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter Your password'
                            onChange={onChange}
                        />
                    </div>
                    

                <div className="form-group">
                    <button type='submit' className='btn btn-block'>Login</button>
                </div>
                </form>
            </section>
        </>
    )
}

export default Login