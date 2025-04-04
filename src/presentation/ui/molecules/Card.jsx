import Button from "../atoms/Button";
import Text from "../atoms/Text";

function Card({ title, description, onEdit, onDelete }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{title}</h3>
            <Text text={description} className="mt-2" />

            <div className="mt-4 flex justify-between space-x-4">
                <Button text="Editar" onClick={onEdit} color="blue" />
                <Button text="Eliminar" onClick={onDelete} color="red" />
            </div>
        </div>
    );
}

export default Card