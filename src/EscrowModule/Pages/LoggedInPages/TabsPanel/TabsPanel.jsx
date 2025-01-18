import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import CustomTabsPanel from "./CustomTabsPanel/CustomTabsPanel";
import EscrowDataGridComponent from "./EscrowDataGrid/EscrowDataGridComponent";

function TabsPanel({ tabsName = [], tableName, status }) {
  const [value, setValaue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValaue(newValue);
    setLoading(true);
  };

  const handleDataGridRendered = () => {
    setLoading(false);
  };

  return (
    <>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{
          mb: 3,
          borderBottom: "1px solid #ccc",
          minHeight: "unset", // Remove extra height
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#000", // Change indicator color
          },
        }}
      >
        {tabsName.map((tab, index) => (
          <Tab
            label={tab}
            key={index}
            sx={{
              padding: "6px 12px", 
              // minHeight: "unset", // Remove extra height
              color: "#555", // Default text color
              "&.Mui-selected": {
                color: "#000", // Text color when selected
              },
            }}
          />
        ))}
      </Tabs>

      {status[value] && (
        <CustomTabsPanel value={value} index={value}>
          <EscrowDataGridComponent
            tableName={tableName}
            status={status[value]}
            onRendered={handleDataGridRendered} // Passing callback for reset loading
          />
        </CustomTabsPanel>
      )}
    </>
  );
}

export default TabsPanel;
