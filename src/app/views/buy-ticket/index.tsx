import QRCode from "qrcode.react";
import { ticket } from "./mock";
import {
	BuyTicketWrapper,
	ContentContainer,
	Status,
	QRCodeContainer,
	InfoContainer,
	InfoRow,
	InfoLabel,
	InfoValue,
	ButtonsContainer,
	StyledButton,
} from "./styled";
/*
interface TicketProps {
  ticket: {
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
  };
}

*/

export const BuyTicket = () => {
	return (
		<BuyTicketWrapper>
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
		</BuyTicketWrapper>
	);
};
