import React from 'react';
import { Typography } from '@material-ui/core';

const ErrorPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-16">
      <div className="max-w-512 text-center">
        <Typography variant="h1" color="inherit" className="font-medium mb-16">
          OPPS!
        </Typography>
        <Typography variant="h5" color="textSecondary" className="mb-16">
          This Page is under Maintenance{' '}
        </Typography>
      </div>
    </div>
  );
};

export default ErrorPage