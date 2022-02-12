import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Block } from '@mui/icons-material';


const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: 'column',
        marginBottom: "20px !important",
        '& > *': {
            marginTop: "30px !important",

        }
    },
    button: {
        backgroundColor: "#445a6f !important",
        color: "white"
    }
})


const Newtransaction = ({ addNewTransaction }) => {

    const classes = useStyle();

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const [value, setValue] = useState('income');

    const newTransaction = () => {

        const sign = value == "expense" ? "-" : "+";
        const finalamount = sign + amount;  //Math-make - to +

        const newtransaction = {
            id: Math.floor(Math.random() * 1000),
            text: text,
            amount: +finalamount
        }

        addNewTransaction(newtransaction);
    }

    const getChangedOption = (e) => {
        setValue(e.target.value);
    }

    return (
        <Box className={classes.container}>
            <Typography variant="h5">New Transaction</Typography>
            <FormControl>
                <RadioGroup className="d-block" aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group"
                    value={value}
                    onChange={getChangedOption}
                >
                    <FormControlLabel value="income" control={<Radio />} label="Income" />
                    <FormControlLabel value="expense" control={<Radio />} label="Expense" />
                </RadioGroup>
            </FormControl>
            <TextField label="Enter Text" variant="outlined" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField label="Total Amount" variant="outlined" onChange={(e) => setAmount(e.target.value)}></TextField>
            <Button className={classes.button} variant="contained" onClick={newTransaction}>Add New Transaction</Button>
        </Box >
    )
}

export default Newtransaction;