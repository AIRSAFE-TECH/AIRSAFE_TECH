function Title({ text, className }) {
    return <h2 className={`text-3xl font-semibold text-gray-700 ${className}`}>{text}</h2>;
}

export default Title;