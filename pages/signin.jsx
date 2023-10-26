import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../src/redux/actions/UserAction";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import SnackBarAlert from "../src/components/UI/SnackBarAlert";
import Copyright from "../src/components/UI/CopyRight";

function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const error = useSelector((state) => state);
  const success = useSelector((state) => state.user.success);
  const [loadingText, setLoadingText] = React.useState("Sign In");
  const [open, setOpen] = React.useState(true);
  console.log(userState, error, success);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get("username"),
      password: data.get("password"),
    };
    dispatch(signIn(user, router));
  };

  const handleLogout = () => {
    dispatch(signOut());
    router.push("/");
  };
  React.useEffect(() => {
    if (success) {
      <SnackBarAlert
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        severity="success"
        message="Login Successfully"
      />;
    }
    if (error) {
      <SnackBarAlert
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        severity="error"
        message="Oops! something went wrong!"
      />;
    }
  }, [error, success]);

  return (
    <Container component="main" maxWidth="xs">
      {/* <SnackBarAlert
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        severity="success"
        message="Login Successfully"
      /> */}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={
              <Checkbox
                value="remember"
                sx={{
                  color: "teal",
                  "&.Mui-checked": {
                    color: "teal",
                  },
                }}
              />
            }
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "teal",
              "&:hover": {
                backgroundColor: "#11acac",
              },
            }}
          >
            {loadingText}
          </Button>
          <Button fullWidth variant="contained" onClick={handleLogout}>
            Sign Out
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        {userState.isLoading && <p>Loading...</p>}
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default dynamic(() => Promise.resolve(SignIn), { ssr: false });
