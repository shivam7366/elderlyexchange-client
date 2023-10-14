import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Container,
  Avatar,
  Button,
  Link,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
// import AdbIcon from "@mui/icons-material/Adb";
import { useSelector, useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { signOut } from "../../redux/actions/UserAction";

const drawerWidth = 240;

function Navigation() {
  const userState = useSelector((state) => state.user);
  // console.log(userState);

  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  const pages = [
    {
      name: "All Experiences",
      link: "/",
    },
    {
      name: "Create Experience",
      link: "/experience/create",
    },
  ];
  const settings = [
    {
      name: "Profile",
    },
    {
      name: "Logout",
    },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let container;
  if (typeof window !== "undefined") {
    container = window.document.body;
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" fontFamily="monospace" sx={{ my: 2 }}>
        ElderlyExchange
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <Link
            href={item.link}
            color="inherit"
            underline="none"
            key={item.name}
          >
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#008080;",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ElderlyExchange
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    backgroundColor: "#e7f8f8",
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ElderlyExchange
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Link
                  href={page.link}
                  color="inherit"
                  underline="none"
                  key={index}
                >
                  <Button
                    key={index}
                    onClick={handleDrawerToggle}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {userState.isAuthenticated ? (
                <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                  <Avatar alt="Shivam" src="/static/images/avatar/2.jpg" />
                </IconButton>
              ) : (
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    fontWeight: 700,

                    "&:hover": {
                      backgroundColor: "white",
                      borderColor: "#008080",
                      color: "#008080",
                    },
                  }}
                  onClick={() => router.push("/signin")}
                >
                  Sign In
                </Button>
              )}

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.name}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default dynamic(() => Promise.resolve(Navigation), {
  ssr: false,
});

// export default Navigation;
