import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AddTransactionHistory from '../addTransactionHistory';
import AdminAddUsers from '../addUser';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
  Paper,
} from '@material-ui/core';
// Icons
import EditIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import DoneIcon from '@material-ui/icons/DoneAllTwoTone';
import RevertIcon from '@material-ui/icons/NotInterestedOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60,
  },
  tableCell: {
    width: 130,
    height: 40,
  },
  input: {
    width: 130,
    height: 40,
  },
}));

const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;

  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={(e) => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

const GetAllUsers = () => {
  const [rows, setRows] = useState([]);
  const [previous, setPrevious] = useState({});
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    const response = await axios.get(config.API_SERVER + 'admin/getAllUsers');
    setRows(response.data.users);
    //  console.log(response.data.users);
  };
  // console.log(rows);
  // console.log(userId);
  const updateRow = (row) => {
    const { id, email, username, investedAmount, currentAmount } = row;

    const data = {
      id: id,
      username: username,
      email: email,
      investedAmount: investedAmount,
      currentAmount: currentAmount,
      profitAndLoss: currentAmount - investedAmount,
    };

    // });
    axios
      .post(config.API_SERVER + `admin/editUser/${id}`, data)
      .then((res) => res);
  };
  const onToggleEditMode = (id) => {
    // console.log(id);
    setRows((state) => {
      return rows.map((row) => {
        updateRow(row);
        // updateRow(row.id);
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
    // updateRow(setRows())
  };

  const onToggleDelete = (row) => {
    const { id } = row;
    
    // handleClickOpen()
    axios.delete(config.API_SERVER + `admin/delete/${id}`).then((res) => {
      // console.log(res);
    });
    // setOpen(false)
  };

  const onChange = async (e, row) => {
    // console.log(row.id);
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const { value, name } = e.target;
    const { id } = row;
    // console.log(id);
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
    // const newRows = await axios.post(config.API_SERVER + `admin/editUser/${id}`).then((res) => res)
    // console.log(newRows);
  };
  const onRevert = (id) => {
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious((state) => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
    // updateRow(id)
  };

  return (
    <Paper className={classes.root}>
      <AdminAddUsers />

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Invested Amount</TableCell>
            <TableCell align="left">Current Amount</TableCell>
            <TableCell align="right">Actions</TableCell>
            {/* <TableCell align="right" /> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <CustomTableCell {...{ row, name: 'username', onChange }} />
              <CustomTableCell {...{ row, name: 'email', onChange }} />
              <CustomTableCell {...{ row, name: 'investedAmount', onChange }} />
              <CustomTableCell {...{ row, name: 'currentAmount', onChange }} />
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <RevertIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="edit"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}

                <IconButton
                  aria-label="delete"
                  // onClick={() => ConfirmDialog(row)}
                  onClick={() =>       {
                    const confirmBox = window.confirm(
                      "Are you sure"
                    )
                    if (confirmBox === true) {
                     onToggleDelete(row)
                    }
                  }}
                >
                  <DeleteIcon />
                  {/* <ConfirmDialog row={row.id} /> */}
                </IconButton>
         
                {/* <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-slide-title">
                    Delete User
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Are you sure. Do you want to delete this user?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={() => console.log(row)} autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog> */}
                
                <AddTransactionHistory row={row} />
              </TableCell>

              {/* <CustomTableCell {...{ row, name: 'protein', onChange }} /> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default GetAllUsers;
