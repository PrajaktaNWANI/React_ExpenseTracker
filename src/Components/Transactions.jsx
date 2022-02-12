import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import Eachtransactionprint from './Eachtransactionprint';


const useStyle = makeStyles({
    component: {
        '&> *': {
            marginBottom: "10px !important"
        }

    }
})

const Transactions = ({ transactions,deletetransaction }) => {

    const classes = useStyle();


    return (
        <Box className={classes.component}>
            <Typography variant="h5">Transactions History</Typography>
            <Divider></Divider>
            <List>
                {
                    transactions.map(transaction => {
                        return (
                            <Eachtransactionprint key={transaction.id} transaction={transaction} deletetransaction={deletetransaction} />
                        )
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions;