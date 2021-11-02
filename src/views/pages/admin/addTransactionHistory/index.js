import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@material-ui/icons/AddBox';
import axios from 'axios';
import config from '../../../../config';
import { IconButton } from '@mui/material';

export default function AddTransactionHistory({ row }) {
  console.log(row.id);
  const [open, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = async () => {
    const { id, email, amount } = row;

    let data = {
      email: email,
      amount: textValue,
    };
    await axios
      .post(config.API_SERVER + `admin/addTransactionHistory/${id}`, data)
      .then((res) => {
        setOpen(false);
        // console.log(res.data);
      });
  };
  const onTextChange = async (e) => {
    // e.preventDefault();
    await setTextValue(e.target.value);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Transaction History</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the amount with increment or decrement sign
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            onChange={onTextChange}
            label="Enter Amount"
            type="amount"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
