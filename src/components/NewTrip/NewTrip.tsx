import React, { useState } from "react";

import {
  Button,
  Dialog, // new item
  DialogActions, // new item
  DialogContent, // new item
  DialogContentText, // new item
  DialogTitle, // new item
} from "@mui/material";
import { TripForm } from "../TripForm";
import { useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";

interface Props {
  color: "primary" | "secondary",
  variant: "outlined" | "contained", 
  text: string, 
}

export const NewTrip = (props: Props) => {
  // const auth = getAuth();
  //   if (auth) {
  //     console.log("user logged in at Newtrip");
  //   }
      const navigate = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClickClose = () => {
    setDialogOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        color={props.color}
        onClick={() => {handleDialogClickOpen(); navigate("/Dashboard")}}
        size="large"
      >
        {props.text}
      </Button>

      {/*Dialog Pop Up begin */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add your next trip!</DialogTitle>
        <DialogContent>
          <TripForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClickClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
