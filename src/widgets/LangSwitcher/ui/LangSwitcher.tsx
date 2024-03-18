import { cn } from 'shared/lib/classNames/classNames';
import classes from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';

import { useState, type PropsWithChildren } from 'react';
import Language from 'shared/assets/icons/lang.svg';
import Russia from 'shared/assets/icons/russia.svg';
import America from 'shared/assets/icons/america.svg'
import Spain from 'shared/assets/icons/spain.svg';
import Dots from 'shared/assets/icons/dots.svg';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { Line } from 'shared/ui/Line/Line';

interface LangSwitcherProps {
  className?: string;
  collapsed: boolean;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className, collapsed } = props;
  const { t, i18n } = useTranslation();
  const [additionalSettins, setAdditionalSettins] = useState<boolean>(false)

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  const toggleAdditionalSettins = () => {
    setAdditionalSettins(prev => !prev);
  }

  const mods = {
    [classes.collapsed]: collapsed,
    [classes.additional]: additionalSettins
  }

  return (
    <div
      className={cn(classes.langSwitcher, mods, [className])}
      onClick={toggleAdditionalSettins}>
      <div className={classes.langHeading}>
        {
          !additionalSettins &&
          <>
            <Button variant={ButtonVariant.ROUND} className={classes.langOptions}>
              <Dots />
            </Button>
            <Language className={classes.langIcon} />
            <span className={cn(classes.langTitle)}> {t('acronym')}</span>
          </>
        }
      </div>

      {
        additionalSettins &&
        <>
          <Line className={classes.line} />
          <ul className={classes.langList}>
            <li className={classes.langItem} onClick={toggleLanguage}>
              <Button
                className={classes.langItemBody}
                variant={ButtonVariant.SQUARE}
              >
                <Russia className={classes.langItemIcon} />
              </Button>
            </li>
            <li className={classes.langItem} onClick={toggleLanguage}>
              <Button
                className={classes.langItemBody}
                variant={ButtonVariant.SQUARE}>
                <America className={classes.langItemIcon} />
              </Button>
            </li>
            <li className={classes.langItem} onClick={toggleLanguage}>
              <Button
                className={classes.langItemBody}
                variant={ButtonVariant.SQUARE}>
                <Spain className={classes.langItemIcon} />
              </Button>
            </li>
          </ul>
        </>

      }
    </div>
  );
}
