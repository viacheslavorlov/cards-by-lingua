import Card from "../card/card";


const CardsHolder = (props) => {
	const arr = props.data;

		return (

			arr.map((item, i) => {
				return <Card item={item} key={i}/>
			}
		)
	)
};

export default CardsHolder;