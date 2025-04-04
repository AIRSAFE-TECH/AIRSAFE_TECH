import Swal from "sweetalert2";

export const mostrarAlertaExito = (titulo, texto, tiempo = 2000) => {
    Swal.fire({
        icon: "success",
        title: titulo,
        text: texto,
        timer: tiempo,
        showConfirmButton: false,
    });
};

export const mostrarAlertaError = (titulo, texto) => {
    Swal.fire({
        icon: "error",
        title: titulo,
        text: texto,
    });
};
