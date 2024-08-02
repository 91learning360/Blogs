import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import isEmail from 'validator/lib/isEmail';
import uniqid from 'uniqid';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateBlog = ({ add_Func, updateData }) => {
    const [inputData, setInputData] = useState({
        email: "",
        title: "",
        paragraph: "",
        img: "",
        verified: "",
        id: ""
    });

    useEffect(() => {

        if (updateData != null) {
            setInputData(updateData)

        }

    }, [updateData])



    const notify = () => toast("Invalid Email");



    const handleOnSubmit = (e) => {
        e.preventDefault();


        if (!isEmail(inputData.email)) {
            notify();
            return;
        };

        add_Func(inputData);



        setInputData({
            email: "",
            title: "",
            paragraph: "",
            img: "",
            verified: "",
            id: ""
        })


    }


    const handleOnChange = (e) => {


        setInputData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

        const unid = uniqid();
        setInputData((prev) => {
            return { ...prev, id: unid }
        })



    }




    return (
        <div style={{ padding: '20px' }}>
            <ToastContainer
                position="bottom-left"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
            <form onSubmit={handleOnSubmit} >
                <div>
                    <TextField id="outlined-basic" value={inputData.email} name='email' onChange={handleOnChange} sx={{ margin: '10px' }} label="email" variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" value={inputData.title} name='title' onChange={handleOnChange} sx={{ margin: '10px' }} label="Title" variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" value={inputData.paragraph} name='paragraph' onChange={handleOnChange} label="paragraph" sx={{ margin: '10px' }} variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" value={inputData.img} name="img" onChange={handleOnChange} sx={{ margin: '10px' }} label="img" variant="outlined" />
                </div>
                <div>
                    <TextField id="outlined-basic" value={inputData.verified} onChange={handleOnChange} name='verified' sx={{ margin: '10px' }} label="verified " variant="outlined" />
                </div>
                <Button type='submit' sx={{ margin: '10px' }} variant='contained' >
                    {updateData != null ? "update" : "Submit"}
                </Button>
            </form>
        </div>
    )
}

export default CreateBlog