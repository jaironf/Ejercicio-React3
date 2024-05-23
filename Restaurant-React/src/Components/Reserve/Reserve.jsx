import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Reserve.css'


const Reserve = () => {
const initialValue ={
    name: '',
    email: '',
    phone: '',
    date: '',
    people: ''
};
const [data, setData] = useState(initialValue)
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState("");

const navigate = useNavigate();

const validateForm = () => {
    if (!data.name) {
        setMessage("");
      } else if (data.name.length < 3) {
        setMessage("Name must be at least 3 characters");
        setBtnDisabled(true);
      } else {
        setMessage("");
        setBtnDisabled(false);
      }
}

useEffect(() => {
    validateForm()
}, [data]);

const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
const handleOnSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem('Reserve', JSON.stringify(data))
    console.log(data);
    setData(initialValue)
    navigate('/');
}

  return (
    <div className='container'>
        <h1 className='reserve-title'>Reserve Form</h1>
        <form onSubmit={handleOnSubmit}>
            <div className='inputs-div'>
            <input type='text' name='name' id='name' placeholder='Insert your name' value={data.name} onChange={handleInputChange}/>
            <input type="email" name="email" id="email" placeholder='Insert your email' value={data.email} onChange={handleInputChange}/>
            <input type="text" name='phone' id='phone' placeholder='Insert your phone' value={data.phone} onChange={handleInputChange}/>
            <input type="date" name="date" id="date" value={data.date} onChange={handleInputChange}/>
            <input type='number' name='people' id='people' value={data.people} onChange={handleInputChange}/>
            <button type='submit' value='send' disabled={btnDisabled} >Send</button>
            <h2 className='msg'>{message}</h2>
            </div>
        </form>
    </div>
  )
}

export default Reserve