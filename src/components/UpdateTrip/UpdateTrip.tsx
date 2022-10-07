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
import { getAuth } from "firebase/auth";


interface FormProps {
  id?: string;
  data?: {};
  name?: string;
}



export const UpdateTrip = (props: FormProps) => {

  const auth = getAuth();


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
        onClick={handleDialogClickOpen} size="small"
      >
        Update
      </Button>

      {/*Dialog Pop Up begin */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update {props.name}</DialogTitle>
        <DialogContent>
          <TripForm id = {props.id} updateData={props.data} />
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
