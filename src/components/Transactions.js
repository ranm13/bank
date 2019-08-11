import React, {Component} from 'react'
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
        <table id="expenses-table">
            <tbody>
            <tr>
                <th>Amount</th>
                <th>Vendor</th>
                <th>Category</th>
            </tr>
            {this.props.transactions.map(t => <Transaction key={t._id} transaction={t} />)}
            </tbody>
        </table>)
    }
}
export default Transactions