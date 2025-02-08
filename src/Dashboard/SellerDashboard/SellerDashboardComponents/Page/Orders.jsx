import { useState } from "react";
import { Table, Tag, Card, Avatar } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Order ID",
    dataIndex: "key",
    render: (text) => `#ORD-${text}`,
  },
  {
    title: "Customer",
    dataIndex: "customer",
    render: (customer) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar src={customer.avatar} />
        <span>{customer.name}</span>
      </div>
    ),
  },
  {
    title: "Product",
    dataIndex: "product",
    render: (product) => (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar shape="square" size={50} src={product.image} />
        <span>{product.name}</span>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price) => `$${Number(price).toFixed(2)}`,
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => {
      let color = "default";
      let icon = null;
      if (status === "Delivered") {
        color = "green";
        icon = <CheckCircleOutlined />;
      } else if (status === "Pending") {
        color = "gold";
        icon = <ClockCircleOutlined />;
      } else if (status === "Cancelled") {
        color = "red";
        icon = <CloseCircleOutlined />;
      }
      return <Tag color={color} icon={icon}>{status}</Tag>;
    },
  },
];

const sampleProducts = [
  {
    name: "Smartphone",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Laptop",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Headphones",
    image: "https://via.placeholder.com/50",
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    customer: {
      name: `User ${i}`,
      avatar: `https://i.pravatar.cc/50?img=${i}`,
    },
    product: sampleProducts[i % sampleProducts.length],
    price: (Math.random() * 100 + 20).toFixed(2),
    status: ["Delivered", "Pending", "Cancelled"][i % 3],
  });
}

const Orders = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3 className="mb-4" style={{ fontSize: "24px", fontWeight: "bold" }}>Orders</h3>
      <Card style={{ borderRadius: "10px", padding: "15px", boxShadow: "0px 2px 10px rgba(0,0,0,0.1)" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          responsive
          bordered
        />
      </Card>
    </div>
  );
};

export default Orders;








{/* <Box display="flex" alignItems="center">
            <Tooltip title="Account settings">
              <IconButton onClick={handleMenuOpen} size="small" sx={{ mr: 5 }}>
                <Avatar
                  alt={user?.name}
                  src={user?.profilePicture || ""}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "primary.main",
                    color: "white",
                  }}
                >
                  {!user?.profilePicture && user?.name?.charAt(0).toUpperCase() || "I"}
                </Avatar>
              </IconButton>
            </Tooltip>
            <MuiMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem sx={{ p: "1rem 1.5rem" }}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "primary.main",
                      color: "white",
                    }}
                  >
                    {!user?.profilePicture &&
                      user?.name?.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography>{user?.email || "Ibtisam Khalid"} </Typography>
                </Box>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/loggedin/profilesetting"
                sx={{ color: "#0088FF", fontWeight: "600" }}
              >
                <Settings fontSize="small" /> Settings
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                sx={{ color: "#0088FF", fontWeight: "600" }}
              >
                <PersonAdd fontSize="small" /> Add another account
              </MenuItem>
              <MenuItem
                component={Link}
                to="/SignIn"
                sx={{ color: "#0088FF", fontWeight: "600" }}
              >
                <Logout fontSize="small" /> Logout
              </MenuItem>
            </MuiMenu>
          </Box> */}