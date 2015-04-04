var React = require("react");

var HelloMessage = React.createClass({
    render: function() {
        return <p>Hello { this.props.name }!</p>;
    }
});

React.render(
    <HelloMessage name="World" />,
    document.getElementById("container")
);
