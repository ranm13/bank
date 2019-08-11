import React, {Component} from 'react'
import Transaction from './Transaction';

class Transactions extends Component {
    render() {
        return (
        <div>
            {this.props.transactions.map(t => <Transaction key={t.vendor} transaction={t} />)}
        </div>)
    }
}
export default Transactions