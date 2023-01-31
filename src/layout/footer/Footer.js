import { Typography } from '@mui/material';
import React from 'react';
import classess from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={classess.bg}>
      <Typography variant='subtitle2' className={classess.text}>
        Copyright&copy; 2023 ATAL Engineering Group
      </Typography>
    </div>
  )
}
