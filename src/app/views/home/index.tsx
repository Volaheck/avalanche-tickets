import avaxLogoImg from "../../../assets/images/avalanche.svg";
import { useGetCount } from "../../../hooks/use-get-count";
import { HomeWrapper } from "./styled";

export const Home = () => {
  const count = useGetCount("tickets");
  return (
    <HomeWrapper>
      <img alt="AVAX" src={avaxLogoImg} width="70"></img>
      <h1>0.03 AVAX</h1>
      {count.data && <h2>You own <b>{count.data.count}</b> tickets</h2>}
    </HomeWrapper>
  );
};
