import React from "react";

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            subject: 'History'
        }
        this.onclick = this.onclick.bind(this)
    }
    list = [10, 28, 89, 34, 76]
    result = this.list.map(input => input);
    onclick(){
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
            subject: 'English'
        }))
    }

    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.amount}</h1>
                <h1>{this.props.spendDate.toString()}</h1>
                <h1>{this.props.category}</h1>
                <h1>{this.result}</h1>
                <div onClick={this.onclick}>Toggle state is {this.state.toggle}</div>
                {this.state.subject}<br />
                <button onClick={this.onclick}>change</button>
            </div>
        )
    }
}

export default Name;