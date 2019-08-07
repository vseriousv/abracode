
import { gql } from 'apollo-boost';

export const removePrintspreviewblockMutation = gql`
mutation removePrintspreviewblock($id: ID){
  removePrintspreviewblock(id: $id){id}
}
`;
