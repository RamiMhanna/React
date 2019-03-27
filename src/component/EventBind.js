import React, {Component} from 'react';

class EventBind extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Hello"
        }
        //this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler = () => {
        this.setState({
            message: "GoodBuy!"
        })
    };

    //eventHandler(){
    //    this.setState({
    //        message: "GoodBuy!"
    //    })
    //}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.eventHandler}>Click Me</button>*/}
                {/*<button onClick={this.eventHandler.bind(this)}>Click Me</button>*/}
                {/*<button onClick={() => this.eventHandler()}>Click Me</button>*/}
                {<button onClick={this.eventHandler}>Click Me</button>}

            </div>
        );
    }
}

export default EventBind;