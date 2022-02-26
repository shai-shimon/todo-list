import { styled } from '@mui/material/styles';
import { Toolbar } from "@mui/material";

const ToolbarTheme = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
        minHeight: 128,
    },
}));
export { ToolbarTheme }