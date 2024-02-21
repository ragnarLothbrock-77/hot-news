import { cn } from 'shared/lib/classNames/classNames';
import classes from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

import type { PropsWithChildren } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className } = props;
  const { t, i18n } = useTranslation()
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={cn(classes.langSwitcher, {}, [className])}
      variant={ButtonVariant.CLEAR}
      onClick={toggleLanguage}>
      {t('Language')}
    </Button>
  );
}