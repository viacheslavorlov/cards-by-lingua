import logo from '../../logo.svg';
import './App.css';
import {Component} from 'react';

import Header from "../header/header";
import {db} from "../db/db";
import AddWordForm from "../add-word-form/add-word-form";

class App extends Component {

	render() {
		return (
			<div className="App">
				<Header data={db.words.toArray()} />
				<AddWordForm data={db.words.toArray()} />
			</div>
		);
	}
}

export default App;
