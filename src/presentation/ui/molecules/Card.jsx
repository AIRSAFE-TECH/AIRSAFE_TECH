import Button from "../atoms/Button";
import Text from "../atoms/Text";

function Card({ title, description, onEdit, onDelete }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <Text text={description} className="mt-2 text-gray-600" />

            <div className="mt-6 flex justify-center gap-2">
                <Button text="Editar" onClick={onEdit} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition" />
                <Button text="Eliminar" onClick={onDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition" />
            </div>
        </div>
    );
}

export default Card;
