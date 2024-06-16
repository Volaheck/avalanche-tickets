import { Tickets } from "./tickets";
import { OwnWrapper, Groups, Group, GroupName } from "./styled";
import { useGetOwnList } from "../../../hooks/use-get-own-list";

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

export const OwnList = () => {
  const groups = useGetOwnList<IGroup>("tickets");

  return (
    <OwnWrapper>
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
    </OwnWrapper>
  );
};
