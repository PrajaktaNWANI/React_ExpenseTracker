import { ListItemIcon, ListItemText } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyle = makeStyles({
    list: {
        marginTop: "10px !important",
        border: "1px solid #f6f6f6",
    }

})

const Eachtransactionprint = ({ transaction,deletetransaction }) => {

    const classes = useStyle();

    const color = transaction.amount >= 0 ? "coral" : "cornflowerblue";
    const sign = transaction.amount >= 0 ? "₹" : "-₹";
    const amount = sign + Math.abs(transaction.amount);  //Math-make - to +

    return (
        <ListItem className={classes.list} sx={{ backgroundColor: `${color}` }}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deletetransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText primary={transaction.text}></ListItemText>
            <ListItemText primary={amount}></ListItemText>
        </ListItem>
    )
}
export default Eachtransactionprint;