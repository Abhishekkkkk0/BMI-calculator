import React from 'react'
import { useState } from "react";
import './bmi.css'


function Bmi() {

    const [weight, setWeight] = useState('');
    const [height, setheight] = useState('');
    const [bmivalue, setBmi] = useState('');
    const [message, setMessage] = useState('');


    let claculateBmi = (e) => {
        e.preventDefault();
        const heightInMeters = height / 100;

        
        if(weight == 0 || height == 0){
            alert('Please enter valid weight and height!!');
        }
        else {
            const bmivalue = weight / (heightInMeters * heightInMeters);
            setBmi(bmivalue.toFixed(1));
        }

        if(bmivalue < 18.5){
            setMessage('You are Underweight 😔.')
        }
        else if(bmivalue > 18.5 && bmivalue < 24.9){
            setMessage('Your are Fit 😊.')

        }
        else {
            setMessage('OOPPS!!  You are Overweight 😔')
        }
    }

    const resetForm = () => {
        setBmi('');
        setMessage('');
        setWeight('');
        setheight('');
    }

  return (
    <div className='app'>
        <div className='container'>
            <h2 className='center'>BMI Calculator</h2>
            <form onSubmit={claculateBmi}>
                <div>
                <label>Weight (kg)</label>
                <input
                    type='text'
                    placeholder='Enter you weight'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                </div>
                <div>
                <label>Height (cm)</label>
                <input 
                    type='text'
                    placeholder='Enter you height'
                    value={height}
                    onChange={(e) => setheight(e.target.value)}
                />    
                </div> 
                <div>
                    <button className='btn'>Submit</button>
                    <button className='btn btn-outline' onClick={resetForm} type='button'>Reload</button>
                </div>
                <div className='center'>
                    <h4>Your BMI is : {bmivalue}</h4>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Bmi