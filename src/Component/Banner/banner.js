import React from 'react';
import bannerImg from "../../Image/Group 171.png"
import "./banner.css";

function banner() {
  return (
    <>
      <div className='bannerContainer'>
        <div className='elipse1'>
            <div className='eli1'>
                <div className='eli2'></div>
            </div>
        </div>
        <div className='elipse2'>
            <div className='eli1'>
                <div className='eli2'></div>
            </div>
        </div>
        <div className='circle1'>
            <div className='cir1'>
                <div className='cir2'></div>
            </div>
        </div>
        <div className='circle2'>
            <div className='cir1'>
                <div className='cir2'></div>
            </div>
        </div>
        <div className='quatercircle'>
            <div className='qc1'>
                <div className='qc2'></div>
            </div>
        </div>

      <div className='banner-left'>
        <h5>Discover the beauty of the tropics</h5>
        <h1>Tropical</h1>
        <h1>Destinations</h1>
        <h1 style={{fontWeight: "400"}}>For Student</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
        <button>SIGN UP</button>
      </div>
      <div className='banner-right'>
        <img src={bannerImg} alt="..."/>
      </div>
      </div>
    </>
  )
}

export default banner
