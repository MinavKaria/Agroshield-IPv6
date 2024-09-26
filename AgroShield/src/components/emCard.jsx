import React, { useState, useEffect } from "react";

function EmCard({title, description, img}){
    console.log(title);
    return (
        <div className="em-card bg-[#171a1f] py-5 px-10 rounded-md">
            <img src={img} alt={title} className="rounded-md" />
            <div className="text-[4vh]">{title}</div>
            <div className="text-[2vh] text-wrap">{description}</div>
        </div>
        );
    }

export default EmCard;