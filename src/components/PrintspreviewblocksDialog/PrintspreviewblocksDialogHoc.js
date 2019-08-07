import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { removePrintspreviewblockMutation } from './mutations';
import { printspreviewblocksQuery } from '../PrintspreviewblocksTable/queries';

const withGraphqlDelete = graphql(removePrintspreviewblockMutation, {
  props: ({ mutate }) => ({
    removePrintspreviewblock: id => mutate({
      variables: id,
      refetchQueries: [{ query: printspreviewblocksQuery }],
    }),
  }),
});

export default compose(withGraphqlDelete);
