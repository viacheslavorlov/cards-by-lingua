import Card from "../card/card";


const CardsHolder = props => {
	const arr = props.data;

		return (

			arr.map(item => {
				return <Card item={item}/>
			}
		)
	)
};

export default CardsHolder;