import React, { useState, useEffect } from "react";

function Card({title, description, img}){
    return(
        <>
        <div className="bg-[#171a1f] flex flex-row gap-6 px-5 py-5 rounded-md">
            <div className="flex flex-col gap-2">
                <span className="text-[#fff] text-[4.5vh]">{title}</span>
                <span className="text-[#9095a1] text-[2.5vh]">{description}</span>
            </div>
            <img src={img} className="w-30 rounded-md"></img>
        </div>
        </>
    )
}
export default Card