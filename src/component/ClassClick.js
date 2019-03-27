import React, {Component} from 'react';

class ClassClick extends Component {
    clickHandler(){
        console.log("Button Clicked class")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click for class</button>
            </div>
        );
    }
}

export default ClassClick;