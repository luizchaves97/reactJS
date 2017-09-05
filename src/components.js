const NavBar = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={this.props.linkUrl} className="navbar-brand">
                            {
                                this.props.title
                            }
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

const Title = React.createClass({
    render: function () {
        const TitleStyle = {
            color: "#444",
            fontSize: "28px"
        };
        return(
            <h1 style={TitleStyle}>{this.props.children}</h1>
        );
    }
});

const Button = React.createClass({

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
        return (
            <button onClick={this.toggleClick} className={btnClass}>{title}</button>
        );
    }
});

const Form = React.createClass({
    getInitialState: function () {
      return {name:'',email:'',subject:'J',message:''}
    },

    handleNameChange: function (e) {
        this.setState({name: e.target.value});
    },
    handleEmailChange: function (e) {
        this.setState({email: e.target.value});
    },
    handleSubjectChange: function (e) {
        this.setState({subject: e.target.value});
    },
    handleMessageChange: function (e) {
        this.setState({message: e.target.value});
    },

    handleSubmit: function (e) {
        e.preventDefault();
        const name = this.state.name.trim();
        const email = this.state.email.trim();
        const subject = this.state.subject;
        const message = this.state.message.trim();

        if(!name || !email || !subject  || !message){
            return;
        }

        this.props.onContactSubmit({
            id:this.props.idNumber,
            name:name,
            email:email,
            subject:subject,
            message:message
        });
    },

    render: function () {
        const InputStyle = {
            padding: "20px",
            fontSize: "17px",
            color: "#444"
        };
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Digite seu nome" style={InputStyle} onChange={this.handleNameChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="Digite seu email" style={InputStyle} onChange={this.handleEmailChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue={this.state.subject} className="form-control" id="subject" onChange={this.handleSubjectChange}>
                        <option value="A">AngularJS</option>
                        <option value="J">Jquery</option>
                        <option value="R">ReactJS</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="3" className="form-control" style={InputStyle} onChange={this.handleMessageChange}></textarea>
                </div>
                <Button titleActive="Loading..">Send</Button>
            </form>
        );
    }
});

const Contact = React.createClass({
    render: function () {
        return(
            <tr>
                <th scope="row">{this.props.idContact}</th>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>{this.props.subject}</td>
                <td>{this.props.children}</td>
            </tr>
        );
    }
});

const List = React.createClass({
    render: function () {
        const contactNodes = this.props.data.map(function (contact) {
            return(
                <Contact idContact={contact.id} name={contact.name} email={contact.email} subject={contact.subject}>
                    {contact.message}
                </Contact>
            );

        });
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contactNodes}
                </tbody>
            </table>
        );
    }
});