import { useParams } from "react-router-dom";
import { TicketWrapper } from "./styled";

export const Ticket = () => {
  const { id } = useParams();
	return (
		<TicketWrapper>
			<h1>Ticket {id}</h1>
		</TicketWrapper>
	);
};
