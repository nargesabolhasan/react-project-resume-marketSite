import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import HttpService from "../../axios/HttpService";
import { useNavigate, Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/logo/logo.png";
import Authentication from "../admin/Authentication"


const AppBars = styled("nav")(({ theme }) => ({
   background:" radial-gradient(circle, rgba(108,78,184,1) 20%, rgba(255,255,255,1) 100%)",
   //radial-gradient(circle, rgba(166,148,233,1) 13%, rgba(238,174,202,1) 76%);
}));

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    setData(await HttpService.get("whoami"));
  };
  //----------

  return (
    <AppBars position="static" sx={{ p: 3 }}>
      <Container maxWidth="xl" sx={{ m: 0, mx: "auto", width: "100%", p: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid container spacing={3}>
            <Grid
              item
              xs={2}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-aruond",
                alignItems: "center",
              }}
            >
              <IconButton
                variant="h6"
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#6c4eb8" : "black",
                    textDecoration: "none",
                  })}
                >
                  خانه
                </NavLink>
              </IconButton>
              <IconButton
                variant="h6"
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                <NavLink
                  to="/Basket"
                  style={({ isActive }) => ({
                    color: isActive ? "#6c4eb8" : "black",
                    textDecoration: "none",
                  })}
                >
                  سبد خرید
                </NavLink>
              </IconButton>

             <Authentication/>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" sx={{ fontFamily: "koodak", mx:"auto",color: "white" }}>
                فروشگاه آنلاین ایران سیب
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Link to="/">
                <img src={logo} style={{ width: "200px", float: "right" }} />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBars>
  );
};
export default ResponsiveAppBar;
