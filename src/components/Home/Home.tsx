import React from "react";
import { styled } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";
import home from "../../assets/images/home.jpg";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { getAuth } from "firebase/auth";
// import { GoogleButton } from "../SignIn";

interface Props {
  title: string;
}
//nav bar is separate component
const Root = styled("div")({
  padding: 0,
  margin: 0,
});
const Main = styled("main")({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(6, 85, 121, 1)), url(${home});`,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "absolute",
});
const MainText = styled("div")({
  textAlign: "center",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
});

export const Home = (props: Props) => {
  const navigate = useNavigate();
  const myAuth = localStorage.getItem("myAuth");

  if (myAuth == "true") {
    return (
      <Root>
        <NavBar />
        <Main>
          <MainText className="main-home">
            <Typography variant="h1">{props.title}</Typography>
            <p>Where to next?</p>
            <br />
            <br />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                {" "}
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={() => navigate("/Dashboard")}
                >
                  {" "}
                  Your Trips
                </Button>
                <p className="home-caption">Start planning your next trip</p>
              </div>

              <div>
                {" "}
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/About")}
                >
                  {" "}
                  Learn more
                </Button>
                <p className="home-caption">Learn about this project</p>
              </div>
            </Stack>

            {/* <Button
            color="secondary"
            variant="contained"
            component={Link}
            to="/dashboard"
          >
            Plan a trip
          </Button> */}
          </MainText>
        </Main>
        <div>
          <p>hello</p>
        </div>
      </Root>
    );
  } else {
    return (
      <Root>
        <NavBar />
        <Main>
          <MainText className="main-home">
            <Typography variant="h1">{props.title}</Typography>
            <p>Where to next?</p>
            <br />
            <br />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                {" "}
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/Dashboard")}
                >
                  {" "}
                  Just visiting
                </Button>
                <p className="home-caption">Plan a trip as a guest</p>
              </div>
              <div>
                {" "}
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate("/signin")}
                >
                  {" "}
                  Stay a while
                </Button>
                <p className="home-caption">Sign in to save your trips</p>
              </div>
              <div>
                {" "}
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  onClick={() => navigate("/About")}
                >
                  {" "}
                  Learn more
                </Button>
                <p className="home-caption">Learn about this project</p>
              </div>
            </Stack>
          </MainText>
        </Main>
        <div>
          <p>hello</p>
        </div>
      </Root>
    );
  }
};
