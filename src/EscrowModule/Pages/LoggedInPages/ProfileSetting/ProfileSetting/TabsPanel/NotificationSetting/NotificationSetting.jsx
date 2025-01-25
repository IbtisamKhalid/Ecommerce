import {
  Box,
  Typography,
  FormControlLabel,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  styled,
  Switch,
} from "@mui/material";
import useNotificationSetting from "./hooks/useNotificationSetting";

// Android12Switch styled component
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export function NotificationSetting() {
 

  const {
      transactionEvent,
      setTransactionEvent,
      accountEvent,
      setAccountEvent,
      milestoneEvent,
      setMilestoneEvent,
      marketingEmails,
      setMarketingEmails,
      transactionSMS,
      setTransactionSMS,
      dialogOpen,
      handleToggle,
      handleSaveChanges,
      handleCloseDialog,

  } = useNotificationSetting ()

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#fff",
        // maxWidth: 600,
        // margin: "auto",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Notification Settings
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {/* Transaction Event */}
        <FormControlLabel
          control={
            <Android12Switch
              checked={transactionEvent}
              onChange={(e) => handleToggle(e, setTransactionEvent)}
            />
          }
          label="Transaction Event Notifications"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent:"revert",
            alignItems: "center",
            textAlign: "left",
            width: "100%",
          }}
        />

        {/* Account Event */}
        <FormControlLabel
          control={
            <Android12Switch
              checked={accountEvent}
              onChange={(e) => handleToggle(e, setAccountEvent)}
            />
          }
          label="Account Event Notifications"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
            width: "100%",
          }}
        />

        {/* Milestone Event */}
        <FormControlLabel
          control={
            <Android12Switch
              checked={milestoneEvent}
              onChange={(e) => handleToggle(e, setMilestoneEvent)}
            />
          }
          label="Milestone Event Notifications"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
            width: "100%",
          }}
        />

        {/* Marketing Emails */}
        <FormControlLabel
          control={
            <Android12Switch
              checked={marketingEmails}
              onChange={(e) => handleToggle(e, setMarketingEmails)}
            />
          }
          label="Marketing Emails"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
            width: "100%",
          }}
        />

        {/* Transaction SMS */}
        <FormControlLabel
          label="Transaction SMS Notifications"
          control={
            <Android12Switch
              checked={transactionSMS}
              onChange={(e) => handleToggle(e, setTransactionSMS)}
            />
          }
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
            width: "100%",
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="success"
        onClick={handleSaveChanges}
        sx={{
          width: "100%",
          py: 1,
          fontSize: "16px",
          borderRadius: "4px",
          mt: 2,
        }}
      >
        Save Changes
      </Button>

      {/* Dialog for save confirmation */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogContent sx={{ bgcolor: "white", p: 3 }}>
          <Typography variant="h6">Settings Saved</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Your notification settings have been successfully updated.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NotificationSetting;
