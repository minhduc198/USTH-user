import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  licenseNumber: string;
}

export default function LicenseConfirmDialog({
  open,
  onClose,
  onConfirm,
  licenseNumber,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Confirm your license plate</DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to register the license plate:
          <b> {licenseNumber} </b> ?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>

        <Button variant="contained" onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
