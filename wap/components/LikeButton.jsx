var React = require('react')
var LikeButton = React.createClass({
    getDefaultProps : function () {
        return {
            title : 'Hello World',
            value: 'Hello!',
            opacity: 1.0
        };
    },
    getInitialState: function() {
        return {liked: false};
    },
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },
    handleFocus: function() {
        this.refs.myTextInput.focus();
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
                <hr/>
                <p>LikeButton</p>
                <p>不采用es6的写法</p>
                <p onClick={this.handleClick}>
                    You {text} this. Click to toggle.
                </p>
                <p>参数title:{this.props.title}</p>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleFocus} />
                <br/>
                <input type="text" value={this.props.value} onChange={this.handleChange} style={{opacity: this.state.opacity}}/>
                <p>{this.props.value},Hello {this.props.name}</p>
                <hr/>
            </div>
        );
    }
});
export default LikeButton;
