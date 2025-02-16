import React, { useState } from "react";
import { Tabs, Table, Tag, Modal, Button, Descriptions, Typography } from "antd";
import { Box, Card } from "@mui/material";
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;
const { Text } = Typography;

// Sample Data
const disputeData = [
  {
    id: "1737915",
    title: "My Disputee",
    subtitle: "Domain Name",
    status: { primary: "Awaiting Agreement", secondary: "Requires Seller's Action" },
    disputeStatus: { primary: "Being Resolved" },
    agreed: true,
    amount: "100",
    currency: "pkr",
    created: "17379158899",
    dispute: true,
    disputeDetails: [
      "The issue arose because he did not send me the right product.",
      "The product was damaged during shipping.",
    ],
    contract: ["hehehhehe", "heheheh"],
    role: "Buyer",
    step: 3,
    timeBounded: false,
    sellerID: "1111737915",
    buyerID: "2221737915",
    adminRemarks: [],
  },
  {
    id: "1737916",
    title: "Broken Laptop",
    subtitle: "Electronics",
    status: { primary: "Awaiting Agreement", secondary: "Requires Buyer's Action" },
    disputeStatus: { primary: "Being Resolved" },
    agreed: false,
    amount: "500",
    currency: "usd",
    created: "17379158900",
    dispute: true,
    disputeDetails: [
      "The laptop screen was broken upon delivery.",
      "The seller refused to acknowledge the damage.",
    ],
    contract: ["terms1", "terms2"],
    role: "Seller",
    step: 2,
    timeBounded: true,
    sellerID: "1111737916",
    buyerID: "2221737916",
    adminRemarks: [],
  },
  {
    id: "1737917",
    title: "Fake Watch",
    subtitle: "Accessories",
    status: { primary: "Resolved", secondary: "Agreement Reached" },
    disputeStatus: { primary: "Resolved" },
    agreed: true,
    amount: "200",
    currency: "eur",
    created: "17379158901",
    dispute: true,
    disputeDetails: [
      "The watch was counterfeit.",
      "The seller agreed to a refund.",
    ],
    contract: ["terms3", "terms4"],
    role: "Buyer",
    step: 4,
    timeBounded: false,
    sellerID: "1111737917",
    buyerID: "2221737917",
    adminRemarks: ["Refund processed successfully."],
  },
  {
    id: "1737918",
    title: "Damaged Shoes",
    subtitle: "Footwear",
    status: { primary: "Closed", secondary: "Dispute Closed" },
    disputeStatus: { primary: "Closed" },
    agreed: true,
    amount: "50",
    currency: "gbp",
    created: "17379158902",
    dispute: true,
    disputeDetails: [
      "The shoes were damaged during shipping.",
      "The seller provided a replacement.",
    ],
    contract: ["terms5", "terms6"],
    role: "Buyer",
    step: 5,
    timeBounded: true,
    sellerID: "1111737918",
    buyerID: "2221737918",
    adminRemarks: ["Replacement shipped successfully."],
  },
];

const DisputeAdmin = () => {
  const navigate = useNavigate();
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Columns for the Table
  const columns = [
    {
      title: "Dispute ID",
      dataIndex: "id",
      key: "id",
      render: (text) => `#DIS-${text}`,
      responsive: ["sm"], // Show on small screens and above
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["xs"], // Always show title
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status.primary === "Awaiting Agreement"
              ? "gold"
              : status.primary === "Being Resolved"
              ? "blue"
              : "green"
          }
        >
          {status.primary}
        </Tag>
      ),
      responsive: ["sm"], // Show on small screens and above
    },
    {
      title: "Dispute Status",
      dataIndex: "disputeStatus",
      key: "disputeStatus",
      render: (disputeStatus) => (
        <Tag color={disputeStatus.primary === "Being Resolved" ? "blue" : "green"}>
          {disputeStatus.primary}
        </Tag>
      ),
      responsive: ["sm"], // Show on small screens and above
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount, record) => `${amount} ${record.currency}`,
      responsive: ["sm"], // Show on small screens and above
    },
  ];

  // Handle Row Click
  const handleRowClick = (record) => {
    setSelectedDispute(record);
    setIsModalVisible(true);
  };

  // Handle Modal Close
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedDispute(null);
  };

  // Handle Give Remarks
  const handleGiveRemarks = () => {
    navigate("/Admindashboard/updatedispute", { state: { item: selectedDispute } });
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Card sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}>
        <Tabs defaultActiveKey="1" tabPosition="top" centered>
          <TabPane tab="All Disputes" key="1">
            <Table
              columns={columns}
              dataSource={disputeData}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }} // Enable horizontal scrolling for small screens
            />
          </TabPane>
          <TabPane tab="Ongoing Disputes" key="2">
            <Table
              columns={columns}
              dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Being Resolved")}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
          <TabPane tab="Completed Disputes" key="3">
            <Table
              columns={columns}
              dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Resolved")}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
          <TabPane tab="Closed Disputes" key="4">
            <Table
              columns={columns}
              dataSource={disputeData.filter((d) => d.disputeStatus.primary === "Closed")}
              onRow={(record) => ({
                onClick: () => handleRowClick(record),
              })}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
        </Tabs>
      </Card>

      {/* Dispute Details Modal */}
      <Modal
        title={`Dispute Details - #DIS-${selectedDispute?.id}`}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={window.innerWidth < 768 ? "90%" : 800} // Adjust modal width for smaller screens
      >
        {selectedDispute && (
          <Box>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Title">
                <Text strong>{selectedDispute.title}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Subtitle">
                <Text>{selectedDispute.subtitle}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={selectedDispute.status.primary === "Awaiting Agreement" ? "gold" : "blue"}>
                  {selectedDispute.status.primary}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Dispute Status">
                <Tag color={selectedDispute.disputeStatus.primary === "Being Resolved" ? "blue" : "green"}>
                  {selectedDispute.disputeStatus.primary}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <Text strong>
                  {selectedDispute.amount} {selectedDispute.currency}
                </Text>
              </Descriptions.Item>
              <Descriptions.Item label="Created">
                <Text>{selectedDispute.created}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Dispute Details">
                <ul>
                  {selectedDispute.disputeDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </Descriptions.Item>
              <Descriptions.Item label="Contract">
                <ul>
                  {selectedDispute.contract.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Descriptions.Item>
              <Descriptions.Item label="Role">
                <Text>{selectedDispute.role}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Step">
                <Text>{selectedDispute.step}</Text>
              </Descriptions.Item>
              <Descriptions.Item label="Time Bounded">
                <Text>{selectedDispute.timeBounded ? "Yes" : "No"}</Text>
              </Descriptions.Item>
            </Descriptions>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
              <Button type="primary" onClick={handleGiveRemarks}>
                Give Remarks
              </Button>
            </Box>
          </Box>
        )}
      </Modal>
    </Box>
  );
};

export default DisputeAdmin;