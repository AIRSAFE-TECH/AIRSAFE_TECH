import { motion, AnimatePresence } from "framer-motion";
import FormLogin from "../molecules/FormLogin";
import FormRegister from "../molecules/FormRegister";

function AuthContainer({ isRegister, setIsRegister }) {
    const toggleForm = () => setIsRegister(!isRegister);

    return (
        <div className="space-y-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
                {isRegister ? (
                    <motion.div
                        key="register"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <FormRegister />
                    </motion.div>
                ) : (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <FormLogin />
                    </motion.div>
                )}
            </AnimatePresence>

            <p className="text-sm text-center text-[#52738c]">
                {isRegister ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}
                <button
                    type="button"
                    onClick={toggleForm}
                    className="ml-1 text-[#266bb4] font-semibold hover:underline"
                >
                    {isRegister ? "Iniciar Sesión" : "Registrarse"}
                </button>
            </p>
        </div>
    );
}

export default AuthContainer;