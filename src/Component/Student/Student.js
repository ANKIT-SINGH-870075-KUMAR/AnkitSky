import React from 'react';
import "./Student.css";
import Img1 from "../../Image/Mask group.png";


function Student() {
    return (
        <>
            <div className='StudentContainer'>
                <div className='elipse1 student1'>
                    <div className='eli1'>
                        <div className='eli2'></div>
                    </div>
                </div>
                <div className='elipse2 student2'>
                    <div className='eli1'>
                        <div className='eli2'></div>
                    </div>
                </div>
                <div className='circle1 student3'>
                    <div className='cir1'>
                        <div className='cir2'></div>
                    </div>
                </div>
                <div className='circle2 student4'>
                    <div className='cir1'>
                        <div className='cir2'></div>
                    </div>
                </div>
                <div className='quatercircle student5'>
                    <div className='qc1'>
                        <div className='qc2'></div>
                    </div>
                </div>
                <div className='Student_left'>
                    <div className='right_box'>
                        <div className='right_heading'>
                            <span>Get 20% off for student</span>
                            <h1>Student discounts available.</h1>
                        </div>
                        <div className='right_para'>
                            <p>Get ready for some fun in the Sun!</p>
                        </div>
                        <div className='right_list'>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Massa quils natoque sit quam</li>
                                <li>Eros non pelientesque habitant</li>
                                <li>Sed suspendisse id in Liltrices</li>
                            </ul>
                        </div>
                        <div className='right_button'>
                            <button>Explore More</button>
                        </div>
                    </div>
                </div>
                <div className='Student_img'>
                    <img src={Img1} alt='...' />
                </div>
            </div>
        </>
    )
}

export default Student;
