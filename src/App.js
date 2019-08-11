import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import Operations from './components/Operations';

class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ]  
    }
  }

  checkBalance = () => {
    let balance = 0
    for(let i of this.state.transactions){
      balance += i.amount
    }
    return balance
  }

  pushTransaction = (transaction) => {
    let updatedTransactions =[...this.state.transactions]
    updatedTransactions.push(transaction)
    this.setState({
      transactions: updatedTransactions
    })
  }

  render(){
    let transactions = this.state.transactions
    return (
      <div className="App">
        <div id="balance">Balance: {this.checkBalance()}</div>
        <Transactions transactions={transactions} />
        <Operations pushTransaction={this.pushTransaction}/>
      </div>
    );
  }
}


export default App;
