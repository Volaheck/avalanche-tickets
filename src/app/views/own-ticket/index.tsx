import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import { ticket } from "./mock";
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
} from "./styled";

export const OwnTicket = () => {
	const { id } = useParams();
	console.log(id);
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
		</OwnTicketWrapper>
	);
};
