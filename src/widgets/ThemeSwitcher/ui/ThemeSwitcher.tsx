import { cn } from 'shared/lib/classNames/classNames';
import classes from './ThemeSwitcher.module.scss';
import { AppTheme, useAppTheme } from 'app/providers/ThemeProvider';
import SunIcon from 'shared/assets/icons/sun.svg';
import MoonIcon from 'shared/assets/icons/moon.svg';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

import type { PropsWithChildren } from 'react';


interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: PropsWithChildren<ThemeSwitcherProps>) => {
  const { className } = props;
  const { theme, toggleTheme } = useAppTheme();

  return (
    <div className={cn(classes.wrapper)}>
      <SunIcon width={'22px'} height={'22px'} />
      <div className={cn(classes.switcherBody, {}, [classes[theme]])}>
        <Button
          variant={ButtonVariant.CLEAR}
          className={cn(classes.switcher, {}, [className])}
          onClick={toggleTheme}
          area-label="Toggle theme"
        >
        </Button>
      </div>
      <MoonIcon width={'18px'} height={'18px'} />
    </div>

  );
}