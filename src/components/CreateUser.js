import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateUser()
{

    const navigate = useNavigate();
    const [inputs,setInputs] =  useState();

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(inputs)
        axios.post(
            'http://localhost/react/api/user/create',
            inputs
        ).then((response)=>{
            console.log(response.data);
            navigate('/')
        });
    }




    const changeHandler = (e) => {
        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values,[name]:value}));
    }
    return(
    <>
        <h1>Create User</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={changeHandler}/>

            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" onChange={changeHandler}/>

            <label htmlFor="mobile">mobile</label>
            <input type="phone" name="mobile" id="mobile" onChange={changeHandler}/>

            <button>Send</button>

        </form>
    </>
    );
}