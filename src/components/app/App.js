// импорт базовых компонентов
import {Component} from 'react';
// импорт частей приложения
import './App.css';
import {db} from "../db/db"; // база данных название "words"
import Header from "../header/header";
import AddWordForm from "../add-word-form/add-word-form";
import CardsHolder from "../cards-holder/cards-holder";

class App extends Component {
	constructor(props) {
		super(props);
		// создание состояния для записи нового слова в словарь
	this.getArrayTooState();
	}

	state = {
		word: '',
		wordTranslate: '',
		repetitions: '',
		language: '',
		wordsLength: 0,
		wordsArray: []
	}
	calculateAmountOfWords = async () => {
		await db.words.toArray(item => {
			this.setState(({wordsLength: item.length}));
		});
	}

	getArrayTooState = async () => {
		await db.words.toArray(item => {
			this.setState(({wordsArray: item}));
		});
	}

	changeWord = (e) => {
		this.setState({
			// использование id элемента для получения ключа в state
			[e.target.id]: e.target.value
		});
	}
	changeLanguageBySelect = (e) => {
		this.setState({language: e.target.value});
	}

	addWord = () => {
		let word = this.state.word;
		let wordTranslate = this.state.wordTranslate;
		let language = this.state.language;
		let repetitions = '+';
		const arrayFromState = this.state.wordsArray.map(item => item.word + item.wordTranslate);
		console.log(arrayFromState);
		// проверка на наличие слова в словаре
		if (arrayFromState.includes(`${word}${wordTranslate}`)) {
			alert(`"${word}" as ${wordTranslate} already in database!`);
		} else if (word !== '' && wordTranslate !== '') {
			db.words.add({word, wordTranslate, language, repetitions});
		} else {
			alert('Enter the word please!');
		}

		// очистка полей ввода
		this.setState(state => ({...state, word: '', wordTranslate: ''}));
	}


	createWordsArrayInState = async () => {
		await db.words.toArray(arr => {
			arr.forEach(item => {
				if (item.word !== '' && item.wordTranslate !== '' && !this.state.wordsArray.includes(item)) {
					this.setState(state => state.wordsArray.push(item))
				}
			});

		});
	}
	//
	// addRepetition = () => {
	//
	// }


	render() {
		// document.addEventListener('DOMContentLoaded', this.createWordsArrayInState);

		const data = [...this.state.wordsArray];

		return (
			<div className="App">
				<Header calculateAmountOfWords={this.calculateAmountOfWords}
				        data={this.state}
				        changeWord={this.changeWord}
				        getStateValue={this.getStateValue}
				        changeLanguageBySelect={this.changeLanguageBySelect}/>
				<AddWordForm changeWord={this.changeWord}
				             addWord={this.addWord}/>
				<ul>
					<CardsHolder data={data}/>
				</ul>
			</div>
		);
	}
}


export default App;
