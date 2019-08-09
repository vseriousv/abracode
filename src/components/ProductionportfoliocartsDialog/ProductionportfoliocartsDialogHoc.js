import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removeProductionportfoliocartMutation } from './mutations';
import { productionportfoliocartsQuery } from '../ProductionportfoliocartsTable/queries';

const withGraphqlDelete = graphql(removeProductionportfoliocartMutation, {
  props: ({ mutate }) => ({
    removeProductionportfoliocart: id => mutate({
      variables: id,
      refetchQueries: [{ query: productionportfoliocartsQuery }],
    }),
  }),
});

export default compose(withGraphqlDelete);
