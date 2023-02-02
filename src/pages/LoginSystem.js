import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContentPart } from '../components/ContentPart';


import { SummaryPageBase } from '../components/SummaryPageBase';
import { LOGIN_SYSTEM_TRANSLATION_PREFIX, PAGES_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';

export const LoginSystem = () => {

    const { t } = useTranslation('pages');

    const pageInfo = {
        title: t(PAGES_TRANSLATION_PREFIX + LOGIN_SYSTEM_TRANSLATION_PREFIX + "title")
    }
    return (
        <SummaryPageBase {...pageInfo}>
            <ContentPart title={"登入到系統 "}>
                <Typography variant='subtitle1'>「考勤/自墊費用報銷系統」主要分為兩類使用者.</Typography>
                <ol>
                    <li>
                        <Typography variant='subtitle1'>已擁有公司電郵的使用者;</Typography>
                    </li>
                    <li>
                        <Typography variant='subtitle1'>沒有公司電郵的使用者;</Typography>
                    </li>
                </ol>
            </ContentPart>
        </SummaryPageBase>
    )
}
