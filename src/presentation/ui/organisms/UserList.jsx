import Card from "../molecules/Card";
import Text from "../atoms/Text";

export default function UserList({ users = [], admins = [], onEdit, onDelete }) {
    return (
        <div className="space-y-6">
            <section>
                <Text text="👥 Usuarios" className="text-xl font-semibold" />
                {users.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <Card
                                key={user.id}
                                title={user.usuario}
                                description={user.email}
                                onEdit={() => onEdit(user.id)}
                                onDelete={() => onDelete(user.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No hay usuarios registrados.</p>
                )}
            </section>

            <section>
                <Text text="🛠️ Administradores" className="text-xl font-semibold" />
                {admins.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {admins.map((admin) => (
                            <Card
                                key={admin.id}
                                title={admin.usuario}
                                onEdit={() => onEdit(admin.id)}
                                onDelete={() => onDelete(admin.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No hay administradores registrados.</p>
                )}
            </section>
        </div>
    );
}