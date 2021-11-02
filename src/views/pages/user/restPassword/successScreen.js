import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import AuthWrapper1 from '../../AuthWrapper1';
import AuthCardWrapper from '../../AuthCardWrapper';
import Logo from '../../../../ui-component/Logo';



const ResetPswdSent = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: 'calc(100vh - 68px)' }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ mb: 3 }}>
                    <RouterLink to="#">
                      <Logo />
                    </RouterLink>
                  </Grid>
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
                            variant="heading"
                            fontSize="16px"
                            textAlign={matchDownSM ? 'center' : ''}
                          >
                            Recovery Email has sent to your mail
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      component={RouterLink}
                      to="/users/login"
                      variant="subtitle1"
                      fontSize="12px"
                      textAlign={matchDownSM ? 'center' : ''}
                      sx={{ textDecoration: 'none' }}
                    >Go to login page</Typography>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default ResetPswdSent;
