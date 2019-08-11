import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import Operations from './components/Operations';
import axios from 'axios'
import logo from './logo.png'

class App extends Component {
  constructor(){
    super()
    this.state = {
      transactions: []  
    }
  }

  checkBalance = () => {
    let balance = 0
    for(let i of this.state.transactions){
      balance += i.amount
    }
    return balance
  }

  pushTransaction = async(transaction) => {
    const response = await axios.post("http://localhost:1991/transaction", transaction, function(){})
    this.setState({ transactions: response.data })
  }

  async getTransactions() {
    return axios.get("http://localhost:1991/transactions", function(){})
  }

  async componentDidMount() {
    const response = await this.getTransactions()
    this.setState({ transactions: response.data })
  }

  render(){
    let transactions = this.state.transactions||""
    // let isDeposit = Math.sign(transaction.amount) === 1 ? true: false
    // let style ={}
    // isDeposit? style.color = "green": style.color = "red"
    return (
      <div className="App">
        <header>
          <img src={logo} alt="Bank Hashualim logo" id ="logo" width="200px"></img>
          <h1 id="headline">Bank Hashualim</h1>
        </header>
        <div id="balance">Balance: {transactions? this.checkBalance(): null}</div>
         <Operations pushTransaction={this.pushTransaction}/>
        {transactions? <Transactions transactions={transactions} /> : null}
      </div>
    );
  }
}


export default App;
