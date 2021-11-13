import PropTypes from 'prop-types';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { Box, Button, ListItem } from '@mui/material';

export const NavItem = (props) => {
  const { href, icon, title, ...others } = props;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <InertiaLink
        href={href}>
        <Button
          component="button"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: false && 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: false ? 'secondary.main' : 'neutral.300',
            fontWeight: false && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: false ? 'secondary.main' : 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </InertiaLink>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
