import React from 'react';
class Form extends React.Component {
    handleClick() {
        this.refs.myTextInput.focus();
    }
    render() {
        return (
            <div>
                <hr/>
                <p>获取真实DOM</p>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        )
    }
}
export default Form;