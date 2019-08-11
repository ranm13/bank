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
        <span>
           <span className="bar-item"> Amount:  <input name="amount" type="Number" id="amount-input" value={this.state.amount} onChange={this.changeHandler}/></span>
           <span className="bar-item">Vendor:  <input name="vendor" type="text" id="vendor-input" value={this.state.vendor} onChange={this.changeHandler}/></span>
           <span className="bar-item">Category:  <input name="category" type="text" id="category-input" value={this.state.category} onChange={this.changeHandler}/></span>
            <button className="bar-item" onClick={this.deposit}>Deposit</button>
            <button className="bar-item" onClick={this.withdraw}>Withdraw</button>
        </span>)
    }
}
export default Operations