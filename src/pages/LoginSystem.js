import React from 'react';
import { Typography } from '@mui/material';
import { ContentPart } from '../components/ContentPart';


import { SummaryPageBase } from '../components/SummaryPageBase';

export const LoginSystem = () => {

    const pageInfo = {
        title: '登入到系統' 
    }
    return (
        <SummaryPageBase {...pageInfo}>
            <ContentPart title={"登入到系統 "} sx={{ overflow: 'scroll' }}>
                <Typography variant='subtitle1'>「考勤/自墊費用報銷系統」主要分為兩類使用者</Typography>
                <ol>
                    <li>
                        <Typography variant='subtitle1'>已擁有公司電郵的使用者</Typography>
                    </li>
                    <li>
                        <Typography variant='subtitle1'>沒有公司電郵的使用者</Typography>
                    </li>
                </ol>
            </ContentPart>
        </SummaryPageBase>
    )
}
