import React from 'react';
import "./Explore.css";
import Img1 from "../../Image/Rectangle 25.png";
import Img2 from "../../Image/Rectangle 26.png";
import Img3 from "../../Image/Rectangle 27.png";

function Explore() {
    return (
        <>
            <div className='ExploreContainer'>
                <div className='elipse2 explore2'>
                    <div className='eli1'>
                        <div className='eli2'></div>
                    </div>
                </div>
                <div className='circle01'>
                    <div className='cir01'>
                        <div className='cir02'></div>
                    </div>
                </div>
                <div className='Explore_left'>
                    <div className='Explore_boxs'>
                        <div className='Explore_box'>
                            <div className='img'>
                                <img src={Img1} alt='' />
                            </div>
                            <div className='info'>
                                <h1>Jenny Wilson</h1>
                                <p>Lorem ipsum dolor sit amet. consectetur adipiscing</p>
                            </div>
                        </div>
                        <div className='Explore_box'>
                            <div className='img'>
                                <img src={Img2} alt='' />
                            </div>
                            <div className='info'>
                                <h1>Jenny Wilson</h1>
                                <p>Lorem ipsum dolor sit amet. consectetur adipiscing</p>
                            </div>
                        </div>
                        <div className='Explore_box'>
                            <div className='img'>
                                <img src={Img3} alt='' />
                            </div>
                            <div className='info'>
                                <h1>Jenny Wilson</h1>
                                <p>Lorem ipsum dolor sit amet. consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Explore_right'>
                    <div className='right_box'>
                        <div className='right_heading'>
                            <h1>Tropical Adventure</h1>
                            <span>for Students.</span>
                        </div>
                        <div className='right_para'>
                            <p>Student Tropical Vacation: Relax and Recharge</p>
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
            </div>
        </>
    )
}

export default Explore;
