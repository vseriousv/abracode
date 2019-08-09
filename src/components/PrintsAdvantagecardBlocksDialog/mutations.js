
import { gql } from 'apollo-boost';

export const removePrintsadvantagecardblockMutation = gql`
mutation removePrintsadvantagecardblock($id: ID){
	removePrintsadvantagecardblock(id: $id){id}
}
`;
