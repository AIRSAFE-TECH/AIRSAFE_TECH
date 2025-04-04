function Button({ text, className,type,onClick }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;