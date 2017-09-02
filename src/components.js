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
        return(
            <h1>{this.props.title}</h1>
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
        const title = this.state.click ? this.props.titleActive : this.props.title;
        return (
            <button onClick={this.toggleClick} className={btnClass}>{title}</button>
        );
    }
});