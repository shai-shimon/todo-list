import { Box, Grid } from '@mui/material';
import { FC, useContext } from 'react';
import { AppContext } from '../../hooks';
import { CardTask } from './CardComponent';
import { boxStyle } from './list.theme';
import { ITodo } from '../../interfaces';
const MainList: FC = () => {
    const { todoList } = useContext(AppContext);
    return (
        <Box
            component="main"
            sx={boxStyle}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {todoList?.map((task: ITodo) => (
                        <Grid item xs={4} sm={2} md={2} key={task.id}>
                            <CardTask id={task.id} title={task.title} description={task.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}
export { MainList }