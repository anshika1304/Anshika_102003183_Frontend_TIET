import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import MoreVertIcon from "@mui/icons-material/MoreVert";

const data = [
    { day: "Mon", Total: 78 },
    { day: "Tue", Total: 47 },
    { day: "Wed", Total: 35 },
    { day: "Thu", Total: 50 },
    { day: "Fri", Total: 39 },
    { day: "Sat", Total: 20 }
  ];
  
  const BarChart1 = () => {
    return (
      <div className="bar">
        <div className="top">
            <h1 className="title">Visitors</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" className='grid'/>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

export default BarChart1;