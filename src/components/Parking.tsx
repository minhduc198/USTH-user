import { yupResolver } from "@hookform/resolvers/yup";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import type { InferType } from "yup";
import { licenseSchema } from "../schemas";
import { getProfile, updateDetail } from "../services";

import LicenseConfirmDialog from "../components/LicenseConfirmDialog";
import type { UpdateDetailRequest } from "../types";
import QrCodeDialog from "./QrCodeDialog";

type FormData = InferType<typeof licenseSchema>;

export default function Parking() {
  const month = new Date().getMonth() + 1;
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openQR, setOpenQR] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [openChangeConfirm, setOpenChangeConfirm] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(licenseSchema),
    defaultValues: { licenseInput: "" },
  });
  const licenseInput = useWatch({ name: "licenseInput", control });

  const { data: profileData, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });

  const { mutate: updateDetailMutation, isPending } = useMutation({
    mutationFn: (payload: UpdateDetailRequest) => updateDetail(payload),
    onSuccess: () => {
      refetch();
    },
  });

  useEffect(() => {
    if (Date.now() > Date.now() + 30 * 24 * 60 * 60 * 1000) {
      updateDetail({ expire: 0 });
    }

    return;
  }, []);

  const onSubmit = () => {
    setOpenConfirm(true);
  };

  const handleConfirm = () => {
    setOpenConfirm(false);
    setOpenQR(true);
  };

  const handlePaymentSuccess = () => {
    setSnackbar(true);

    const expire = Date.now() + 30 * 24 * 60 * 60 * 1000;

    updateDetailMutation(
      {
        license: licenseInput,
        expire,
      },
      {
        onSuccess: () => {
          setOpenQR(false);
        },
      }
    );
  };

  const handleCloseConfirmDialog = () => {
    setOpenConfirm(false);
  };

  const onSubmitChange = () => {
    setOpenChangeConfirm(true);
  };

  const handleConfirmChangeLicense = () => {
    updateDetailMutation(
      { license: licenseInput },
      {
        onSuccess: () => {
          setSnackbar(true);
          setIsEditing(false);
          setOpenChangeConfirm(false);
        },
      }
    );
  };

  const cancelChangeLicense = () => {
    setIsEditing(false);
    reset({
      licenseInput: "",
    });
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 6, px: 2 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
        Đăng ký gửi xe Tháng {month}
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        mb={4}
      >
        Quản lý và thanh toán gửi xe hàng tháng dành cho sinh viên USTH
      </Typography>

      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Thông tin sinh viên
          </Typography>

          <Stack spacing={1.5}>
            <Typography>
              <b>Họ và tên:</b> {profileData?.fullname}
            </Typography>
            <Typography>
              <b>Mã sinh viên:</b> {profileData?.username}
            </Typography>
            <Typography>
              <b>Ngành học:</b> ICT
            </Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" fontWeight={600} mb={2}>
            Biển số xe
          </Typography>

          {!profileData?.license || !profileData.expire || isEditing ? (
            <form
              onSubmit={handleSubmit(isEditing ? onSubmitChange : onSubmit)}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Controller
                  control={control}
                  name="licenseInput"
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Nhập biển số xe"
                      placeholder="VD: 29S1-371.94"
                      fullWidth
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />

                <Button
                  variant="contained"
                  size="large"
                  sx={{ px: 4, borderRadius: 2 }}
                  startIcon={<DirectionsBikeIcon />}
                  type="submit"
                >
                  Lưu
                </Button>

                {profileData?.license && (
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={cancelChangeLicense}
                  >
                    Huỷ
                  </Button>
                )}
              </Stack>
              <Typography sx={{ mt: 4 }} variant="body2" color="text.secondary">
                *Lưu ý: Mỗi học sinh chỉ đăng ký 1 biển số xe
              </Typography>
            </form>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>
                <b>Biển số xe của bạn:</b> {profileData.license}
              </Typography>

              <Button
                onClick={() => setIsEditing(true)}
                variant="contained"
                size="small"
                sx={{ px: 2, py: 1, borderRadius: 2 }}
              >
                Thay đổi
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>

      <LicenseConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirmDialog}
        onConfirm={handleConfirm}
        licenseNumber={licenseInput}
      />

      <QrCodeDialog
        isLoading={isPending}
        open={openQR}
        onClose={() => setOpenQR(false)}
        license={licenseInput}
        onSuccess={handlePaymentSuccess}
      />

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
      >
        <Alert severity="success">
          {isEditing
            ? "Thay đổi biển số xe thành công!"
            : "Đăng ký gửi xe thành công!"}
        </Alert>
      </Snackbar>

      <Dialog
        open={openChangeConfirm}
        onClose={() => setOpenChangeConfirm(false)}
      >
        <DialogTitle>Xác nhận thay đổi biển số</DialogTitle>

        <DialogContent>
          <Typography>Bạn có muốn thay đổi biển số:</Typography>

          <Typography fontWeight={600} mt={1}>
            {profileData?.license ?? ""} → {licenseInput}
          </Typography>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button
            variant="outlined"
            onClick={() => setOpenChangeConfirm(false)}
          >
            Huỷ
          </Button>

          <Button variant="contained" onClick={handleConfirmChangeLicense}>
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>

      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="text.secondary">
          © 2025 USTH – Vietnam France University. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
