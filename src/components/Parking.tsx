import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";

export default function Parking() {
  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 6, px: 2 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
        Đăng ký gửi xe
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
              <b>Họ và tên:</b> Nguyen Thi Lien
            </Typography>
            <Typography>
              <b>Mã sinh viên:</b> 22BA13188
            </Typography>
            <Typography>
              <b>Ngành học:</b> Information Communication and Technology - ICT
            </Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" fontWeight={600} mb={2}>
            Biển số xe
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              label="Nhập biển số xe"
              placeholder="VD: 29A-123.45"
              fullWidth
            />
            <Button
              variant="contained"
              size="large"
              sx={{ px: 4, borderRadius: 2 }}
              startIcon={<DirectionsBikeIcon />}
            >
              Lưu
            </Button>
          </Stack>

          <Typography variant="body2" color="text.secondary" mt={2}>
            * Lưu ý: Mỗi sinh viên chỉ có thể đăng ký tối đa 1 phương tiện.
          </Typography>
        </CardContent>
      </Card>

      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="text.secondary">
          © 2025 USTH – Vietnam France University. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
