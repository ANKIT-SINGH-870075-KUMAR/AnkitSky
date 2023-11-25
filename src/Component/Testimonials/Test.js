import React from 'react';
import "./Test.css";
import pic1 from "../../Image/Rectangle 16.png";
import pic2 from "../../Image/Rectangle 17.png";
import pic3 from "../../Image/Rectangle 18.png";

function Test() {
  return (
    <>
     <div className='TestContainer'>
        <div className='Test_head'>
            <h1>Testimonials</h1>
        </div>
        <div className='Test_card'>
            <div className='card'>
                <div className='Card_Img'>
                    <img src={pic1} alt=''/>
                    <span>Corey Korsgaard</span>
                </div>
                <div className='Card_Info'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className='card'>
                <div className='Card_Img'>
                    <img src={pic2} alt=''/>
                    <span>Corey Korsgaard</span>
                </div>
                <div className='Card_Info'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className='card'>
                <div className='Card_Img'>
                    <img src={pic3} alt=''/>
                    <span>Corey Korsgaard</span>
                </div>
                <div className='Card_Info'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Test;
