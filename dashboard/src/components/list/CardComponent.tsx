import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ITodo } from '../../interfaces';
import IconButton from '@mui/material/IconButton';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { get, remove, getAll } from '../../rest';
import { useContext } from 'react';
import { AppContext, TodoAction, ToggleAction } from '../../hooks';


const CardTask = ({ id, title, description, created }: ITodo) => {
  const { setTask, setToggles, setTodoList } = useContext<any>(AppContext)

  const edit = () => {
    get(id!)
      .then((res: any) => {
        setTask({
          type: TodoAction.get,
          task: res.data
        })
        setToggles({
          type: ToggleAction.dialog,
          dialog: true
        })
      })
  }
  const _remove = () => {
    remove(id!).then(() => {
      getAll().then((res: any) => {
        setTodoList({
          type: TodoAction.init,
          list: res.data
        });
      });
    })
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          {description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {created}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="search" color="inherit" >
          <AiOutlineEdit onClick={edit} />
        </IconButton>
        <IconButton aria-label="search" color="inherit" >
          <AiOutlineDelete onClick={_remove} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export { CardTask }