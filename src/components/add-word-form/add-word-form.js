import {Component} from "react";

class AddWordForm extends Component {

// добавить value от inputs в state
	render() {
		return (
			<form>
				<label htmlFor="word">Слово: </label>
				<input id="word" type="text" onChange={this.props.changeWord}/>
				<label htmlFor="word">Перевод: </label>
				<input id="wordTranslate" type="text" onChange={this.props.changeWord}/>
				<button onClick={this.props.addWord}>Add word</button>
			</form>
		)
	}
}

export default AddWordForm;