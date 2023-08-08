import { createTheme, responsiveFontSizes } from '@mui/material';

const themeObject = { 

}

export const useThemeMode = () => {

    const theme = responsiveFontSizes( createTheme( themeObject ) );

    return [ theme ] as const;
}