import styled from "styled-components";

export const TicketsWrapper = styled.ul`
	display: flex;
	gap: 20px;
	padding: 0;
`;

export const Ticket = styled.li`
	display: flex;
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
