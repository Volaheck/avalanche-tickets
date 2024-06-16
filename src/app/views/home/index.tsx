import avaxLogoImg from "../../../assets/images/avalanche.svg";
import { HomeWrapper } from "./styled";

export const Home = () => {
	return (
		<HomeWrapper>
			<img alt ="AVAX" src={avaxLogoImg} width="70"></img>
			<h1>0 AVAX</h1>
		</HomeWrapper>
	);
};
