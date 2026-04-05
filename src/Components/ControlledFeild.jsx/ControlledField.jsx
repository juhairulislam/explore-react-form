import React, { useState } from 'react';

const ControlledField = () => {

    const [password , setPassword] = useState('') ;

    const handleOnChange = e =>{
        console.log(e.target.value)
    }

    const handleSubmit = (e) =>{

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" required placeholder='Your Email' />
                <br />
                <input type="password" name="password" onChange={handleOnChange} defaultValue={password} id="" placeholder='Password' required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default ControlledField;