import React from'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2),
      },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox:{
        width: '85%'
    },
    chatButton:{
        width: '15%'
    }
  }));


export default function Dashboard(){
    const classes= useStyles();
    const [textValue,changeTextvalue]= React.useState('')
    return (
        <div >
            <Paper className={classes.root} elevation={3} >
                <Typography variant='h4' component='h4'>
                    Chat App 
                </Typography>
                <Typography variant='h5' component='h5'>
                    Topic placeholder
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicWindow}>
                        <List>
                            {
                                ['topic'].map(topic =>
                                    (<ListItem key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>)
                                    )
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{from:'User',msg:'hello'}].map((chat,i) =>
                                (<div className={classes.flex}>
                                    <Chip
                                    avatar={<Avatar>{chat.from.split('')[0]}</Avatar>}
                                    label={chat.from}
                                    />
                                    <Typography variant="p">
                                        {chat.msg}
                                    </Typography>
                                </div>
                                ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                        <TextField
                            className={classes.chatBox}
                            label="Send a chat"
                            value={textValue}
                            onChange={e => changeTextvalue(e.target.value)}
                        />
                        <Button 
                            variant="contained"
                            className={classes.chatButton} 
                            color="primary">
                                Primary
                        </Button>
                </div>
            </Paper>
        </div>
    )
}