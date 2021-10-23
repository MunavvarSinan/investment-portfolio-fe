import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
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
import AddIcon from '@material-ui/icons/AddBox';

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
  const [updateRows, setUpdateRows] = useState({
    id: '',
    username: '',
    email: '',
    investedAmount: '',
    currentAmount: '',
  });
  const [previous, setPrevious] = useState({});
  const classes = useStyles();
  useEffect(() => {
    getData();
  }, []);
  // useEffect(() => {
  //   // getData();
  //   updateRow();
  // }, []);
  const getData = async () => {
    const response = await axios.get(config.API_SERVER + 'admin/getAllUsers');
    setRows(response.data.users);
    //  console.log(response.data.users);
  };
  const userId = rows.map((user) => user.id);
  // console.log(userId);
  const updateRow = (row) => {
    const { id, email, username, investedAmount, currentAmount } = row;
    //  const response= await axios.put(config.API_SERVER + `admin/editUser/${userId}`);
    //  console.log(response);
    // row.preventDefault();
    // rows.map((row) => {
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
  const onToggleDelete = (id) => {
    axios
      .delete(config.API_SERVER + `admin/delete/${id}`)
      .then((res) => console.log(res));
  };
  const onChange = async (e, row) => {
    if (!previous[row.id]) {
      setPrevious((state) => ({ ...state, [row.id]: row }));
    }
    const { value, name } = e.target;
    const { id } = row;
    console.log(id);
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
      <IconButton
        aria-label="add"
        align="right"
        onClick={() => console.log('Add User')}
      >
        <AddIcon />
        <h5>Add User</h5>
      </IconButton>
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
                  onClick={() => onToggleDelete(row.id)}
                >
                  <DeleteIcon />
                </IconButton>
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
