import {Component} from "react";

class Header extends Component {

	// filterWordsByLanguage = (lang) => {
	// 	db.words.toArray(item => { ///////////////////////
	// 		item.filter(el => el.language === lang); ///////////////////////
	// 	});
	// }

	componentDidMount() {
		this.props.calculateAmountOfWords();
	}

	render() {
		const {changeLanguageBySelect, changeWord} = this.props;
		const {language, wordsLength} = this.props.data;

		return (
			<header>
				<h1>Повторяем слова</h1>

				<label htmlFor='selectLanguage'>Выберите язык из списка:
					<select
					id='selectLanguage'
					onChange={(e) => changeLanguageBySelect(e)}>
						<option value=''></option>
						<option value={'english'}>English</option>
						<option value={'russian'}>Russian</option>
					</select>
				</label>
				<br/>
				<label htmlFor='language'>Или введите новый язык: </label>
				<input type='text' id='language' value={language}
				       onChange={(ev) => changeWord(ev)}/>
				<p>Всего слов в словаре: <span>{wordsLength}</span></p>
			</header>
		)
	}
}

export default Header;