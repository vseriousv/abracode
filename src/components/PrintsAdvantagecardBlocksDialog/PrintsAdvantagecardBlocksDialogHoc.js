import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removePrintsadvantagecardblockMutation } from './mutations';
import { printsadvantagecardblocksQuery } from '../PrintsAdvantagecardBlocksTable/queries';

const withGraphqlDelete = graphql(removePrintsadvantagecardblockMutation, {
  props: ({ mutate }) => ({
    removePrintsadvantagecardblock: id => mutate({
      variables: id,
      refetchQueries: [{ query: printsadvantagecardblocksQuery }],
    }),
  }),
});

export default compose(withGraphqlDelete);
