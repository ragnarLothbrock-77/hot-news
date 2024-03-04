import { cn } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';

import { useState, type PropsWithChildren } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={cn(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <Button
        onClick={onToggle}
        variant={ButtonVariant.CLEAR}>
        {'Toggle'}
      </Button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={classes.language} />
      </div>
    </div>
  );
}
