import React, { useState } from 'react';

const ControlledField = () => {

    const [password , setPassword] = useState('') ;
    const [error, setError] = useState('')

    const handleOnChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value); 

        if(password.length < 6) {
            setError('Password must br at least 6 character')
        }else{
            setError('')
        }

    }



    const handleSubmit = (e) =>{

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" required placeholder='Your Email' />
                <br />
                <input type="password" name="password" onChange={handleOnChange} defaultValue={password}  placeholder='Password' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>

            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
            
        </div>
    );
};

export default ControlledField;