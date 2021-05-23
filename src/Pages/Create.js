import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    // btn: {
    //     fontSize: 20,
    //     backgroundColor: '#db5858',
    //     '&:hover': {
    //         backgroundColor: '#f44336'
    //     }
    // },
    title:{
        textDecoration: 'none',
        marginBottom:20
    }
})

const Create = () => {

    const classes = useStyles();

    return ( 
        <Container>
            <Typography 
            className={classes.title}
            variant="h6" 
            component="h2"
            color="textSecondary"
            gutterBottom
            >
            Create a New Note
            </Typography>

            <Button 
            className={classes.btn}
            variant="contained" 
            color="primary" 
            type="submit"
            endIcon={<SendIcon />}
            >Submit</Button>
            <br />
      </Container>
    );
}
 
export default Create;