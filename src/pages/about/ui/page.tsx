import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation('about');

  return <div>{t('О сайте')}</div>;
}
