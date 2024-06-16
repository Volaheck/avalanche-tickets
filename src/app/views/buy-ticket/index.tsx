import { useParams } from "react-router-dom";
import { BuyTicketWrapper } from "./styled";

export const BuyTicket = () => {
  const { id } = useParams();
	return (
		<BuyTicketWrapper>
			<h1>Buy ticket {id}</h1>
		</BuyTicketWrapper>
	);
};
