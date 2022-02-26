import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import { theme } from './home.theme';
import { Header, TodoDialog, MainList } from '../../components';
import { AppProvider } from '../../hooks';

export function HomePage() {
    return (
        <AppProvider>
            <ThemeProvider theme={theme}>
                <Box>
                    <CssBaseline />
                    <TodoDialog />
                    <Header />
                    <MainList />
                </Box>
            </ThemeProvider>
        </AppProvider>
    );
}
