import styled from "styled-components";

export const BuyTicketWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const Ticket = styled.li`
	display: flex;
	flex-shrink: 0;
	flex-direction: column;
	gap: 5px;
	width: 150px;
	height: 200px;
	justify-content: space-between;
	align-items: center;
	background: linear-gradient(to bottom right, #3a1c71, #d76d77, #ffaf7b);
	color: white;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	user-select: none;
	cursor: pointer;
`;

export const Service = styled.span``;

export const Zone = styled.span``;

interface ITime {
	size?: number;
}
export const Time = styled.span<ITime>`
	font-size: ${(props) => props.size || 70}px;
	font-weight: 500;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.span`
	text-align: center;
`;

export const Price = styled.span`
	font-weight: 600;
	& span {
		font-weight: 400;
		font-size: 12px;
	}
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
  width: 190px;
  margin-top: 10px;

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

