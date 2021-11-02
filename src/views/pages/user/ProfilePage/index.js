import React from 'react';
import MainCard from '../../../../ui-component/cards/MainCard';
import { Grid, useMediaQuery, Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import { useTheme } from '@material-ui/core';
import RestForm from './restForm';

const ProfilePage = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard title="Profile Page">
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        // sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            // sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    direction={matchDownSM ? 'column-reverse' : 'row'}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign={matchDownSM ? 'center' : ''}
                        >
                          Change Password
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <RestForm />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ProfilePage;
