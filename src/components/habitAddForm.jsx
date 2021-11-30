import React, {Component } from 'react'

class HabitAddForm extends Component{
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault() //브라우저의 기본기능을 취소
        console.log(this.inputRef.current.value)
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        
    }
    

    render() {

        return(
            <form className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef}
                type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">add</button>
            </form>
        )
    }
}

export default HabitAddForm