const Page = React.createClass({
    displayName: "Page",

    getInitialState: function () {
        return {
            data: [{ id: "1", name: "Luiz", email: "luizchaves97@gmail.com", subject: "R", message: "Minha dúvida é sobre react." }, { id: "2", name: "Isa", email: "isa@gmail.com", subject: "A", message: "Minha dúvida é sobre AngulaJS." }]
        };
    },
    handleContactSubmit: function (contact) {
        const newContact = this.state.data.concat([contact]);
        this.setState({ data: newContact });
    },

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
                    React.createElement(
                        Title,
                        null,
                        React.createElement(
                            "p",
                            null,
                            "My component title!"
                        )
                    ),
                    React.createElement(Form, { onContactSubmit: this.handleContactSubmit, idNumber: this.state.data.length + 1 })
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(List, { data: this.state.data })
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));