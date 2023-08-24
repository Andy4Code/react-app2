import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function EditUser()
{

    const navigate = useNavigate();
    const [inputs,setInputs] =  useState([]);


    const {id} = useParams();

    useEffect(()=>{
        getUser();
    },[]);



    function getUser(){
        axios.get(`http://localhost/react/api/user/${id}`).then(response => {
            // console.log(response.data)
            // console.log('get data')
            setInputs(response.data);
            // console.log(inputs)
        });
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log(inputs)
        axios.put(`http://localhost/react/api/user/${id}/edit`,inputs)
        .then((response)=>{
            // console.log(response.data);
            // console.log('update data')
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
        <h1>Edit User</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" value={inputs.name} name="name" id="name" onChange={changeHandler}/>

            <label htmlFor="email">email</label>
            <input type="text" value={inputs.email} name="email" id="email" onChange={changeHandler}/>

            <label htmlFor="mobile">mobile</label>
            <input type="phone" value={inputs.mobile} name="mobile" id="mobile" onChange={changeHandler}/>

            <button>Send</button>

        </form>
    </>
    );
}