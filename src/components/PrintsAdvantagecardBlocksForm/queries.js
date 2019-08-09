import { gql } from 'apollo-boost';

const imageFilesQuery = gql`
query imagefiles{
  imagefiles(type: "images"){
    id
    name
    type
    path
  }
}
`;
const opsectionsQuery = gql`
query opsection{
  opsection{
    id
    name
  }
}
`;

export{imageFilesQuery, opsectionsQuery}
