import { gql } from 'apollo-boost';

export const printspreviewblocksQuery = gql`
query printspreviewblocks{
  printspreviewblocks{
    id
    img{
      name
      type
      path
    }
    opsection{
      name
    }
    titlepage
    subtext_1
    subtext_2
    subtext_3
    button_1
    url_btn_1
    button_2
    url_btn_2
    url
  }
}
`;
