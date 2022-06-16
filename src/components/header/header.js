import {Component} from "react";
import {db} from "../db/db";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wordsLength: '',
			language: ''
		}
	}

	calculateAmountOfWords = () => {
		db.words.toArray(item => {
			this.setState(({...this.state, wordsLength: item.length}));
		})
		// console.log('arr', newArr, 'longitude', longitude.)
	}

	filterWordsByLanguage = (lang) => {
		db.words.toArray(item => { ///////////////////////
			item.filter(el => el.language === lang); ///////////////////////
		});
	}

	render() {
		return (
			<header>
				<h1>Повторяем слова</h1>
				<select onChange={() => this.calculateAmountOfWords()}>
					<option value=''></option>
					<option value={'english'}>English</option>
					<option value={'russian'}>Russian</option>
				</select>
				<input type="text" id='language' value={this.state.language}/>
				<p>Всего слов в словаре: <span>{this.state.wordsLength}</span></p>
			</header>
		)
	}
}

export default Header;