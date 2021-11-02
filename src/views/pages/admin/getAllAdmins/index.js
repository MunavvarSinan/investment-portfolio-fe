import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';
import { makeStyles } from '@material-ui/styles';
import {
  Paper,
  IconButton,
  Input,
  TableRow,
  TableHead,
  Table,
  TableCell,
  TableBody,
} from '@material-ui/core';
// Icons
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

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

function AllAdmins() {
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(config.API_SERVER + 'admin/getAllAdmins');
    setRows(response.data.admins);
    // console.log(response.data.admins);
  };

  const onToggleDelete = (row) => {
    axios
      .delete(config.API_SERVER + `admin/deleteAdmin/${row.id}`)
      .then((res) => {
        // console.log(res);
      });
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
            {/* <TableCell align="right" /> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <CustomTableCell {...{ row, name: 'username' }} />
              <CustomTableCell {...{ row, name: 'email' }} />
              <TableCell className={classes.selectTableCell}>
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    const confirmBox = window.confirm('Are you sure');
                    if (confirmBox === true) {
                      onToggleDelete(row);
                    }
                  }}
                  // onClick={() => onToggleDelete(row)}
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
}

export default AllAdmins;
