import FormRegister from "../molecules/FormRegister";

export function RegisterPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Agregar usuario</h2>
                <FormRegister />
            </div>
        </div>
    );
}

export default RegisterPage;
