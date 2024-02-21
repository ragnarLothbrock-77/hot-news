import classes from './Navbar.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';


interface NavbarProps {
  className?: string
}

export const Nabvar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(classes.navbar, {}, [className])} >
      <div className={cn(classes.navbarLinks)}>
        <AppLink variant={AppLinkVariant.PRIMARY} to={'/about'}>About</AppLink>
        <AppLink variant={AppLinkVariant.PRIMARY} to={'/'}>Main</AppLink>
      </div>
    </div>
  )
}