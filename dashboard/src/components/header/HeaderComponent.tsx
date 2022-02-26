import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BsViewList } from 'react-icons/bs';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FC, useContext } from 'react';
import { Icon } from '@mui/material';
import { ToolbarTheme } from './header.style';
import { AppContext, TodoAction } from '../../hooks';
import { ToggleAction } from '../../hooks/actions/toggle.action';

const Header: FC = () => {
    const { setToggles, setTask } = useContext<any>(AppContext)

    const handleDialog = () => {
        setTask({
            type: TodoAction.get,
            task: { title: '', description: '' }
        })
        setToggles({
            type: ToggleAction.dialog,
            dialog: true
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <ToolbarTheme>
                    <Icon
                        sx={{ mr: 2 }}
                    >
                        <BsViewList />
                    </Icon>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
                    >
                        Todo List for Wobi
                    </Typography>
                    <IconButton size="large" aria-label="search" color="inherit" onClick={handleDialog}>
                        <AiOutlineAppstoreAdd />
                    </IconButton>
                </ToolbarTheme>
            </AppBar>
        </Box>
    );
}
export { Header }