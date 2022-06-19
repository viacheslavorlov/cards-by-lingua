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
		this.state = {
			word: '',
			wordTranslate: '',
			repetitions: '',
			language: '',
			wordsLength: 0,
			wordsArray: []
		}
	}

	calculateAmountOfWords = () => {
		db.words.toArray(item => {
			this.setState(({...this.state, wordsLength: item.length}));
		});
	}

	changeWord = (e) => {
		let word = document.querySelector(`#${e.target.id}`);
		this.setState({
			// использование id элемента для получения ключа в state
			[e.target.id]: word.value
		});
	}
	changeLanguageBySelect = (e) => {
		this.setState(state => (
			{...state, language: e.target.value}
		))
	}


	addWord = () => {
		let word = this.state.word;
		let wordTranslate = this.state.wordTranslate;
		let language = this.state.language;
		let repetitions = '+';
		// проверка на наличие слова в словаре
		db.words.toArray(arr => {
			if (arr.map(el => el.word + el.wordTranslate).includes(`${word}${wordTranslate}`)) {
				// если есть - не записывется и выводит alert
				alert(`${word} as ${wordTranslate} already exists in base`);
			} else {
				// усли нет - записывается
				if (word !== '' && wordTranslate !== '') {
					db.words.add({word, wordTranslate, repetitions, language});
				}
			}
		});
		// очистка полей ввода
		this.setState(state => ({...state, name: '', surname: ''}));
	}


	createWordsArrayInState = () => {
		db.words.toArray(arr => {
			arr.forEach(item => {
				if (item.word !== '' && item.wordTranslate !== '' && !this.state.wordsArray.includes(item)){
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
		document.addEventListener('DOMContentLoaded', this.createWordsArrayInState);
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
