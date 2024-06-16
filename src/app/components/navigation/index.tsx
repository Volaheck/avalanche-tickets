import { NavgationWrapper, LinkSC } from "./styled";

export const Navigation = () => {
	return (
		<NavgationWrapper>
			<LinkSC to="/home">Home</LinkSC>
			<LinkSC to="/list">Own</LinkSC>
			<LinkSC to="Buy">Buy</LinkSC>
		</NavgationWrapper>
	);
};
