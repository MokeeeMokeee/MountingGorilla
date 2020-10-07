import React, { useEffect } from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkContent = styled.div`
  display: flex;
  flex-direction: row;
  /* > button {
    margin-left: 1rem;
  } */
`;

const CustomLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width 0.5s;
  }
  &:hover {
    ::after {
      width: 100%;
    }
  }
`;

const CustomLinkSP = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #000;
  display: inline-block;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.5s;
  }
  &:hover {
    ::after {
      width: 100%;
    }
  }
`;

const LinkText = styled.p``;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      backgroundColor: '#81c784',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'block',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    console.log(
      console.log(
        '\n' +
          '%c     GGGGGGGGGGGGG                                       iiii  lllllll lllllll\n' +
          '%c     GGG::::::::::::G                                      i::::i l:::::l l:::::l\n' +
          '%c   GG:::::::::::::::G                                       iiii  l:::::l l:::::l\n' +
          '%c  G:::::GGGGGGGG::::G                                             l:::::l l:::::l\n' +
          '%c G:::::G       GGGGGG   ooooooooooo   rrrrr   rrrrrrrrr   iiiiiii  l::::l  l::::l   aaaaaaaaaaaaa\n' +
          '%cG:::::G               oo:::::::::::oo r::::rrr:::::::::r  i:::::i  l::::l  l::::l   a::::::::::::a\n' +
          '%c G:::::G              o:::::::::::::::or:::::::::::::::::r  i::::i  l::::l  l::::l   aaaaaaaaa:::::a\n' +
          '%c G:::::G    GGGGGGGGGGo:::::ooooo:::::orr::::::rrrrr::::::r i::::i  l::::l  l::::l            a::::a\n' +
          '%cG:::::G    G::::::::Go::::o     o::::o r:::::r     r:::::r i::::i  l::::l  l::::l     aaaaaaa:::::a\n' +
          '%cG:::::G    GGGGG::::Go::::o     o::::o r:::::r     rrrrrrr i::::i  l::::l  l::::l   aa::::::::::::a\n' +
          '%cG:::::G        G::::Go::::o     o::::o r:::::r             i::::i  l::::l  l::::l  a::::aaaa::::::a\n' +
          '%c G:::::G       G::::Go::::o     o::::o r:::::r             i::::i  l::::l  l::::l a::::a    a:::::a\n' +
          '%c  G:::::GGGGGGGG::::Go:::::ooooo:::::o r:::::r            i::::::il::::::ll::::::la::::a    a:::::a\n' +
          '%c   GG:::::::::::::::Go:::::::::::::::o r:::::r            i::::::il::::::ll::::::la:::::aaaa::::::a\n' +
          '%c    GGG::::::GGG:::G oo:::::::::::oo  r:::::r            i::::::il::::::ll::::::l a::::::::::aa:::a\n' +
          '%c       GGGGGG   GGGG   ooooooooooo    rrrrrrr            iiiiiiiillllllllllllllll  aaaaaaaaaa  aaaa\n' +
          '\n' +
          ' %cGorilla！\n',
        'font-size: 16px; color: #7f00ff;',
        'font-size: 16px; color: #bb00ff;',
        'font-size: 16px; color: #f700ff;',
        'font-size: 16px; color: #ff00cb;',
        'font-size: 16px; color: #ff008f;',
        'font-size: 16px; color: #ff0017;',
        'font-size: 16px; color: #ff2300;',
        'font-size: 16px; color: #ff5f00;',
        'font-size: 16px; color: #ff9b00;',
        'font-size: 16px; color: #ffd600;',

        'font-size: 16px; color: #7f00ff;',
        'font-size: 16px; color: #bb00ff;',
        'font-size: 16px; color: #f700ff;',
        'font-size: 16px; color: #ff00cb;',
        'font-size: 16px; color: #ff008f;',
        'font-size: 16px; color: #ff0017;',
        'font-size: 16px; color: #ff2300;'
      )
    );
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <CustomLinkSP to='/mounting'>
          <LinkText>ナイスマウント</LinkText>
        </CustomLinkSP>
      </MenuItem>
      <MenuItem>
        <CustomLinkSP to='/not-mounting'>
          <LinkText>ノーマウント</LinkText>
        </CustomLinkSP>
      </MenuItem>
      <MenuItem>
        <CustomLinkSP to='/post-mounting'>
          <LinkText>マウントする</LinkText>
        </CustomLinkSP>
      </MenuItem>

      {/* <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position='fixed' className={classes.bar}>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            <HomeLink to='/'>マウンティングゴリラ</HomeLink>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* ここにRightのやつを入れる */}
            <LinkContent>
              <CustomLink to='/mounting'>
                <LinkText>ナイスマウント</LinkText>
              </CustomLink>
              <CustomLink to='/not-mounting'>
                <LinkText>ノーマウント</LinkText>
              </CustomLink>
              <CustomLink to='/post-mounting'>
                <LinkText>マウントする</LinkText>
              </CustomLink>
            </LinkContent>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
