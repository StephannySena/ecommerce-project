import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: '#F5F5F5'
        },
        primary: {
            main: '#000000',
            light: '#363636',
            dark: '#000000'
        },
        secondary: {
            main: '#363636',
        },
        error: {
            main: '#FF0000',
        },
        warning: {
            main: '#FFA500',
        },
        info: {
            main: '#6B7D6A',
        },
        success: {
            main: '#00FF7F',
        },
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
        },
    },
}));

export default theme;