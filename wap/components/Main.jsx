import React from 'react';
var names = ['wangmengfei','liuyangjun']
var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome</h2>,
];
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }
    handleClick(){
        this.setState({liked: !this.state.liked});
    }
    render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked'
        return (
            <div className="main">
                <button onClick={this.handleClick.bind(this)}>{text}</button>
                <p>传递过来的参数是:{this.props.name}</p>
                <p>title:{this.props.title}</p>
                <hr/>
                <p>Main.jsx</p>
                {
                    names.map(function (name) {
                        return <span>Hello, {name}!</span>
                    })
                }
                <hr/>
                <div>{arr}</div>
                <hr/>
                <p>{names}</p>
                <ol>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>;
                        })
                    }
                </ol>
            </div>
        )
    }
}
Main.propTypes = {
    title: React.PropTypes.string.isRequired
};
//导出组件
export default Main;