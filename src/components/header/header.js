
import {Component} from "react";


class Header extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		const {wordsArray} = this.props;
		return (
			<header>
				<h1>Повторяем слова</h1>
				<select>
					<option>English</option>
					<option>Russian</option>
				</select>
				<p>Всего слов в словаре: <span>{this.props.data.length}</span></p>
			</header>
		)
	}
}

export default Header;