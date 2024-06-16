import { useParams } from "react-router-dom";
import { TicketWrapper } from "./styled";

export const OwnTicket = () => {
  const { id } = useParams();
	return (
		<TicketWrapper>
			<h1>Ticket {id}</h1>
		</TicketWrapper>
	);
};
