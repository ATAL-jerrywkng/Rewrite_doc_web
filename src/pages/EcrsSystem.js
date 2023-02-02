import React from 'react';
import { useTranslation } from 'react-i18next';


import { SummaryPageBase } from '../components/SummaryPageBase';
import { ECRS_SYSTEM_TRANSLATION_PREFIX, PAGES_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';

export const EcrsSystem = () => {

    const { t } = useTranslation(['pages']);

    const pageInfo = {
        title: t(PAGES_TRANSLATION_PREFIX + ECRS_SYSTEM_TRANSLATION_PREFIX + "title")
    }
    return (
        <SummaryPageBase {...pageInfo}>
        </SummaryPageBase>
    )
}
