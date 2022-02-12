import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const useStyle = makeStyles({
    container: {
        display: "flex",
        "& > *": {           //style applied to Childs of Continer i.e. Cards
            margin: 10,
            flex: 1
        }
    },
    income: {
        color: "green"
    },
    expense: {
        color: "red"
    }
})

const Expensecard = ({ transactions }) => {

    const classes = useStyle();
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <Box className={classes.container}>
            <Card>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography className={classes.income}>₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography className={classes.expense}>₹{expense}</Typography>
                </CardContent>
            </Card>
        </Box>
    )

}

export default Expensecard;