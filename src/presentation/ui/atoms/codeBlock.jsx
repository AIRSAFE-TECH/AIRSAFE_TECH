function CodeBlock({ code }) {
    return (
        <pre className="bg-gray-800 text-white p-3 rounded-md text-sm">
            {code}
        </pre>
    );
}

export default CodeBlock;