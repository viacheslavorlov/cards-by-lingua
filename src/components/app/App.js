import './App.css';
import {Component} from 'react';

import Header from "../header/header";
import {db} from "../db/db";
import AddWordForm from "../add-word-form/add-word-form";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			word: '',
			wordTranslate: '',
			repetitions: ''
		}
	}

	changeWord = (e) => {
		let word = document.querySelector(`#${e.target.id}`);
		this.setState({
			[e.target.id]: word.value
		});
	}

	addWord = () => {
		let word = this.state.word;
		let wordTranslate = this.state.wordTranslate;

		db.words.toArray(arr => {
			if (arr.map(el => el.word + el.wordTranslate).includes(`${word}${wordTranslate}`)) {
				alert(`${word} as ${wordTranslate} already exists in base`);
			} else {
				if (word !== '' && wordTranslate !== '') {
					db.words.add({word, wordTranslate});
				}
			}
		});
		this.setState(state => ({...state, name: '', surname: ''}));
	}

	render() {
		return (
			<div className="App">
				<Header data={db.words.toArray(item => item.length)} />
				<AddWordForm data={db.words.toArray()}
							 changeWord={this.changeWord}
							 addWord={this.addWord}/>
			</div>
		);
	}
}

export default App;
