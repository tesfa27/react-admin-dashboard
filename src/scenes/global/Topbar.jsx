import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutltinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutltinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutltinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutltinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutltinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutltinedIcon />
          ) : (
            <LightModeOutltinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutltinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutltinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutltinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
