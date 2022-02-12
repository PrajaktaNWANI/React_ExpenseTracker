import { useState } from 'react';

import './App.css';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/styles';
import Box from '@mui/material/Box';

import Balance from './Components/Balance';
import Expensecard from './Components/Expensecard';
import Newtransaction from './Components/Newtransaction';
import Transactions from './Components/Transactions';

const useStyle = makeStyles({
  header: {
    color: "blue !important",
    fontSize: "2rem !important",
    margin: "10px !important",
    textTransform: "uppercase !important"
  },
  component: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    width: "90vw !important",
  }
})

function App() {

  const classes = useStyle();

  const [transactions, setTransaction] = useState([
    /*{ id: 1, text: "Salary", amount: 3000 },
    { id: 2, text: "Rent", amount: -500 },
    { id: 3, text: "Bonous", amount: 1500 },
    { id: 4, text: "Book", amount: -100 },*/
  ])

  const deletetransaction = (id) => {
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  }

  const addNewTransaction = (newtransaction) => {
    setTransaction(transactions => [newtransaction, ...transactions]);
  }

  return (
    <div className="App">
      <Typography className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <Balance transactions={transactions} />
              <Expensecard transactions={transactions} />
              <Newtransaction addNewTransaction={addNewTransaction} />
            </div>
            <div className="col-md-6 col-12">
              <Transactions transactions={transactions} deletetransaction={deletetransaction} />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default App;
