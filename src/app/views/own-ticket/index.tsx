import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import {
  OwnTicketWrapper,
  ContentContainer,
  Status,
  QRCodeContainer,
  InfoContainer,
  InfoRow,
  InfoLabel,
  InfoValue,
  ButtonsContainer,
  StyledButton,
	BigButton,
} from "./styled";
import { useGetById } from "../../../hooks/use-get-by-id";

interface TicketData {
  id: number;
  validatedAt: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  ticketType: {
    id: number;
    name: string;
    service: string;
    zone: string;
    time: string;
    description: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    ticketGroup: {
      id: number;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export const OwnTicket = () => {
  const { id } = useParams();
  const { isLoading, data: ticket } = useGetById<TicketData>(
    "tickets",
    id as string,
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!ticket) {
    return <h1>Ticket not found</h1>;
  }

  return (
    <OwnTicketWrapper>
      <ContentContainer>
        <Status>{ticket.status === "expired" ? "Nieważny" : "Ważny"}</Status>
        <QRCodeContainer>
          <QRCode value="M19210" size={150} />
        </QRCodeContainer>
        <InfoContainer>
          <InfoRow>
            <InfoLabel>Ważny od:</InfoLabel>
            <InfoValue>{new Date(ticket.createdAt).toLocaleString()}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Ważny do:</InfoLabel>
            <InfoValue>{new Date(ticket.updatedAt).toLocaleString()}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Kod kontroli:</InfoLabel>
            <InfoValue>M19210</InfoValue>
          </InfoRow>
        </InfoContainer>
      </ContentContainer>
      <ButtonsContainer>
        <StyledButton>Send</StyledButton>
        <StyledButton>Sell</StyledButton>
      </ButtonsContainer>
			<BigButton>Validate</BigButton>
    </OwnTicketWrapper>
  );
};
