import { useParams } from "react-router-dom";
import { useGetById } from "../../../hooks/use-get-by-id";
import { ITicket } from "../buy-list";
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
  const { id } = useParams();
  const { isLoading, data: ticket } = useGetById<ITicket>(
    "tickets/types",
    id as string,
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!ticket) {
    return <h1>Ticket not found</h1>;
  }

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
