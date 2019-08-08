import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { styles } from './styles';

import { addPrintspreviewblockMutation, updatePrintspreviewblockMutation } from './mutations';
import { opsectionsQuery, imageFilesQuery } from './queries';

import { printspreviewblocksQuery } from '../PrintspreviewblocksTable/queries';

const withGraphqlMutation = compose(
  graphql(addPrintspreviewblockMutation, {
      props: ({ mutate }) => ({
        addPrintspreviewblock: previewblock => mutate({
          variables: previewblock,
          refetchQueries: [{ query: printspreviewblocksQuery }],
        }),
      }),
    }),
  graphql(updatePrintspreviewblockMutation, {
      props: ({ mutate }) => ({
        updatePrintspreviewblock: previewblock => mutate({
          variables: previewblock,
          refetchQueries: [{ query: printspreviewblocksQuery }],
        }),
      }),
    })
);

const withGraphqlQueries = compose(
  graphql(opsectionsQuery, { name: "opsectionsQuery"}),
  graphql(imageFilesQuery, { name: "imageFilesQuery"})
);

export default compose(withStyles(styles), withGraphqlMutation, withGraphqlQueries);
