
import React from 'react'
import { useTranslation } from 'react-i18next';
import { BasePage } from '../components/BasePage'
import { COVER_TRANSLATION_PREFIX, PAGES_TRANSLATION_PREFIX } from '../utils/TranslationPrefixName';

export const Cover = () => {
  const { t } = useTranslation('pages');
  const pageInfo = {
    title: t(PAGES_TRANSLATION_PREFIX + COVER_TRANSLATION_PREFIX + "title")
  }
  return (
    <BasePage {...pageInfo}>
      Cover
    </BasePage>

  )
}
