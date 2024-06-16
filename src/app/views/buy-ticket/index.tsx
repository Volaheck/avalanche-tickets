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
import { usePost } from "../../../hooks/use-post/usePost";
import { TicketData } from "../own-ticket";

interface TicketCreateData {
  ticketTypeId: number;
  address: string;
}

function convertPrice(price: string) {
  const lastTwoDigits = price.slice(-2);
  const restOfString = price.slice(0, -2);
  return restOfString + "." + lastTwoDigits;
}

export const BuyTicket = () => {
  const { id } = useParams();
  const { isLoading, data: ticketType } = useGetById<ITicket>(
    "tickets/types",
    id as string,
  );
  const [postTicket, ticketData] = usePost<TicketData, TicketCreateData>(
    "tickets",
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!ticketType) {
    return <h1>Ticket not found</h1>;
  }

  const isLongTerms = ticketType.time.length > 2;
  const timeSize = isLongTerms ? 30 : 70;
  return (
    <BuyTicketWrapper>
      <Ticket key={ticketType.id}>
        <Service>{ticketType.service}</Service>
        <Zone>{ticketType.zone}</Zone>
        <Time size={timeSize}>{ticketType.time}</Time>
        <Description>{ticketType.description}</Description>
        <Price>
          {convertPrice(ticketType.price)} <span>PLN</span>
        </Price>
      </Ticket>
      <StyledButton
        onClick={() => {
          if (!ticketData.isLoading) {
            postTicket({
              address: "0xCf7fcf8455615B65eCa3fcAe200cd814Fb3fa1c1",
              ticketTypeId: ticketType.id,
            });
          }
        }}
      >
        Buy ticket
      </StyledButton>
    </BuyTicketWrapper>
  );
};
