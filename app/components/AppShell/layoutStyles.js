import { withStyles } from '@material-ui/core';

const styled = withStyles(theme => ({
    mainContent: {
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 240,
        },
    },
    drawer: {
        padding: 10,
        width: 240,
    },
    menuButton: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    layout: {
        padding: 10,
    },
}));

export default styled;