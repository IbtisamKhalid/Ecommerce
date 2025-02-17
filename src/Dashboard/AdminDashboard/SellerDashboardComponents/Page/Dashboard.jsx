import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Table } from "antd";
import { Typography, Card } from "@mui/material";
import DisputeAdmin from "./Dispute/DisputeAdmin";



// Dispute Table Columns
const disputeColumns = [
  { title: "Dispute ID", dataIndex: "id", key: "id" },
  { title: "Buyer", dataIndex: "buyer", key: "buyer" },
  { title: "Seller", dataIndex: "seller", key: "seller" },
  { title: "Reason", dataIndex: "reason", key: "reason" },
  { title: "Status", dataIndex: "status", key: "status" },
];

// Sample Dispute Data
const disputeData = [
  { id: "D001", buyer: "User A", seller: "User X", reason: "Late Delivery", status: "Pending" },
  { id: "D002", buyer: "User B", seller: "User Y", reason: "Item Not as Described", status: "Resolved" },
  { id: "D003", buyer: "User C", seller: "User Z", reason: "Fraudulent Listing", status: "Pending" },
];

// Pie Chart Data (Dispute Stats)
const pieData = [
  { name: "Resolved Disputes", value: 30 },
  { name: "Pending Disputes", value: 20 },
];

const COLORS = ["#4CAF50", "#FF5722"];

const Dashboard = () => {
  return (
    <div style={{ padding: "16px", backgroundColor: "#f3f4f6", minHeight: "100vh" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>Admin Dashboard</Typography>

      {/* Dispute Statistics Section */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "32px" }}>
        <Card sx={{ flex: 1, p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h6" align="center" gutterBottom>Dispute Resolution Status</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card sx={{ flex: 1, p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h6" align="center" gutterBottom>Monthly Dispute Trends</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[
              { month: "Jan", resolved: 8, pending: 4 },
              { month: "Feb", resolved: 12, pending: 6 },
              { month: "Mar", resolved: 15, pending: 8 },
              { month: "Apr", resolved: 10, pending: 5 },
            ]}>
              <XAxis dataKey="month" stroke="#888888" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="resolved" fill="#4CAF50" barSize={40} name="Resolved" />
              <Bar dataKey="pending" fill="#FF5722" barSize={40} name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      

      <DisputeAdmin ongoing = {true}/>
    </div>
  );
};

export default Dashboard;
