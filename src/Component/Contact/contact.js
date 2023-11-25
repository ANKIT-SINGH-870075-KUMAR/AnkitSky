import React, { useState } from 'react';
import IMG1 from "../../Image/Group 167.png";
import "./contact.css";

function Contact() {
    const [number1, SetNumber1] = useState(0);
    const [number2, SetNumber2] = useState(0);

    function add1() {
        if (number1 < 100) {
            SetNumber1(number1 + 1)
        }
    }

    function Sub1() {
        if (number1 > 0) {
            SetNumber1(number1 - 1)
        }
    }

    function add2() {
        if (number2 < 100) {
            SetNumber2(number2 + 1)
        }
    }

    function Sub2() {
        if (number2 > 0) {
            SetNumber2(number2 - 1)
        }
    }
    return (
        <>
            <div className='contactContainer'>
                <div className='circle1 student3 contact3'>
                    <div className='cir1'>
                        <div className='cir2'></div>
                    </div>
                </div>
                <div className='contact_left'>
                    <img src={IMG1} alt='' />
                </div>
                <div className='contact_right'>
                    <div className='contactbox'>
                        <div className='form'>
                            <div className='form_head'>
                                <h1>Book now</h1>
                                <p>Lorem ipsum dolor sit amet, consector adipiscing elit</p>
                            </div>
                            <div className='form_input'>
                                <div className='city'>
                                    <span>CITY</span>
                                    <input type='text' placeholder='Placeholder' />
                                </div>
                                <div className='travel'>
                                    <div className='Arrival'>
                                        <span>Arrival</span>
                                        <input type='text' placeholder='10 October' />
                                    </div>
                                    <div className='Departure'>
                                        <span>Departure</span>
                                        <input type='text' placeholder='11 October' />
                                    </div>
                                </div>
                                <div className='travel'>
                                    <div className='Arrival'>
                                        <span>Star</span>
                                        <div className='star'>
                                            <button className='btn-left' onClick={() => Sub1()}>-</button>
                                            <input type='number' placeholder='4' value={number1} />
                                            <button className='btn-right' onClick={() => add1()}>+</button>
                                        </div>
                                    </div>
                                    <div className='Departure'>
                                        <span>Room</span>
                                        <div className='star'>
                                            <button className='btn-left' onClick={() => Sub2()}>-</button>
                                            <input type='number' placeholder='1' value={number2} />
                                            <button className='btn-right' onClick={() => add2()}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='form_btn'>
                                <button>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;