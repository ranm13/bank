import React, {Component} from 'react'
import Popup from "reactjs-popup";
 
class Category extends Component {
    colorByAmount = (amount) => Math.sign(amount) === 1 ? {color: "green"} : {color: "red"}
   
    render() {
        return (
            <div>
                <Popup
                    trigger={<span >{this.props.category}:  </span>}
                    position="right center"
                    on='hover'>
                    <span>{this.props.transactions
                    .filter(t => t.category === this.props.category)
                    .map(t => <div key={t._id}>{t.vendor} : <span style={this.colorByAmount(t.amount)}>{t.amount}</span></div>)}</span>
                </Popup>
                <span style={this.colorByAmount(this.props.amount)}>{this.props.amount}</span>
            </div>)
    }
}
export default Category
