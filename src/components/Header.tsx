import { Box } from '@mui/material';
import { useState } from 'react';

const headerMenu = ['Home', 'News', 'Q&A', 'Instructions', 'ERP'];
const headerTab = ['Study', 'Project', 'Form', 'Scholarship', 'Rewards', 'Free', 'Parking'];

export default function Header() {
  // const location = useLocation();
  // const pathName = location.pathname;
  const [activeMenu, setActiveMenu] = useState<string>('Home');
  const handleChangeMenu = (menu: 'Home' | 'News' | 'Q&A' | 'Instructions' | 'ERP') => {
    setActiveMenu(menu);
  };

  return (
    <>
      <Box sx={{ bgcolor: '#273896', width: '100%', height: '80px', display: 'flex', justifyContent: 'end', alignItems: 'center', padding: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {headerMenu.map(menu => (
            <Box
              onClick={() => handleChangeMenu(menu as 'Home' | 'News' | 'Q&A' | 'Instructions' | 'ERP')}
              key={menu}
              sx={{
                fontSize: '20px',
                color: `${activeMenu === menu ? 'red' : 'white'}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': { color: 'red' },
              }}>
              {menu}
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          height: '100px',
          justifyContent: 'end',
          alignItems: 'center',
          px: '100px',
          borderBottom: '1px solid rgb(0,0,0, 0.2)',
          position: 'relative',
        }}>
        <Box sx={{ position: 'absolute', top: -40, left: 100 }}>
          <img src="/public/icons/icon-header.svg" alt="" />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {headerTab.map(tab => (
            <Box
              key={tab}
              sx={{
                fontSize: '20px',
                fontWeight: 500,
                color: `${tab === 'Parking' ? 'red' : 'black'}`,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': { color: 'red' },
              }}>
              {tab}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
