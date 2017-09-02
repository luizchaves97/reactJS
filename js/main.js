const Page = React.createClass({
    displayName: "Page",

    render: function () {
        return React.createElement(
            "my-element",
            null,
            React.createElement(NavBar, { title: "React", linkUrl: "index.html" }),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(Title, { title: "My component title!" }),
                    React.createElement(Button, { title: "Button Success", titleActive: "Button Warning" })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));