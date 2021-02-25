import React from 'react';
import CardList from './CardList';
import Form from './Form';


class App extends React.Component {
	render() {
		return (
			<div>
				<div className = "header">{this.props.title}</div>
				<Form />
				<CardList />
			</div>
		)
	}
}

export default App;
