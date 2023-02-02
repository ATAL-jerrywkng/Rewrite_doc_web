import React, { Suspense, useCallback, useMemo } from 'react';
import classess from './styles/SummaryPageBase.module.scss';
import {
  Box, Typography, Grid
} from '@mui/material';

import { ContentButtonBar } from './ContentButtonBar';
import { RelatedTopicsBottom } from './RelatedTopicsBottom';


export const SummaryPageBase = (props) => {

  return (
    <Box className={classess.pageBox}>
      <Box className={classess.content}>
        <Grid container className={classess.contentGrid}>
          <Grid item sx={{ flex: 'auto' }}>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              {props?.title}
            </Typography>
          </Grid>
          <Grid item >
            <ContentButtonBar />
          </Grid>
        </Grid>
        <Box className={classess.contentBox}>
          {props?.children}
          <RelatedTopicsBottom />
        </Box>
      </Box>
    </Box>
  )
}
