const Page = React.createClass({
    getInitialState: function () {
        return{
            data:[
                {id:"1",name:"Luiz",email:"luizchaves97@gmail.com",subject:"R",message:"Minha dúvida é sobre react."},
                {id:"2",name:"Isa",email:"isa@gmail.com",subject:"A",message:"Minha dúvida é sobre AngulaJS."}
            ]
        }
    },
    handleContactSubmit: function (contact) {
        const newContact = this.state.data.concat([contact]);
        this.setState({data: newContact});
    },

    render: function () {
        return (
            <my-element>
                <NavBar title="React" linkUrl="index.html" />
                <div className="container">
                    <div className="row">
                        <Title>
                            <p>My component title!</p>
                        </Title>
                        <Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1} />
                    </div>
                    <div className="row">
                        <List data={this.state.data} />
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