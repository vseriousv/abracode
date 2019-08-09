
import { gql } from 'apollo-boost';

export const removeProductionportfoliocartMutation = gql`
mutation removeProductionportfoliocart($id: ID){
  removeProductionportfoliocart(id: $id){id}
}
`;
