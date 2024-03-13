import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import classes from './Navigation.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Main from 'shared/assets/icons/main.svg';
import About from 'shared/assets/icons/about.svg';
import Profile from 'shared/assets/icons/profile.svg';
import Articles from 'shared/assets/icons/articles.svg';

interface NavigationProps {
  className?: string;
  collapsed: boolean;
}

export const Navigation = ({ className, collapsed }: NavigationProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.nav, {}, [className])} >
      <div className={cn(classes.navLinks)}>
        <AppLink
          variant={AppLinkVariant.PRIMARY}
          to={'/'}
          className={cn(classes.link, { [classes.linkShrink]: collapsed })}
        >
          <div className={classes.linkIconBody}>
            <Main className={classes.linkIcon} />
          </div>
          <span
            className={cn(classes.linkText, { [classes.collapsed]: collapsed })}
          >{t('Main')}</span>
        </AppLink>

        <AppLink
          variant={AppLinkVariant.PRIMARY}
          to={'/about'}
          className={cn(classes.link, { [classes.linkShrink]: collapsed })}
        >
          <div className={classes.linkIconBody}>
            <About className={classes.linkIcon} />
          </div>
          <span
            className={cn(classes.linkText, { [classes.collapsed]: collapsed })}
          >{t('About')}</span>
        </AppLink>

        <AppLink
          variant={AppLinkVariant.PRIMARY}
          to={'/'}
          className={cn(classes.link, { [classes.linkShrink]: collapsed })}
        >
          <div className={classes.linkIconBody}>
            <Profile className={classes.linkIcon} />
          </div>
          <span
            className={cn(classes.linkText, { [classes.collapsed]: collapsed })}
          >{t('Profile')}</span>
        </AppLink>

        <AppLink
          variant={AppLinkVariant.PRIMARY}
          to={'/'}
          className={cn(classes.link, { [classes.linkShrink]: collapsed })}
        >
          <div className={classes.linkIconBody}>
            <Articles className={classes.linkIcon} />
          </div>
          <span
            className={cn(classes.linkText, { [classes.collapsed]: collapsed })}
          >{t('Articles')}</span>
        </AppLink>
      </div>
    </div>
  )
}
