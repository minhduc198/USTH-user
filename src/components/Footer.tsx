import { Box, Typography } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#f2f6fc', display: 'flex', justifyContent: 'space-between', pt: '30px', px: '20px', mt: '100px' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Box sx={{ width: '180px', height: '180px' }}>
            <img src="/public/icons/icon-header.svg" alt="" />
          </Box>
          <Typography sx={{ maxWidth: '320px', color: '#273896', fontSize: '24px', fontWeight: 700, pl: '30px', borderLeft: '2px solid red ' }}>
            TRƯỜNG ĐẠI HỌC <br /> KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <LocationPinIcon sx={{ color: '#273896' }} />
            <Typography>Toà A21, Viện Hàn Lâm Khoa học và Công nghệ Việt Nam, 18 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <EmailIcon sx={{ color: '#273896' }} />
            <Typography>officeusth@usth.edu.vn</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <CallIcon sx={{ color: '#273896' }} />
            <Typography>+84-24 31 91 69 60</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>Liên kết nhanh</Typography>
          <Typography>Trang chủ</Typography>
          <Typography>Phản hồi - Đóng góp ý kiến</Typography>
          <Typography>Hỏi - Đáp</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>Cài ứng dụng</Typography>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            sx={{
              width: 160,
              height: 48,
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: 1,
              backgroundColor: '#fff',
              display: 'block',
            }}
          />

          <Box
            component="img"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Google Play"
            sx={{
              width: 160,
              height: 48,
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: 1,
              backgroundColor: '#fff',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
