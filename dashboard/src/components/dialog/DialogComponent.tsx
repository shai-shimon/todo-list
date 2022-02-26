import { FC, useContext, useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AppContext, ToggleAction } from '../../hooks';
import { Button } from '@mui/material';
import { add, getAll, remove } from '../../rest';
import { TodoAction } from '../../hooks/actions/todo.action';

const TodoDialog: FC = () => {

  const { toggles, setToggles, setTodoList, task } = useContext<any>(AppContext)
  const titleRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  const save = () => {
    add({ title: title, description: description, id: task.id })
      .then(() => {
        getAll().then((res: any) => {
          setTodoList({
            type: TodoAction.init,
            list: res.data
          });
        });
        close()
      })
      .catch(err => err)
  }
  const close = () => {
    setTitle('');
    setDescription('')
    setToggles({
      type: ToggleAction.dialog,
      dialog: false
    })
  }
 

  return (
    <div>
      <Dialog open={toggles.dialog} >
        <DialogTitle>Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={task?.title}
            ref={titleRef}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            maxRows={4}
            variant="standard"
            defaultValue={task?.description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={save}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export { TodoDialog }