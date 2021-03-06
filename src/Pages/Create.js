import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    btn: {
        fontSize: 16,
        color: 'white',
        background:'linear-gradient(45deg, #48BF92  30%, #A9FBA3  90%)',
        '&:hover': {
            boxShadow: '0 3px 5px 2px #A9FBA3',
        },
    },
    title:{
        textDecoration: 'none',
        marginBottom:20,
        marginTop: 30,
        color: '#A9FBA3'
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        color: 'white',
    },
    radio: {
        '&$checked': {
          color: '#4B8DF8'
        }
    },
})

const Create = () => {

    const classes = useStyles();
    const history = useHistory();

    const [title,setTitle] = useState('');
    const [details,setDetails] = useState('');
    const [titleError,setTitleError] = useState(false);
    const [detailError,setDetailError] = useState(false);
    const [category,setCategory] = useState('money');

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitleError(false);
        setDetailError(false);

        if(title && details){
            console.log(title,details)
        }

        if(title == ''){
            setTitleError(true);
        }

        
        if(details == ''){
            setDetailError(true);
        }

        if(title && details){
            fetch('http://localhost:8000/notes',{
                method: 'POST',
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({title, details, category})
            }).then(()=>{
                history.push('/')
            })
        }

    }

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

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note Title" 
                    variant="outlined"
                    fullWidth 
                    required
                    error={ titleError }
                    InputProps={{
                        className: classes.input,
                    }}
                />

                <TextField 
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details" 
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth 
                    required
                    error={ detailError }
                    InputProps={{
                        className: classes.input,
                    }}
                />

            <FormControl class={classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <FormControlLabel control={<Radio color="" />} label="Money" value="money" />
                    <FormControlLabel control={<Radio color="#A9FBA3"/>} label="Todos" value="todos" />
                    <FormControlLabel control={<Radio color="#A9FBA3"/>} label="Reminders" value="reminders" />
                    <FormControlLabel control={<Radio color="#A9FBA3"/>} label="Work" value="work" />
                </RadioGroup>
            </FormControl>

            <Button 
            className={classes.btn}
            variant="contained" 
            type="submit"
            endIcon={<SendIcon />}
            >Submit</Button>
            </form>


            <br />
      </Container>
    );
}
 
export default Create;