import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Divider,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  Chip,
  Badge,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Grid2 } from "@mui/material"; 
import {
  AttachMoney,
  Description,
  Gavel,
  Comment,
  CheckCircle,
  Warning,
  Person,
  CalendarToday,
  Assignment,
  ThumbUp,
  ThumbDown,
  Chat,
  History,
} from "@mui/icons-material";

function UpdateDispute() {
  const { item } = useLocation().state;
  const [adminRemarks, setAdminRemarks] = useState("");
  const [remarksList, setRemarksList] = useState(item.adminRemarks || []);

  const handleAddRemark = () => {
    if (adminRemarks.trim()) {
      setRemarksList([...remarksList, adminRemarks]);
      setAdminRemarks("");
    }
  };

  return (
    <Box
      sx={{
        p: 2, // Reduced padding
        maxWidth: 1200,
        margin: "auto",
        bgcolor: "#f4f6f8",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#3f51b5",
          mb: 2, // Reduced margin
        }}
      >
        Resolve Dispute - {item.title}
      </Typography>

      <Grid2 container spacing={2}> {/* Use Grid2 with spacing */}
        <Grid2 size={{ xs: 12, md: 6 }}> {/* Use size prop */}
          <Card
            elevation={3}
            sx={{
              p: 2, // Reduced padding
              borderRadius: 2,
              bgcolor: "#ffffff",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "#3f51b5", mr: 2 }}>
                  <AttachMoney />
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#3f51b5" }}
                >
                  Escrow Details
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                Below are the details of the escrow transaction related to this dispute. Review the amount, status, and parties involved.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Amount"
                    secondary={`${item.amount} ${item.currency.toUpperCase()}`}
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Status"
                    secondary={item.status.primary}
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                  {item.status.primary === "Resolved" ? (
                    <CheckCircle sx={{ color: "green", ml: 2 }} />
                  ) : (
                    <Warning sx={{ color: "orange", ml: 2 }} />
                  )}
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Dispute Status"
                    secondary={item.disputeStatus.primary}
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                  <LinearProgress
                    variant="determinate"
                    value={item.disputeStatus.progress || 50}
                    sx={{ width: "60%", mt: 1 }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Parties Involved"
                    secondary={
                      <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                        <Chip
                          icon={<Person />}
                          label="Buyer: John Doe"
                          variant="outlined"
                        />
                        <Chip
                          icon={<Person />}
                          label="Seller: Jane Smith"
                          variant="outlined"
                        />
                      </Box>
                    }
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}> {/* Use size prop */}
          <Card
            elevation={3}
            sx={{
              p: 2, // Reduced padding
              borderRadius: 2,
              bgcolor: "#ffffff",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "#3f51b5", mr: 2 }}>
                  <Gavel />
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#3f51b5" }}
                >
                  Admin Guidelines
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                As an admin, your role is to ensure fair resolution of disputes. Follow these guidelines:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Review Contract Terms"
                    secondary="Ensure all contract terms are reviewed before resolving the dispute."
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Communicate with Parties"
                    secondary="Engage with both parties to gather all necessary information."
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Document Key Points"
                    secondary="Keep a record of all communications and decisions made."
                    slotProps={{
                      primary: { fontWeight: "medium" },
                      secondary: { color: "text.secondary" },
                    }}
                  />
                </ListItem>
              </List>
              <Box sx={{ mt: 2 }}>
                <Chip
                  icon={<CalendarToday />}
                  label={`Created: ${item.createdDate}`}
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <Chip
                  icon={<Assignment />}
                  label={`Last Updated: ${item.updatedDate}`}
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <Divider sx={{ my: 2, bgcolor: "#e0e0e0" }} /> {/* Reduced margin */}

      <Paper
        elevation={3}
        sx={{
          p: 2, // Reduced padding
          borderRadius: 2,
          bgcolor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "#3f51b5", mr: 2 }}>
            <Description />
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3f51b5" }}
          >
            Contract Details
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Review the contract clauses related to this dispute. Ensure all terms are adhered to.
        </Typography>
        <List>
          {item.contract.map((contract, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Clause ${index + 1}`}
                secondary={contract}
                slotProps={{
                  primary: { fontWeight: "medium" },
                  secondary: { color: "text.secondary" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Divider sx={{ my: 2, bgcolor: "#e0e0e0" }} /> {/* Reduced margin */}

      <Paper
        elevation={3}
        sx={{
          p: 2, // Reduced padding
          borderRadius: 2,
          bgcolor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "#3f51b5", mr: 2 }}>
            <Warning />
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3f51b5" }}
          >
            Dispute Details
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Below are the issues raised by the parties involved in this dispute.
        </Typography>
        <List>
          {item.disputeDetails.map((detail, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Issue ${index + 1}`}
                secondary={detail}
                slotProps={{
                  primary: { fontWeight: "medium" },
                  secondary: { color: "text.secondary" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Divider sx={{ my: 2, bgcolor: "#e0e0e0" }} /> {/* Reduced margin */}

      <Paper
        elevation={3}
        sx={{
          p: 2, // Reduced padding
          borderRadius: 2,
          bgcolor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "#3f51b5", mr: 2 }}>
            <Comment />
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3f51b5" }}
          >
            Admin Remarks
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Add remarks or notes to document your actions and decisions regarding this dispute.
        </Typography>
        <List>
          {remarksList.map((remark, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`Remark ${index + 1}`}
                secondary={remark}
                slotProps={{
                  primary: { fontWeight: "medium" },
                  secondary: { color: "text.secondary" },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Grid2 container spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <Grid2 size={{ xs: 9 }}> {/* Use size prop */}
            <TextField
              fullWidth
              label="Add Remark"
              variant="outlined"
              value={adminRemarks}
              onChange={(e) => setAdminRemarks(e.target.value)}
              sx={{ bgcolor: "#f9f9f9" }}
            />
          </Grid2>
          <Grid2 size={{ xs: 3 }}> {/* Use size prop */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddRemark}
              sx={{
                height: "56px",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#303f9f" },
              }}
            >
              Add
            </Button>
          </Grid2>
        </Grid2>
      </Paper>

      <Divider sx={{ my: 2, bgcolor: "#e0e0e0" }} /> {/* Reduced margin */}

      <Paper
        elevation={3}
        sx={{
          p: 2, // Reduced padding
          borderRadius: 2,
          bgcolor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Avatar sx={{ bgcolor: "#3f51b5", mr: 2 }}>
            <History />
          </Avatar>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3f51b5" }}
          >
            Dispute History
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Track the history of actions taken on this dispute.
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Dispute Raised"
              secondary="2024-01-01 10:00 AM"
              slotProps={{
                primary: { fontWeight: "medium" },
                secondary: { color: "text.secondary" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Admin Remarks Added"
              secondary="2024-01-02 02:30 PM"
              slotProps={{
                primary: { fontWeight: "medium" },
                secondary: { color: "text.secondary" },
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Dispute Resolved"
              secondary="2024-01-03 11:15 AM"
              slotProps={{
                primary: { fontWeight: "medium" },
                secondary: { color: "text.secondary" },
              }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default UpdateDispute;