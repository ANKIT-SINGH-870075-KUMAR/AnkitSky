import React from 'react';
import Card1 from "../../Image/card-image-1.png";
import Card2 from "../../Image/card-image-2.png";
import Card4 from "../../Image/card-image.png";
import "./Destination.css";

function Destination() {
  return (
    <>
     <div className='destinationContainer'>
        <div className='dest_head'>
            <h1>Our Destinations</h1>
        </div>
        <div className='dest_card'>
            <div className='dest_box'>
                <div className='dbCard'>
                    <div className='db_Img'>
                        <img src={Card1} alt='...'/>
                    </div>
                    <div className='db_Info'>
                        <h1>Harvard University</h1>
                        <div className='Infobox'>
                            <h4>Cambridge, Massachusetts, Uk</h4>
                        </div>
                    </div>
                </div>
                <div className='dbCard'>
                    <div className='db_Img'>
                        <img src={Card2} alt='...'/>
                    </div>
                    <div className='db_Info'>
                        <h1>Harvard University</h1>
                        <div className='Infobox'>
                            <h4>Cambridge, Massachusetts, Uk</h4>
                        </div>
                    </div>
                </div>
                <div className='dbCard'>
                    <div className='db_Img'>
                        <img src={Card4} alt='...'/>
                    </div>
                    <div className='db_Info'>
                        <h1>Harvard University</h1>
                        <div className='Infobox'>
                            <h4>Cambridge, Massachusetts, Uk</h4>
                        </div>
                    </div>
                </div>
                <div className='dbCard'>
                    <div className='db_Img'>
                        <img src={Card1} alt='...'/>
                    </div>
                    <div className='db_Info'>
                        <h1>Harvard University</h1>
                        <div className='Infobox'>
                            <h4>Cambridge, Massachusetts, Uk</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Destination;