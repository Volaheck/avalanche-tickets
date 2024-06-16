import { ListWrapper } from "./styled";
import { Link } from "react-router-dom";

export const OwnList = () => {
  return (
    <ListWrapper>
      <h1>My tickets</h1>
      <ul>
        {Array(10)
          .fill(0)
          .map((_, index) => {
            return (
              <Link key={index + ""} to={`/ticket/${index}`}>
                <li>Ticket {index}</li>
              </Link>
            );
          })}
      </ul>
      <Link to="/buy">Buy new ticket</Link>
    </ListWrapper>
  );
};
