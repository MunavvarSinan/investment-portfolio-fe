import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
// material-ui
import { Table } from '@material-ui/core';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// project imports
import MainCard from '../../../../ui-component/cards/MainCard';
import { useSelector } from 'react-redux';
import config from '../../../../config';

//===============================|| SHADOW BOX ||===============================//

//============================|| UTILITIES SHADOW ||============================//

const TransactionHistory = () => {
  const account = useSelector((state) => state.account);
  const [amount, setAmount] = useState([]);
  // const { user } = account
  const id = account.user.id;
  // console.log(account.user.id);
  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    const response = await axios.get(
      config.API_SERVER + `users/getTransactionHistory/${id}`
    );
    setAmount(response.data.data);
  };
  return (
    <MainCard title="Transaction History">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amount.map((amt) => (
              <TableRow
                key={amt.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {moment(amt.date).format('DD-MM-YYYY')}
                </TableCell>
                <TableCell align="right">{amt.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
};

export default TransactionHistory;
