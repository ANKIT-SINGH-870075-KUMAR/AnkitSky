import React, { useState } from 'react';
import "./color.css";
import { IoMdSettings } from "react-icons/io";

const colorSelectorStyle={
    "--skin-color": "#fb839e",
    "--orange": "#ec9412",
    "--green": "#1fc586",
    "--blue": "#2eb1ed",
    "--red": "#cc3a3b"
}


function Color() {
    const[display , SetDisplay] = useState(false);
    const [color, SetColor] = useState("red");
    const [pink, SetPink] = useState();
    const [orange, SetOrange] = useState("#ec9412");
    const [green, SetGreen] = useState("#1fc586");
    const [blue, SetBlue] = useState("#2eb1ed");
    const [red, SetRed] = useState("#cc3a3b");

    const DisplayStyle = {
        display: display ? "none" : "flex",
    }

    const handleDisplay = () =>{
        SetDisplay(!display)
    }

    const handleColor = () =>{
        if(color){
            if(color == pink){
               if(pink){
                return
               }
               else{
                SetPink("#fb839e")
               }
            }
            else if(color == orange){
               return;
            }
            else if(color == green){
               return;
            }
            else if(color == blue){
               return;
            }
            else if(color == red){

            }
        }

    }

    return (
        <>
            <div className="style-switcher">
                <button className="style-switcher-toggler"  onClick={()=>handleDisplay()}>
                    <IoMdSettings />
                </button>
                <div className="colors" style={DisplayStyle}>
                    <button className="color-1"></button>
                    <button className="color-2"></button>
                    <button className="color-3"></button>
                    <button className="color-4"></button>
                    <button className="color-5"></button>
                </div>
            </div>
        </>
    )
}

export default Color;