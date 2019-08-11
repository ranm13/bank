import React, {Component} from 'react'

class Transaction extends Component {
   
    render() {
        let transaction = this.props.transaction
        return (
        <div>Amount: {transaction.amount}| Vendor: {transaction.vendor}| Category: {transaction.category}</div>)
    }
}
export default Transaction