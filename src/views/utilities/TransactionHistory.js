import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'
// material-ui
import { useTheme } from '@material-ui/styles';
import { Box, Card, Grid , Table} from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import { gridSpacing } from '../../store/constant';
import { useSelector } from 'react-redux';

//===============================|| SHADOW BOX ||===============================//

const ShadowBox = ({ shadow }) => {
    const theme = useTheme();
    return (
        <Card sx={{ mb: 3, boxShadow: shadow }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.grey[800]
                }}
            >
                <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box>
            </Box>
        </Card>
    );
};

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

//============================|| UTILITIES SHADOW ||============================//

const TransactionHistory = () => {
    const account = useSelector((state) => state.account)
const date = moment(account.user.date).utc().format('YYYY-MM-DD')
    return (
        <MainCard title="Transaction History" >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <h4>Transaction history</h4>
                    <Table   >
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((item, key) => ( */}
            <tr>
              <td>{date}</td>
              <td>{account.user.investedAmount}</td>
            </tr>
          {/* ))} */}
        </tbody>
      </Table>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default TransactionHistory;
