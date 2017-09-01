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
            <div className="container">
                <div className="row">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <NavBar title="Teste Props" linkUrl="index.html" />,
    document.getElementById('nav')
);

ReactDOM.render(
    <Title title="My component title!" />,
    document.getElementById('title')
);
