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
        const TitleStyle = {
            color: "#444",
            fontSize: "28px"
        };
        return React.createElement(
            "h1",
            { style: TitleStyle },
            this.props.children
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
        const title = this.state.click ? this.props.titleActive : this.props.children;
        return React.createElement(
            "button",
            { onClick: this.toggleClick, className: btnClass },
            title
        );
    }
});

const Form = React.createClass({
    displayName: "Form",

    getInitialState: function () {
        return { name: '', email: '', subject: 'J', message: '' };
    },

    handleNameChange: function (e) {
        this.setState({ name: e.target.value });
    },
    handleEmailChange: function (e) {
        this.setState({ email: e.target.value });
    },
    handleSubjectChange: function (e) {
        this.setState({ subject: e.target.value });
    },
    handleMessageChange: function (e) {
        this.setState({ message: e.target.value });
    },

    handleSubmit: function (e) {
        e.preventDefault();
        const name = this.state.name.trim();
        const email = this.state.email.trim();
        const subject = this.state.subject;
        const message = this.state.message.trim();

        if (!name || !email || !subject || !message) {
            return;
        }

        this.props.onContactSubmit({
            id: this.props.idNumber,
            name: name,
            email: email,
            subject: subject,
            message: message
        });
    },

    render: function () {
        const InputStyle = {
            padding: "20px",
            fontSize: "17px",
            color: "#444"
        };
        return React.createElement(
            "form",
            { onSubmit: this.handleSubmit },
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    "Name"
                ),
                React.createElement("input", { type: "text", className: "form-control", id: "name", placeholder: "Digite seu nome", style: InputStyle, onChange: this.handleNameChange })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "email" },
                    "E-mail"
                ),
                React.createElement("input", { type: "email", className: "form-control", id: "email", placeholder: "Digite seu email", style: InputStyle, onChange: this.handleEmailChange })
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "subject" },
                    "Subject"
                ),
                React.createElement(
                    "select",
                    { defaultValue: this.state.subject, className: "form-control", id: "subject", onChange: this.handleSubjectChange },
                    React.createElement(
                        "option",
                        { value: "A" },
                        "AngularJS"
                    ),
                    React.createElement(
                        "option",
                        { value: "J" },
                        "Jquery"
                    ),
                    React.createElement(
                        "option",
                        { value: "R" },
                        "ReactJS"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                    "label",
                    { htmlFor: "message" },
                    "Message"
                ),
                React.createElement("textarea", { name: "message", id: "message", cols: "30", rows: "3", className: "form-control", style: InputStyle, onChange: this.handleMessageChange })
            ),
            React.createElement(
                Button,
                { titleActive: "Loading.." },
                "Send"
            )
        );
    }
});

const Contact = React.createClass({
    displayName: "Contact",

    render: function () {
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "th",
                { scope: "row" },
                this.props.idContact
            ),
            React.createElement(
                "td",
                null,
                this.props.name
            ),
            React.createElement(
                "td",
                null,
                this.props.email
            ),
            React.createElement(
                "td",
                null,
                this.props.subject
            ),
            React.createElement(
                "td",
                null,
                this.props.children
            )
        );
    }
});

const List = React.createClass({
    displayName: "List",

    render: function () {
        const contactNodes = this.props.data.map(function (contact) {
            return React.createElement(
                Contact,
                { idContact: contact.id, name: contact.name, email: contact.email, subject: contact.subject },
                contact.message
            );
        });
        return React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Email"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Subject"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Message"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                contactNodes
            )
        );
    }
});