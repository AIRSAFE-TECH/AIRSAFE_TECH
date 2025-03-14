function SensorCard(props) {
    return (
        <div className="bg-white p-[15px] w-[220px] rounded-lg shadow-md text-center">
            <h3 className="my-[10px] text-[18px] text-gray-700">{props.title}</h3>
            <p className="text-lg font-bold text-blue-500">{props.value} {props.unit}</p>
        </div>
    );
}

export default SensorCard;