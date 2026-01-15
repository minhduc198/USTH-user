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
      <DialogTitle>Xác nhận biển số xe</DialogTitle>

      <DialogContent>
        <Typography>
          Bạn có chắc muốn đăng ký biển số:
          <b> {licenseNumber} </b> ?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Huỷ
        </Button>

        <Button variant="contained" onClick={onConfirm}>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
}
