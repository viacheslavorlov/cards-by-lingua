import Card from "../card/card";
import {Component} from "react";


class CardsHolder extends Component {
	render() {
		const {data, onAddRepetition, onDelete} = this.props;
		return data.map(item => {
			return (
				<Card
					item={item}
					key={item.id}
					onAddRepetition={onAddRepetition}
					onDelete={onDelete}/>
			)
		}).reverse();
	}
}

export default CardsHolder;