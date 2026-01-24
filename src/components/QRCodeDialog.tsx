import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import QRCode from "react-qr-code";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  license: string;
  onSuccess: () => void;
  isLoading: boolean;
}

export default function QrCodeDialog({
  open,
  onClose,
  license,
  onSuccess,
  isLoading,
}: Props) {
  const momoPhone = "0912345678";
  const amount = 50000;

  const momoURL = `https://momo.vn/api/msg/?phone=${momoPhone}&amount=${amount}&comment=BIENSO_${license}`;

  const handlePayment = async () => {
    onSuccess();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <Box sx={{ p: 3 }}>
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "1.25rem",
            pb: 1,
          }}
        >
          MoMo payment
        </DialogTitle>

        <DialogContent sx={{ textAlign: "center", px: 2 }}>
          <Box
            sx={{
              display: "inline-block",
              p: 2,
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              backgroundColor: "#fff",
            }}
          >
            <QRCode value={momoURL} size={210} />
          </Box>

          <Typography mt={2} color="text.secondary" fontSize="0.9rem">
            Scan the MoMo QR code to pay the license plate registration fee.
          </Typography>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: 2,
              py: 1.3,
              fontWeight: 600,
              fontSize: "0.95rem",
              backgroundColor: "#A50064",
              "&:hover": { backgroundColor: "#8e0053" },
            }}
            onClick={handlePayment}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={22} color="inherit" />
            ) : (
              "Successfully paid"
            )}
          </Button>

          <Button
            fullWidth
            sx={{ mt: 1, color: "text.secondary" }}
            onClick={onClose}
          >
            Cancel
          </Button>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
