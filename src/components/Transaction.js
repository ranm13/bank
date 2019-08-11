import React, {Component} from 'react'

class Transaction extends Component {
   
    render() {
        let transaction = this.props.transaction
        let isDeposit = Math.sign(transaction.amount) === 1 ? true: false
        let style ={}
        isDeposit? style.color = "green": style.color = "red"
        return (
        <div style={style}>Amount: {transaction.amount}| Vendor: {transaction.vendor}| Category: {transaction.category}</div>)
    }
}
export default Transaction