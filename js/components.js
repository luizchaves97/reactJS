const NavBar = React.createClass({
    displayName: "NavBar",

    render: function () {
        return React.createElement(
            "nav",
            { className: "navbar navbar-default" },
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { href: this.props.linkUrl, className: "navbar-brand" },
                        this.props.title
                    )
                )
            )
        );
    }
});

const Title = React.createClass({
    displayName: "Title",

    render: function () {
        return React.createElement(
            "h1",
            null,
            this.props.title
        );
    }
});

const Button = React.createClass({
    displayName: "Button",


    getInitialState: function () {
        return {
            click: false
        };
    },

    toggleClick: function () {
        this.setState({
            click: !this.state.click
        });
    },

    render: function () {
        const btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';
        const title = this.state.click ? this.props.titleActive : this.props.title;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }
});