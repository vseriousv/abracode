import { gql } from 'apollo-boost';

export const addProductionportfoliocartMutation = gql`
mutation addProductionportfoliocart($img: String, $header: String, $text: String, $url: String){
  addProductionportfoliocart(img: $img, header: $header, text: $text, url: $url){
    id
    img
    header
    text
    url
  }
}
`;

export const updateProductionportfoliocartMutation = gql`
mutation updateProductionportfoliocart($id: ID, $img: String, $header: String, $text: String, $url: String){
  updateProductionportfoliocart(id: $id, img: $img, header: $header, text: $text, url: $url){
    id
    img
    header
    text
    url
  }
}
`;
