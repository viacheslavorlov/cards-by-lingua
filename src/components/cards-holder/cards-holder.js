import Card from "../card/card";
import {Component} from "react";


class CardsHolder extends Component {
	render() {
		const arr = this.props.data;
		return arr.map((item) => {
			return (
				<Card item={item}/>
			)
		});
	}
}

export default CardsHolder;