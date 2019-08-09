import { gql } from 'apollo-boost';

export const productionportfoliocartsQuery = gql`
query productionportfoliocarts{
  productionportfoliocarts{
    id
    img
    header
    text
    url
  }
}
`;
