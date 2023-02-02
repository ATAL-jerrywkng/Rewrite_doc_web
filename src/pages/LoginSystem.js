import React from 'react';
import { useTranslation } from 'react-i18next';


import { SummaryPageBase } from '../components/SummaryPageBase';
import { LOGIN_SYSTEM_TRANSLATION_PREFIX, PAGES_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';

export const LoginSystem = () => {

    const { t } = useTranslation(['pages']);

    const pageInfo = {
        title: t(PAGES_TRANSLATION_PREFIX + LOGIN_SYSTEM_TRANSLATION_PREFIX + "title")
    }
    return (
        <SummaryPageBase {...pageInfo}>
            <div>LoginSystem</div>
        </SummaryPageBase>
    )
}
