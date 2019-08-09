import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { styles } from './styles';

import { addPrintsadvantagecardblockMutation, updatePrintsadvantagecardblockMutation } from './mutations';
//import { opsectionsQuery, imageFilesQuery } from './queries';

import { printsadvantagecardblocksQuery } from '../PrintsAdvantagecardBlocksTable/queries';


const withGraphqlMutation = compose(
  graphql(addPrintsadvantagecardblockMutation, {
        props: ({ mutate }) => ({
          addPrintsadvantagecardblock: advantageblock => mutate({
            variables: advantageblock,
            refetchQueries: [{ query: printsadvantagecardblocksQuery }],
          }),
        }),
      }),
  graphql(updatePrintsadvantagecardblockMutation, {
      props: ({ mutate }) => ({
        updatePrintsadvantagecardblock: advantageblock => mutate({
          variables: advantageblock,
          refetchQueries: [{ query: printsadvantagecardblocksQuery }],
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
