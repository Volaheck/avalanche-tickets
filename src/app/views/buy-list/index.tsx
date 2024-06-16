import { Tickets } from "./tickets";
import { BuyWrapper, Groups, Group, GroupName } from "./styled";
import { useGetByList } from "../../../hooks/use-get-by-list";

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
  const groups = useGetByList<IGroup>("ticket-groups");

  return (
    <BuyWrapper>
      {groups.isLoading && <div>Loading...</div>}
      {!groups.isLoading && (
        <Groups>
          {groups.data.map((group) => {
            return (
              <Group key={group.id}>
                <GroupName>{group.name}</GroupName>
                <Tickets tickets={group.tickets} groupId={group.id} />
              </Group>
            );
          })}
        </Groups>
      )}
    </BuyWrapper>
  );
};
