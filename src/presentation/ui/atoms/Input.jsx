function Input({ type, name, value, onChange, placeholder }) {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-[#a2bee1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#266bb4]"
            required
        />
    );
}

export default Input;