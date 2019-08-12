import React, {Component} from 'react'

class Operations extends Component {
    constructor(){
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: "",
            cannotCompleteWithdraw: false
        }
    }

    deposit = () => {
        let newTransaction = {...this.state}
        this.props.pushTransaction(newTransaction)
        if(this.state.cannotCompleteWithdraw){
            this.setState({
                cannotCompleteWithdraw: false
            })
        }
    }

    withdraw = () => {
        let newTransaction = {...this.state}
        newTransaction.amount = -newTransaction.amount
        if(this.props.balance + newTransaction.amount >= 500){
            this.props.pushTransaction(newTransaction)
            this.setState({
                cannotCompleteWithdraw: false
            })
        } 
        else{
            this.setState({
                cannotCompleteWithdraw: true
            })
        }
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
            <div id="bar">
            <span className="bar-item"> Amount:  <input name="amount" type="Number" id="amount-input" value={this.state.amount} onChange={this.changeHandler}/></span>
            <span className="bar-item">Vendor:  <input name="vendor" type="text" id="vendor-input" value={this.state.vendor} onChange={this.changeHandler}/></span>
            <span className="bar-item">Category:  <input name="category" type="text" id="category-input" value={this.state.category} onChange={this.changeHandler}/></span>
                <button className="bar-item" onClick={this.deposit}>Deposit</button>
                <button className="bar-item" onClick={this.withdraw}>Withdraw</button>
            </div>
            {this.state.cannotCompleteWithdraw? <div id="warning-messege">Insufficient Funds</div>: null}
        </div>)
    }
}
export default Operations