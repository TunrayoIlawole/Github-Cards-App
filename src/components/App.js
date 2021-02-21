import React from 'react';
import CardList from './CardList';
import Form from './Form';

const testData = [
    {
        name: "Dan Abramov",
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
        company: "Facebook"
    },
    {
        name: "Sophie Albert",
        avatar_url: "https://avatars2.githubusercontent.com/u/62820?v=4",
        company: "Facebook"
    },
    {
        name: "Sebastain Markbage",
        avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
        company: "Facebook"
    }
]

class App extends React.Component {
	state = {
		profiles: testData
	}

	render() {
		return (
			<div>
				<div className = "header">{this.props.title}</div>
				<Form />
				<CardList profile = {this.state.profiles} />
			</div>
		)
	}
}

export default App;
