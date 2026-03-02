import { Box } from "@mui/material";
import { useState } from "react";
import Profile from "./Profile";
import { useLocation, useNavigate } from "react-router";
import { pathConfig } from "../router/path";

const headerMenu = ["Home", "News", "Q&A", "Instructions", "ERP"];
const headerTab = [
  "study",
  "project",
  "form",
  "scholarship",
  "rewards",
  "free",
  "parking",
];

export default function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const getTab = pathName.replace("/", "");

  const [activeMenu, setActiveMenu] = useState<string>("Home");
  const navigate = useNavigate();
  const handleChangeMenu = (
    menu: "Home" | "News" | "Q&A" | "Instructions" | "ERP",
  ) => {
    setActiveMenu(menu);
  };

  const goToParking = (tab: string) => {
    if (tab === "parking") {
      navigate(pathConfig.parking);
    }
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#273896",
          width: "100%",
          height: "80px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          {headerMenu.map((menu) => (
            <Box
              onClick={() =>
                handleChangeMenu(
                  menu as "Home" | "News" | "Q&A" | "Instructions" | "ERP",
                )
              }
              key={menu}
              sx={{
                fontSize: "20px",
                color: `${activeMenu === menu ? "red" : "white"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": { color: "red" },
              }}
            >
              {menu}
            </Box>
          ))}
          <Profile />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "100px",
          justifyContent: "end",
          alignItems: "center",
          px: "100px",
          borderBottom: "1px solid rgb(0,0,0, 0.2)",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: -40, left: 100 }}>
          <img src="/icons/icon-header.svg" alt="" />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {headerTab.map((tab) => (
            <Box
              key={tab}
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                color: `${tab === getTab ? "red" : "black"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": { color: "red" },
                textTransform: "capitalize",
              }}
              onClick={() => goToParking(tab)}
            >
              {tab}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
