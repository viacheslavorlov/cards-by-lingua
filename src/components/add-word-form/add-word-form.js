import {db} from "../db/db";
import {Component} from "react";

class AddWordForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			word: '',
			translate: ''
		}
	}
// добавить value от inputs в state
	render() {
		return (
			<form>
				<label htmlFor="word">Слово: </label>
				<input id="word" type="text"/>
				<label htmlFor="word">Перевод: </label>
				<input id="translate" type="text"/>
				<button onClick={{/*some function*/}}>Add word</button>
			</form>
		)
	}
}

export default AddWordForm;