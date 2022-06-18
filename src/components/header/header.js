import {Component} from "react";

class Header extends Component {
	constructor(props) {
		super(props);
	}


	// filterWordsByLanguage = (lang) => {
	// 	db.words.toArray(item => { ///////////////////////
	// 		item.filter(el => el.language === lang); ///////////////////////
	// 	});
	// }

	render() {
		this.props.calculateAmountOfWords()
		return (
			<header>
				<h1>Повторяем слова</h1>

				<label htmlFor='selectLanguage'>Выберите язык из списка: <select
					id='selectLanguage'
					onChange={(e) => this.props.changeLanguageBySelect(e)}>
						<option value=''></option>
						<option value={'english'}>English</option>
						<option value={'russian'}>Russian</option>
					</select>
				</label>
				<br/>
				<label htmlFor='language'>Или введите новый язык: </label>
				<input type='text' id='language' value={this.props.data.language}
				       onChange={(ev) => this.props.changeWord(ev)}/>
				<p>Всего слов в словаре: <span>{this.props.data.wordsLength}</span></p>
			</header>
		)
	}
}

export default Header;