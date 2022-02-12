import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const useStyle = makeStyles({
    balance: {
        fontSize: "1.2rem !important",
        marginBottom: "20px !important"
    }
})

const Balance = ({ transactions }) => {

    const classes = useStyle();

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);


    return (
        <Box>
            <Typography className={classes.balance}>Balance ₹{total}</Typography>
        </Box>
    )
}

export default Balance;