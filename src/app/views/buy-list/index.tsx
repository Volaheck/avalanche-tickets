import { Tickets } from "./tickets";
import { BuyWrapper, Groups, Group, GroupName} from "./styled";
import { groups } from "./mock";

export interface ITicket {
	id: number;
	service: string;
	zone: string;
	time: string;
	description?: string | null;
	price: string;
}

export interface IGroup {
	id: number;
	name: string;
	tickets: ITicket[];
}

export const BuyList = () => {
	return (
		<BuyWrapper>
			<Groups>
				{groups.data.map((group) => {
					return (
						<Group>
              <GroupName>{group.name}</GroupName>
							<Tickets tickets={group.tickets} groupId={group.id}/>
						</Group>
					);
				})}
			</Groups>
		</BuyWrapper>
	);
};
