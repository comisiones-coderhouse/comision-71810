function Button(props) {
    return (
        <button
            className="py-3.5 px-6 md:py-5 md:px-10 bg-blue-500 text-white font-bold text-base md:text-xl rounded-sm cursor-pointer shadow-md hover:opacity-50 focus:shadow-2xl border-none outline-none"
            onClick={props.onClick || null}
        >
            {props.children}
        </button>
    )
}

export default Button