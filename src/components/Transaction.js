import React, {Component} from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

class Transaction extends Component {
   
    getIconByTransactionType = (amount) =>{
        return Math.sign(amount) === 1 ?
        <FaArrowUp style={{color: "green"}}/>: 
        <FaArrowDown style={{color: "red"}}/>
    }

    render() {
        let transaction = this.props.transaction
        return (
        <tr>
            <td>{this.getIconByTransactionType(transaction.amount)} {transaction.amount}</td>
            <td>{transaction.vendor}</td>
            <td>{transaction.category}</td>
        </tr>)
    }
}
export default Transaction