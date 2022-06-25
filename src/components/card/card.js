import './card.css';
import {Component} from "react";

class Card extends Component {

	showWord = (e) => {
		e.target.nextElementSibling.classList.add('show');
		e.target.nextElementSibling.classList.remove('hide');
	}

	render() {
		const {word, wordTranslate, language, id} = this.props.item;

		return (
			<li key={id.toString()} className={'container'}>
				<div className={'container__word'}>
					<h3 className={'container__word__label'}>Слово ({language}):</h3>
					<h3 className={'container__word__word'}>{word}</h3>
				</div>
				<button className={'container__button'} onClick={this.showWord}>Показать слово</button>
				<div className={'container__wordTranslate hide'}>
					<h3 className={'container__wordTranslate__label'}>Перевод:</h3>
					<h3 className={'container__wordTranslate__word'}>{wordTranslate}</h3>
					<button className={'right'} >Верно</button>
					<button className={'not-right'}>Не верно</button>
				</div>

			</li>
		)
	}
}


export default Card;