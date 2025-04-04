import Section from "../molecules/Section";
import Text from "../atoms/Text";
import UserList from "../organisms/UserList";
import useUserViewModel from "../../viewmodel/user/useUserViewModel";
import Swal from "sweetalert2";

export default function UsersPage() {
    const { users, admins, loading, error } = useUserViewModel();

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleEdit = (id) => {
        Swal.fire({
            title: 'Editar usuario',
            text: `¿Estás seguro de que deseas editar el usuario con ID: ${id}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, editar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                alert(`Usuario con ID: ${id} editado.`);
            }
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Eliminar usuario',
            text: `¿Estás seguro de que deseas eliminar el usuario con ID: ${id}?`,
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                alert(`Usuario con ID: ${id} eliminado.`);
            }
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 p-10">
            <Section title="👥 Lista de Usuarios y Administradores">
                <Text
                    text="Aquí puedes ver todos los usuarios y administradores registrados en la plataforma."
                    className="mt-4 text-lg max-w-2xl mx-auto"
                />
                <UserList users={users} admins={admins} onEdit={handleEdit} onDelete={handleDelete} />
            </Section>
        </div>
    );
}