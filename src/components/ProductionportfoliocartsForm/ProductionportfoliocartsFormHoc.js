import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { styles } from './styles';

import { addProductionportfoliocartMutation, updateProductionportfoliocartMutation } from './mutations';
//import { opsectionsQuery, imageFilesQuery } from './queries';

import { productionportfoliocartsQuery } from '../ProductionportfoliocartsTable/queries';

const withGraphqlMutation = compose(
  graphql(addProductionportfoliocartMutation, {
    props: ({ mutate }) => ({
      addProductionportfoliocart: portfolioCart => mutate({
        variables: portfolioCart,
        refetchQueries: [{ query: productionportfoliocartsQuery }],
      }),
    }),
  }),
  graphql(updateProductionportfoliocartMutation, {
      props: ({ mutate }) => ({
        updateProductionportfoliocart: portfolioCart => mutate({
          variables: portfolioCart,
          refetchQueries: [{ query: productionportfoliocartsQuery }],
        }),
      }),
    })
);
/*
const withGraphqlQueries = compose(
  graphql(opsectionsQuery, { name: "opsectionsQuery"}),
  graphql(imageFilesQuery, { name: "imageFilesQuery"})
);*/

export default compose(withStyles(styles), withGraphqlMutation);
