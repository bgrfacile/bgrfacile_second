import { useEffect } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { ViewGrid as ViewGridIcon } from '../icons/view-grid';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from '../components/logo';
import { NavItem } from '../components/nav-item';
import { theme } from '../theme/index';
import { Etudiant as EtudiantIcon } from '../icons/etudiant';
import { Professor as ProfessorIcon } from '../icons/professor';
import { UserScholl as UserSchollIcon } from '../icons/user-scholl';
import { Setting as SettingIcon } from '../icons/setting';
import { BookOpen as BookOpenIcon } from '../icons/book';


const itemsDashboard = [
    {
        href: '/dashboard',
        icon: (<ViewGridIcon fontSize="small" />),
        title: 'Dashboard'
    },

];
const itemsUsers = [
    {
        href: '/dashboard/users',
        icon: (<UserIcon fontSize="small" />),
        title: 'Users'
    },
    {
        href: '/dashboard/users/student',
        icon: (<EtudiantIcon fontSize="small" />),
        title: 'étudiants'
    },
    {
        href: '/dashboard/users/professor',
        icon: (<ProfessorIcon fontSize="small" />),
        title: 'Professeurs'
    },
    {
        href: '/dashboard/users/user-scholl',
        icon: (<UserSchollIcon fontSize="small" />),
        title: 'Promoteurs'
    },
/*     {
        href: '/dashboard/users/preference',
        icon: (<SettingIcon fontSize="small" />),
        title: 'Preférence User'
    }, */
];
const itemsCours = [
    {
        href: route('cours.index'),
        icon: (<BookOpenIcon fontSize="small" />),
        title: 'Cours'
    },
/*     {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Cours On-line'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Cours Off-line'
    }, */
    {
        href: route("preference.cours"),
        icon: (<SettingIcon fontSize="small" />),
        title: 'Preférences-Cours'
    },
];
const itemsExercices = [
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'All Exos'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Exos Online'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Exos Offline'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Preférence Exo'
    },
];
const itemsFormations = [
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'All Formations'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Formations Online'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Formations Offline'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Preférence Formations'
    },
];
const itemsEcoles = [
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'All Ecoles en ligne'
    },
    {
        href: '/dashboard/user/all',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Preférence Ecoles en ligne'
    },
];
const itemsParametres = [
    {
        href: '/dashboard/parametres',
        icon: (<ChartBarIcon fontSize="small" />),
        title: 'Paramètre système'
    },
];

export const DashboardSidebar = (props) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });


    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}>

                <div>
                    <Box sx={{ p: 3 }}>
                        <InertiaLink href="/">
                            <Logo sx={{ height: 42, width: 42 }} />
                        </InertiaLink>
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 3,
                                py: '11px',
                                borderRadius: 1
                            }}
                        >
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="subtitle1">
                                    Name User
                                </Typography>
                                <Typography
                                    color="neutral.400"
                                    variant="body2"
                                >
                                    Status
                                    {' '}
                                    : Admin
                                </Typography>
                            </div>
                            <SelectorIcon
                                sx={{
                                    color: 'neutral.500',
                                    width: 14,
                                    height: 14
                                }}
                            />
                        </Box>
                    </Box>
                </div>

                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {itemsDashboard.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>

                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />

                <Box sx={{ flexGrow: 1,width:"100%" }}>
                    {itemsUsers.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>

                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />

                <Box sx={{ flexGrow: 1 }}>
                    {itemsCours.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>
                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />

                <Box sx={{ flexGrow: 1 }}>
                    {itemsExercices.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>

                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />

                <Box sx={{ flexGrow: 1 }}>
                    {itemsFormations.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>
                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />

                <Box sx={{ flexGrow: 1 }}>
                    {itemsEcoles.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>
                <Divider sx={{
                    borderColor: '#2D3748',
                    my: 3
                }} />

                <Box sx={{ flexGrow: 1 }}>
                    {itemsParametres.map((item) => (
                        <NavItem
                            key={item.title}
                            icon={item.icon}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>

            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
};

DashboardSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
