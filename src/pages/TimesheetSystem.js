import React from 'react';
import { useTranslation } from 'react-i18next';


import { SummaryPageBase } from '../components/SummaryPageBase';
import { PAGES_TRANSLATION_PREFIX, TIMESHEET_SYSTEM_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';

export const TimesheetSystem = () => {

    const { t } = useTranslation(['pages']);

    const pageInfo = {
        title: t(PAGES_TRANSLATION_PREFIX + TIMESHEET_SYSTEM_TRANSLATION_PREFIX + "title")
    }
    return (
        <SummaryPageBase {...pageInfo}>
            <div>TimesheetSystem</div>
        </SummaryPageBase>
    )
}
