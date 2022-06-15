// импорт базовых компонентов
import {Component} from 'react';
// импорт частей приложения
import './App.css';
import {db} from "../db/db"; // база данных название "words"
import Header from "../header/header";
import AddWordForm from "../add-word-form/add-word-form";

class App extends Component {

	constructor(props) {
		super(props);
		// создание состояния для записи нового слова в словарь
		this.state = {
			word: '',
			wordTranslate: '',
			repetitions: ''
		}
	}

	changeWord = (e) => {
		let word = document.querySelector(`#${e.target.id}`);
		this.setState({
			// использование id элемента для получения ключа в state
			[e.target.id]: word.value
		});
	}

	addWord = () => {
		let word = this.state.word;
		let wordTranslate = this.state.wordTranslate;
		// проверка на наличие слова в словаре
		db.words.toArray(arr => {
			if (arr.map(el => el.word + el.wordTranslate).includes(`${word}${wordTranslate}`)) {
				// если есть - не записывется и выводит alert
				alert(`${word} as ${wordTranslate} already exists in base`);
			} else {
				// усли нет - записывается
				if (word !== '' && wordTranslate !== '') {
					db.words.add({word, wordTranslate});
				}
			}
		});
		// очистка полей ввода
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
