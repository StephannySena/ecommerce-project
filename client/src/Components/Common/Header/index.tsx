import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideBar from "../Sidebar";
import Logo from "../../../assets/img/logo.png";
import theme from "../../../Theme";

export default function Header() {
  const [openDrawner, setOpenDrawner] = useState(false);

  const AppBarCustom = styled(AppBar)({
    backgroundColor: theme.palette.primary.main,
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarCustom position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setOpenDrawner(!openDrawner)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Avatar alt="Logo" src={Logo} sx={{ width: 56, height: 56 }} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBarCustom>
      <SideBar openDrawner={openDrawner} setOpenDrawner={setOpenDrawner} />
    </Box>
  );
}
