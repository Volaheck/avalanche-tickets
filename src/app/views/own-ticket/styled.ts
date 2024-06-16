import styled from "styled-components";

export const OwnTicketWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background: linear-gradient(to bottom right, #3a1c71, #d76d77, #ffaf7b);
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	width: 300px;
	color: black;
  box-sizing: border-box;
`;
export const QRCodeContainer = styled.div`
	margin: 20px 0;
	padding: 10px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const InfoContainer = styled.div`
	text-align: left;
	width: 100%;
`;

export const InfoRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5px 0;
`;

export const InfoLabel = styled.div`
	font-weight: bold;
`;

export const InfoValue = styled.div`
	text-align: right;
`;

export const Status = styled.div`
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 10px;
`;

export const StyledButton = styled.button`
  /* Обнуление стандартных стилей кнопки */
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-decoration: none;

  /* Кастомные стили */
  display: inline-block;
  padding: 12px 24px;
  background-color: #e74c3c;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  width: 120px;

  &:hover {
    background-color: #c0392b;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #a93226;
  }
`;
