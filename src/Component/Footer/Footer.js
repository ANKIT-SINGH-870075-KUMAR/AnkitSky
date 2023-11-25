import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <>
            <div className='FooterContainer'>
              <div className='foot1'>
                <h1>Student Special: Discounted rates</h1>
                <h1> on tropical getaways!</h1>
              </div>
              <div className='foot1'>
                <p>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
              </div>
              <div className='foot1 foot2'>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Use</li>
                    <li>Sales and Refunds</li>
                    <li>Legal</li>
                </ul>
                <ul className='ul2'>
                    <li>About</li>
                    <li>Schedules</li>
                    <li>Pricing</li>
                    <li>Membership</li>
                    <li>Joins</li>
                </ul>
              </div>
            </div>
        </>
    )
}

export default Footer;