import {
  Card,
  CardContent,
  Typography,
  TextField,
  Chip,
  Grid,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services";

export default function ProfilePage() {
  const { data: profileData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });

  const formattedDate =
    profileData?.expire && profileData.expire !== 0
      ? new Date(profileData.expire).toLocaleDateString("vi-VN")
      : "No register";

  const profile = {
    username: "Nguyen Minh Duc",
    studentId: "20211234",
    licensePlate: "59A-123.45",
    expire: "2026-12-31",
    paymentStatus: "Active", // Active | Pending | Expired
  };

  const getPaymentStatus = (expire?: number) => {
    if (!expire || expire === 0) {
      return { label: "Unactive", color: "error" as const };
    }

    const now = Date.now();

    if (now <= expire) {
      return { label: "Active", color: "success" as const };
    }

    return { label: "Unactive", color: "error" as const };
  };

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>

        <Grid container spacing={2}>
          <Grid size={12}>
            <TextField
              label="User Name"
              value={profileData?.fullname ?? ""}
              fullWidth
              disabled
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="Student ID"
              value={profileData?.username ?? ""}
              fullWidth
              disabled
            />
          </Grid>

          <Grid size={12}>
            <TextField
              label="License Plate"
              value={profileData?.license ?? ""}
              fullWidth
              disabled
            />
          </Grid>

          <Grid size={6}>
            <TextField
              label="Expire Date"
              value={profileData?.expire === 0 ? "No register" : formattedDate}
              fullWidth
              disabled
            />
          </Grid>

          <Grid
            size={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="body2" gutterBottom>
              Payment Status
            </Typography>
            <Chip
              label={getPaymentStatus(profileData?.expire).label}
              color={getPaymentStatus(profileData?.expire).color}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
