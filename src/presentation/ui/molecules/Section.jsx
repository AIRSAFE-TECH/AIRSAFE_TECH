import Title from "../atoms/Title";

function Section({ title, children }) {
    return (
        <section className="bg-white p-6 rounded-lg shadow-md text-center mb-10">
            <Title text={title} />
            {children}
        </section>
    );
}

export default Section;