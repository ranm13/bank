import React, {Component} from 'react'

class Operations extends Component {
    constructor(){
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: ""
        }
    }

    deposit = () => {
        let newTransaction = {...this.state}
        console.log(newTransaction)
        this.props.pushTransaction(newTransaction)
    }

    withdraw = () => {
        let newTransaction = {...this.state}
        newTransaction.amount = -newTransaction.amount 
        console.log(newTransaction)
        this.props.pushTransaction(newTransaction)
    }

    changeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
           
        })
    }

    render() {
        return (
        <div>
            <div>Amount:  <input name="amount" type="Number" id="amount-input" value={this.state.amount} onChange={this.changeHandler}/></div>
            <div>Vendor:  <input name="vendor" type="text" id="vendor-input" value={this.state.vendor} onChange={this.changeHandler}/></div>
            <div>Category:  <input name="category" type="text" id="category-input" value={this.state.category} onChange={this.changeHandler}/></div>
            <button onClick={this.deposit}>Deposit</button>
            <button onClick={this.withdraw}>Withdraw</button>
        </div>)
    }
}
export default Operations