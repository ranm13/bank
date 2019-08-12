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
      transactions: [],
      balance: 0
    }
  }

  checkBalance = (data) => {
    let balance = 0
    for(let i of data){
      balance += i.amount
    }
    return balance
  }

  updateState = (data) => {
    let balance = this.checkBalance(data)
    this.setState({ transactions: data, balance})
  }

  pushTransaction = async(transaction) => {
    const response = await axios.post("http://localhost:1991/transaction", transaction, function(){})
    this.updateState(response.data)
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:1991/transactions", function(){})
    this.updateState(response.data)
  }

  render(){
    return (
      <div className="App">
        <header>
          <img src={logo} alt="Bank Hashualim logo" id ="logo" width="150px"></img>
          <h1 id="headline">Bank Hashualim</h1>
        </header>
       <div id="balance">Balance: 
        <span style={{color: this.state.balance > 1000 ? "green": "red"}}>{this.state.balance}
        </span>
       </div>
         <Operations pushTransaction={this.pushTransaction} balance={this.state.balance}/> 
        {this.state.transactions? <Transactions transactions={this.state.transactions} /> : null}
      </div>
    );
  }
}


export default App;
