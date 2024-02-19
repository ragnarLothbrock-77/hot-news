import classes from './Navbar.module.scss';
import { cn } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';


interface NavbarProps {
  className?: string
}

export const Nabvar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(classes.navbar, {}, [className])} >
      <div className={cn(classes.navbarLinks)}>
        <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>About</AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>Main</AppLink>
      </div>
    </div>
  )
}