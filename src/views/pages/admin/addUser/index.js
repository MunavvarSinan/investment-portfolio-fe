import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/AddBox';
import {
  IconButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import AdminUserRestRegister from './restRgister';

const AdminAddUsers = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="add" align="right" onClick={handleClickOpen}>
        <AddIcon />
        <h5>Add User</h5>
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add User </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>

          <AdminUserRestRegister setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAddUsers;
