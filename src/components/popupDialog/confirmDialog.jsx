import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "../index";

function ConfirmDialog({ openDialog, handleClose, deletedCards, refreshData }) {
  return (
    <Dialog
      open={openDialog}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Confirm to refresh</DialogTitle>
      <DialogContent dividers>
        <DialogContentText
          id="scroll-dialog-description"
          // ref={descriptionElementRef}
          tabIndex={-1}
        >
          They have a {deletedCards.length} pending queues
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button
          onClick={() => {
            refreshData()
            handleClose()
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
