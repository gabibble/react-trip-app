import React, { useState } from "react";
import firebase from "firebase/app";
import { useSigninCheck } from "reactfire";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  Container,
  Button,
  Typography,
  Snackbar,
  Alert as MUIAlert,
  AlertProps,
  AlertTitle,
  CircularProgress,
  Stack,
  Box,
  styled,
} from "@mui/material";
// import * as firebase2 from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../sharedComponents/Input";
import { NavBar } from "../NavBar";
import { useForm } from "react-hook-form";
import GoogleIcon from "@mui/icons-material/Google";

const signinStyles = {
  googleLogo: {
    width: "48px",
    height: "48px",
    display: "block",
  },
  typographyStyle: {
    fontSize: "2em",
  },
  containerStyle: {
    marginTop: "6em",
  },
  snackBar: {
    color: "white",
    backgroundColor: "#4caf50",
  },
};

const NavA = styled(Link)({
  display: "block",
  color: "#065579",
  marginBottom: "20px",
  marginTop: "10px",
  textDecoration: "none",
});

// Functional components to be used inside of SignIn Component
const Alert = (props: AlertProps) => {
  return <MUIAlert elevation={6} variant="filled" />;
};

interface buttonProps {
  open?: boolean;
  onClick?: () => void;
}

// Functional component to conditionally render Google SignIn Button
export const GoogleButton = (props: buttonProps) => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  // auth.setPersistence(firebase2.auth.Auth.Persistence.SESSION);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("token", user.uid);
    }
  });

  // const [token, setToken] = useState

  const signIn = async () => {
    await signInWithGoogle();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("myAuth", "true");
        localStorage.setItem("token", user.uid);
      }
    });

    navigate("/dashboard");
    window.location.reload();
  };

  const signUsOut = async () => {
    await signOut(auth);
    localStorage.setItem("myAuth", "false");
    localStorage.setItem("token", "testing123");
    navigate("/");
  };

  if (loading) {
    return <CircularProgress />;
  }
  if (auth.currentUser) {
    return (
      <Button variant="contained" color="info" onClick={signUsOut}>
        Sign Out
      </Button>
    );
  } else {
    return (
      <Button variant="contained" color="secondary" onClick={signIn}>
        <GoogleIcon></GoogleIcon> Sign in with Google
      </Button>
    );
  }
};

interface userProps {
  email?: any;
  password?: any;
}

export const SignIn = (props: userProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});
  const auth = getAuth();
  const handleSnackOpen = () => {
    setOpen(true);
  };
  const handleSnackClose = () => {
    setOpen(false);
    navigate("/dashboard");
  };

  const onSubmit = async (data: any, event: any) => {
    console.log(data.email, data.password);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        localStorage.setItem("myAuth", "true");
        onAuthStateChanged(auth, (user) => {
          if (user) {
            localStorage.setItem("token", user.uid);
          }
        });
        const user = userCredential.user;
        //Once signed in we navigate to dashboard
        navigate("/dashboard");
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="sm" sx={signinStyles.containerStyle}>
        <Typography sx={signinStyles.typographyStyle}>Sign In Below</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            label="email"
            name="email"
            type="text"
          />
          <Input
            {...register("password")}
            label="password"
            name="password"
            placeholder="place password here"
            type="password"
          />
          <Box mt={2}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
              <GoogleButton open={open} onClick={handleSnackClose} />
            </Stack>
            <NavA to="/signup">Don't have an account? Register now!</NavA>
          </Box>
        </form>

        <Snackbar message="Success" open={open} autoHideDuration={3000}>
          <Alert severity="success">
            <AlertTitle>
              Successful Sign In --- Redirect in 3 seconds
            </AlertTitle>
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export const SignUp = (props: userProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({});
  const auth = getAuth();
  const handleSnackOpen = () => {
    setOpen(true);
  };
  const handleSnackClose = () => {
    setOpen(false);
    navigate("/dashboard");
  };

  const onSubmit = async (data: any, event: any) => {
    console.log(data.email, data.password);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        //Once signed in we navigate to dashboard
        navigate("/signIn");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="sm" sx={signinStyles.containerStyle}>
        <Typography sx={signinStyles.typographyStyle}>
          Sign Up To Start Using TripUp
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("email")}
            label="email"
            name="email"
            placeholder="email"
            type="text"
          />

          <Input
            {...register("password")}
            label="password"
            name="password"
            placeholder="password"
            type="password"
          />
          <Typography variant="caption">
            Password must be 6 characters{" "}
          </Typography>
          <Box mt={2}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
              <GoogleButton open={open} onClick={handleSnackClose} />
            </Stack>
          </Box>
        </form>

        <Snackbar message="Success" open={open} autoHideDuration={3000}>
          <Alert severity="success">
            <AlertTitle>
              Successful Sign In --- Redirect in 3 seconds
            </AlertTitle>
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};
