import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Text from "../atoms/Text";

function SensorCard(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.newValue !== null) {
            setData((prevData) => {
                const updatedData = [...prevData, { time: new Date().toLocaleTimeString(), value: props.newValue }];
                return updatedData.slice(-10); // Mantiene solo los últimos 10 valores
            });
        }
    }, [props.newValue]);

    return (
        <div className="border rounded-lg shadow-md p-4 bg-white w-full max-w-sm">
            <Text text={props.sensorName} className="font-bold text-lg" />
            <Text text={`Valor actual: ${props.newValue}`} className="text-gray-700" />

            <div className="mt-2 h-40">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default SensorCard;