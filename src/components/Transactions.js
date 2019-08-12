import React, {Component} from 'react'
import Transaction from './Transaction';
import Category from './Category';

class Transactions extends Component {
    render() {
        let transactions = this.props.transactions
        let sumByCategories ={}
        transactions.forEach(t => sumByCategories[t.category]? sumByCategories[t.category] += t.amount: sumByCategories[t.category] = t.amount)
        let categories = Object.keys(sumByCategories)
        return (
        <div><table id="expenses-table">
           <thead>
                <tr>
                     <th colSpan="2" className="title">Expenses</th>
                </tr>
                <tr>
                    <th>Amount</th>
                    <th>Vendor</th>
                </tr>
            </thead>    
            <tbody>
            {transactions.map(t => <Transaction key={t._id} transaction={t} />)}
            </tbody>
        </table>
        <div id="categories">
             <div id="categories-title">By Categories</div>
            {categories.map(c => <Category key={c} amount={sumByCategories[c]} category={c} transactions={transactions} />)}
        </div>
       
        </div>)
    }
}
export default Transactions