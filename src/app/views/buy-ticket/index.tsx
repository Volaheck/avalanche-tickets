import { ticket } from "./mock";
import {
	BuyTicketWrapper,
	StyledButton,
	Ticket,
	Service,
	Zone,
	Time,
	Description,
	Price,
} from "./styled";

function convertPrice(price: string) {
	const lastTwoDigits = price.slice(-2);
	const restOfString = price.slice(0, -2);
	return restOfString + "." + lastTwoDigits;
}

export const BuyTicket = () => {
	const isLongTerms = ticket.time.length > 2;
	const timeSize = isLongTerms ? 30 : 70;
	return (
		<BuyTicketWrapper>
			<Ticket key={ticket.id}>
				<Service>{ticket.service}</Service>
				<Zone>{ticket.zone}</Zone>
				<Time size={timeSize}>{ticket.time}</Time>
				<Description>{ticket.description}</Description>
				<Price>
					{convertPrice(ticket.price)} <span>PLN</span>
				</Price>
			</Ticket>
			<StyledButton>Buy ticket</StyledButton>
		</BuyTicketWrapper>
	);
};
