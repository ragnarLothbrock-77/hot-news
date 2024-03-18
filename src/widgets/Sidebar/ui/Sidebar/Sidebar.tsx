import { cn } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';

import { useState, type PropsWithChildren } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import ArrowLeft from 'shared/assets/icons/arrow-left.svg';
import ArrowRight from 'shared/assets/icons/arrow-right.svg';
import { Navigation } from 'widgets/Navigation';

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
    <div
      className={cn(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}
      data-testid='sidebar'
    >
      <Button
        className={classes.collapsedControl}
        data-testid='sidebar-toggle'
        onClick={onToggle}
        variant={ButtonVariant.ROUND}
      >
        {collapsed
          ? <ArrowRight />
          : <ArrowLeft />
        }
      </Button>
      <div className={classes.sidebarNav}>
        <Navigation collapsed={collapsed} />
      </div>
      <div className={classes.switchers}>
        <ThemeSwitcher className={classes.themes} />
        <LangSwitcher collapsed={collapsed} className={classes.language} />
      </div>
    </div>
  );
}
