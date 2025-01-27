"use client";

import { toast } from "react-toastify"

function ButtonWithNotification(props) {

    const handleClick = () => {
        toast(props.message || "Soy una notificacion", {
            type: props.type || "success",
        })

        if (props.onClick && typeof props.onClick === "function") {
            props.onClick();
        }
    }

    return (
        <button
            className="py-3.5 px-6 md:py-5 md:px-10 bg-secondary text-white font-bold text-base md:text-xl rounded-sm cursor-pointer shadow-md hover:opacity-50 focus:shadow-2xl border-none outline-none"
            onClick={handleClick}
        >
            {props.children || "Click me"}
        </button>
    )
}

export default ButtonWithNotification



