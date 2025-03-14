import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ data }) => {
  return (
    <div className="mt-[30px] p-[15px] bg-white rounded-lg shadow-md">
      <h3>Temperatura en Tiempo Real</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[27, 28]} tickCount={9} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FF5733" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;