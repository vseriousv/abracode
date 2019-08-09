import { gql } from 'apollo-boost';

export const printsadvantagecardblocksQuery = gql`
query printsadvantagecardblocks{
  printsadvantagecardblocks{
    id
    title
    cart_1_img
    cart_1_header
    cart_1_text
    cart_2_img
    cart_2_header
    cart_2_text
    cart_3_img
    cart_3_header
    cart_3_text
    url
  }
}
`;
