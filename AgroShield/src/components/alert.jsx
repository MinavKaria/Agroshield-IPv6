import React, { useState, useEffect } from "react";
function Alert({location, name, reason, severity, asignee}){
    let color = [
        "bg-green-300",
        "bg-yellow-300",
        "bg-orange-300",
        "bg-red-300",
        "bg-red-800"
    ]

    let color_hex = [
        "#10B981",
        "#FBBF24",
        "#F97316",
        "#EF4444",
        "#DC2626"
    ]

    return(
        <>
            <div className="flex flex-row gap-10 bg-[#171a1f] rounded-md px-8 py-5">
                <div className="flex flex-col gap-1 max-w-30">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.857 10.2857L18.857 8.57138C18.857 6.75275 18.1346 5.00861 16.8486 3.72264C15.5626 2.43668 13.8185 1.71423 11.9999 1.71423C10.1812 1.71423 8.43709 2.43668 7.15113 3.72264C5.86516 5.00861 5.14272 6.75275 5.14272 8.57138V10.2857C5.12167 10.8085 4.99305 11.3214 4.76491 11.7923C4.53676 12.2632 4.21398 12.682 3.81672 13.0225C3.10289 13.6308 2.65579 14.4945 2.57129 15.4285C2.57129 17.5714 6.09586 18.8571 11.9999 18.8571C17.9039 18.8571 21.4284 17.5714 21.4284 15.4285C21.3439 14.4945 20.8968 13.6308 20.183 13.0225C19.7857 12.682 19.463 12.2632 19.2348 11.7923C19.0067 11.3214 18.8781 10.8085 18.857 10.2857Z" fill={`${color_hex[severity-1]}`}/>
                    <path d="M9.55273 20.4857C9.7161 21.0068 10.0416 21.4622 10.4817 21.7855C10.9219 22.1088 11.4537 22.2831 11.9999 22.2831C12.546 22.2831 13.0779 22.1088 13.518 21.7855C13.9582 21.4622 14.2837 21.0068 14.447 20.4857C13.6807 20.5423 12.8664 20.5714 11.9999 20.5714C11.1333 20.5714 10.319 20.544 9.55273 20.4857Z" fill="#F3F4F6"/>
                </svg>
                </div>
                <div className="flex flex-col gap-1">
                    <div>Alertee: {name}</div>
                    <div>Location: {location}</div>
                    <div>Description: {reason}</div>
                    <div>Severity: {severity}</div>
                    <div className="w-[100%] h-[0.5vh] bg-[#333a45] rounded-lg">
                        <div className={`h-[0.5vh] ${color[severity-1]} rounded-lg z-20`} style={{
                            width: "calc(" + severity*20 + "%)"
                        }}></div>
                    </div>
                    <div>Entity Asigned: {asignee}</div>
                </div>
            </div>
        </>
    )
}
export default Alert