import Section from "../molecules/Section";
import Text from "../atoms/Text";
import UserList from "../organisms/UserList";
import useUserViewModel from "../../viewmodel/user/useUserViewModel";

export default function UsersPage() {
    const { users, admins, loading, error } = useUserViewModel();

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleEdit = (id) => {
        alert(`Editando usuario con ID: ${id}`);
    };

    const handleDelete = (id) => {
        alert(`Eliminando usuario con ID: ${id}`);
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