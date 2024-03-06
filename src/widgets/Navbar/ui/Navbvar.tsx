import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string
}

export const Nabvar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.navbar, {}, [className])} >
      <div className={cn(classes.navbarLinks)}>
        <AppLink variant={AppLinkVariant.PRIMARY} to={'/about'}>{t('About')}</AppLink>
        <AppLink variant={AppLinkVariant.PRIMARY} to={'/'}>{t('Main')}</AppLink>
      </div>
    </div>
  )
}
