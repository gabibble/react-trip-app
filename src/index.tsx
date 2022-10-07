import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Dashboard, About, SignIn, SignUp } from "./components"
import reportWebVitals from './reportWebVitals';
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./Theme/themes";
import { ThemeProvider } from "@mui/material/styles";
//DATA CONNECT
import { Provider } from "react-redux";
import { store } from "./redux/store";
// //AUTHENTICATION
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth'
import { firebaseConfig } from './firebaseConfig';
import { getAuth } from "firebase/auth";

  const myAuth = localStorage.getItem("myAuth");

  let greeting = "Plan your next trip";

  // if (myAuth == "true") {
  //   greeting = "Plan your next trip";
  // } else {
  //   greeting = "See Where Everyone's Going";
  // }

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path="/" element={<Home title={"TripUp"} />} />
              <Route path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/dashboard"
                element={<Dashboard title={greeting} />}
              />
              {/* <Route path="/signin" element={<SignIn />} /> */}
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

reportWebVitals();
