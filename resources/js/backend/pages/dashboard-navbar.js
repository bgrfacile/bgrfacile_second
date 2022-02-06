import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
  }));

  export const DashboardNavbar = (props) => {
    const { onSidebarOpen, ...other } = props;

    return (
      <>
        <DashboardNavbarRoot
          sx={{
            left: {
              lg: 280
            },
            width: {
              lg: 'calc(100% - 280px)'
            }
          }}
          {...other}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              left: 0,
              px: 2
            }}
          >
            <IconButton
              onClick={onSidebarOpen}
              sx={{
                display: {
                  xs: 'inline-flex',
                  lg: 'none'
                }
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <Tooltip title="Search">
              <IconButton sx={{ ml: 1 }}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Contacts">
              <IconButton sx={{ ml: 1 }}>
                <UsersIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton sx={{ ml: 1 }}>
                <Badge
                  badgeContent={4}
                  color="primary"
                  variant="dot"
                >
                  <BellIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              sx={{
                height: 40,
                width: 40,
                ml: 1
              }}
              src="https://www.google.com/search?q=avatar+png&client=firefox-b-d&tbm=isch&source=iu&ictx=1&fir=cPXYODj90LFBgM%252C4h_tiyjOz-XpvM%252C_%253ByOtkbrQuOOYhTM%252CIJZuUe81vUIdsM%252C_%253BVbShd6p9FkpJ9M%252CD4-9ugiMRDT_jM%252C_%253BE-7lrOraUkFP2M%252CTeaxMJ9ruy3ZkM%252C_%253BRdHRQ2dJN7LFaM%252CvKernhaiNJ00BM%252C_%253By6f3mpDIdlXboM%252CSpcRK3s3sZaQHM%252C_%253BGruu3znkNFO40M%252CJ052TYI2rTR_AM%252C_%253B8G6fmXU0gaeaZM%252C4h_tiyjOz-XpvM%252C_%253Ba1RzgA4nFgMB8M%252CEq9shWjZMc4mPM%252C_%253BunaObTIzlO2TxM%252CWyyhyDDJ4ocpqM%252C_%253BkoR5k7ff7vqzMM%252CS2q8JsK3GxUv7M%252C_%253BWIIf8_tfUEjtZM%252CfnJwZ6Xfi5chXM%252C_%253BeQVeQDEFEiYFZM%252CIZQZ3bK5nhYV5M%252C_%253ByLmzReuAqBc5aM%252CnGCH5M-yiE1deM%252C_%253BqV2cGeJDxCgSLM%252C8FeGvsSrHs-tjM%252C_%253BbhzxrWoNgtx2YM%252CuglQnDVaECXO6M%252C_&vet=1&usg=AI4_-kQvAOJqp7aTh8WJ1T5J1Uqnk5Zdhg&sa=X&ved=2ahUKEwiCjYPMnpb0AhVJcBQKHSG4Ce8Q9QF6BAgQEAE#imgrc=a1RzgA4nFgMB8M"
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
          </Toolbar>
        </DashboardNavbarRoot>
      </>
    );
  };

  DashboardNavbar.propTypes = {
    onSidebarOpen: PropTypes.func
  };
