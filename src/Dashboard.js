import React from'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
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


function Dashboard(props){
    const classes= useStyles();
    const topics= Object.keys(props.messages)
    const [textValue,changeTextvalue]= React.useState('')
    const [activeTopic,changeActiveTopic]= React.useState(topics[0])
    return (
        <div >
            <Paper className={classes.root} elevation={3} >
                <Typography variant='h4' component='h4'>
                    Chat
                </Typography>
                <Typography variant='h5' component='h5'>
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicWindow}>
                        <List>
                            {
                                topics.map(topic =>
                                    (<ListItem onClick={e  => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic}/>
                                    </ListItem>)
                                    )
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            props.messages[activeTopic].map((chat,i) =>
                                (<div className={classes.flex}>
                                    <Chip
                                    label={chat.user}
                                    />
                                    <Typography variant="body1" gutterBottom>
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
                            color="primary"
                            onClick={ ()=>props.sendChatAction(textValue) }>
                                Send
                        </Button>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps= state => {
    return {
        messages:state
    }
}

const mapDispatchToProps= dispatch => {
    return {
        sendmessage: (from,msg,topic)=>{
            dispatch({type:'RECEIVE_MESSAGE', payload:{ from,msg,topic }})        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)