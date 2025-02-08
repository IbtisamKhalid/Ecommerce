import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Table } from "antd";
import Orders from "./Orders";

const columns = [
  { title: "SNo", dataIndex: "key", key: "key" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Product", dataIndex: "product", key: "product" },
  { title: "Status", dataIndex: "status", key: "status" },
];

const data1 = Array.from({ length: 10 }, (_, i) => ({
  key: i + 1,
  name: `Customer ${i + 1}`,
  product: `Product ${i + 1}`,
  status: i % 2 === 0 ? "Completed" : "Pending",
}));

const chartData = [
  { month: "Jan", income: 4000, expense: 2500 },
  { month: "Feb", income: 3000, expense: 1800 },
  { month: "Mar", income: 5000, expense: 3000 },
  { month: "Apr", income: 7000, expense: 5000 },
  { month: "May", income: 6000, expense: 4000 },
  { month: "Jun", income: 8000, expense: 5500 },
];

const pieData = [
  { name: "Completed Orders", value: 60 },
  { name: "Pending Orders", value: 40 },
];

const radarData = [
  { subject: "Home Appliances", A: 120, B: 110, fullMark: 150 },
  { subject: "Electronics", A: 98, B: 130, fullMark: 150 },
  { subject: "Accesories", A: 86, B: 130, fullMark: 150 },
  { subject: "Cloths", A: 99, B: 100, fullMark: 150 },
  { subject: "Used", A: 85, B: 90, fullMark: 150 },
];

const COLORS = ["#4CAF50", "#FF5722"];

const Dashboard = () => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>
        Dashboard
      </h3>

      {/* First Row: Pie & Radar Charts in One Section, Bar Chart in Another Section */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
        {/* Pie and Radar Chart Section */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* Pie Chart */}
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Order Completion Status
              </h3>
              <ResponsiveContainer width={250} height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Radar Chart */}
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                Categories Wise Performance
              </h3>
              <ResponsiveContainer width={250} height={250}>
                <RadarChart
                  data={radarData}
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="This Year"
                    dataKey="A"
                    stroke="#4CAF50"
                    fill="#4CAF50"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Last Year"
                    dataKey="B"
                    stroke="#FF5722"
                    fill="#FF5722"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* New Chart Section (Next to Pie & Radar Charts) */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Income
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#4CAF50" barSize={40} name="Income" />
              <Bar
                dataKey="expense"
                fill="#FF5722"
                barSize={40}
                name="Expense"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row: Income vs Expense */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginBottom: "32px",
        }}
      >
        <h3
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}
        >
          Income vs Expense
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="month" stroke="#888888" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#4CAF50"
              strokeWidth={2}
              name="Income"
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#FF5722"
              strokeWidth={2}
              name="Expense"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Third Row: Line and Area Charts */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
        {/* Area Chart Section */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Yearly Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#4CAF50"
                fill="#4CAF50"
                name="Income"
              />
              <Area
                type="monotone"
                dataKey="expense"
                stroke="#FF5722"
                fill="#FF5722"
                name="Expense"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders Table Section */}

      <Orders />
    </div>
  );
};

export default Dashboard;
