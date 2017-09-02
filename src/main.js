const Page = React.createClass({
    render: function () {
        return (
            <my-element>
                <NavBar title="React" linkUrl="index.html" />
                <div className="container">
                    <div className="row">
                        <Title title="My component title!" />
                        <Button title="Button Success" titleActive="Button Warning" />
                    </div>
                </div>
            </my-element>
        );
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);