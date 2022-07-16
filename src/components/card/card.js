import './card.css';
import {Component} from "react";
import {db} from "../db/db";

class Card extends Component {
	//
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		repetitions: ''
	// 	}
	// }
	state = {
		repetitions: ''
	}
	setRepetitions = () => {
		this.setState(state => ({repetitions: this.props.item.repetitions}));
	}
	componentDidMount() {
		this.setRepetitions();
	}

	addRepetietions = (e, trueOrNot) => {
		db.words.update(parseInt(e.target.parentElement.parentElement.id, 10), {repetitions: this.state.repetitions + trueOrNot});
		e.target.parentElement.parentElement.remove();
	}



	showOrHideWord = (e) => {
		if (e.target.nextElementSibling.classList.contains('hide')) {
			e.target.nextElementSibling.classList.add('show');
			e.target.nextElementSibling.classList.remove('hide');
			e.target.textContent = 'Спрятать слово';
		} else {
			e.target.nextElementSibling.classList.add('hide');
			e.target.nextElementSibling.classList.remove('show');
			e.target.textContent = 'Показать слово';
		}
	}


	render() {
		const {word, wordTranslate, language, id} = this.props.item;

		return (
			<li className={'container'} id={id}>
				<div className={'container__word'}>
					<h3 className={'container__word__label'}>Слово ({language}):</h3>
					<h3 className={'container__word__word'}>{word}</h3>
				</div>
				<button className={'container__button'} onClick={this.showOrHideWord}>Показать слово</button>
				<div className={'container__wordTranslate hide'}>
					<h3 className={'container__wordTranslate__label'}>Перевод:</h3>
					<h3 className={'container__wordTranslate__word'}>{wordTranslate}</h3>
					<button className={'right'} onClick={(e) => this.addRepetietions(e, '+')}>Верно</button>
					<button className={'not-right'} onClick={(e) => this.addRepetietions(e, '-')}>Не верно</button>
				</div>
				{/* onClick={e => this.props.onDelete(e)создать отдельную кнопку для удаления*/}
			</li>
		)
	}
}


export default Card;