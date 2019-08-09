import { gql } from 'apollo-boost';

export const addPrintsadvantagecardblockMutation = gql`
mutation addprintsadvantagecardblock(
 	$title: String,
	$cart_1_img: String,
  $cart_1_header: String,
  $cart_1_text: String,
  $cart_2_img: String,
  $cart_2_header: String,
  $cart_2_text: String,
  $cart_3_img: String,
  $cart_3_header: String,
  $cart_3_text: String,
  $url: String
){
  addPrintsadvantagecardblock(
    title: $title,
    cart_1_img: $cart_1_img,
    cart_1_header: $cart_1_header,
    cart_1_text: $cart_1_text,
    cart_2_img: $cart_2_img,
    cart_2_header: $cart_2_header,
    cart_2_text: $cart_2_text,
    cart_3_img: $cart_3_img,
    cart_3_header: $cart_3_header,
    cart_3_text: $cart_3_text,
    url: $url
  ){
    title
  }
}
`;

export const updatePrintsadvantagecardblockMutation = gql`
mutation updatePrintsadvantagecardblock(
  $id: ID,
 	$title: String,
	$cart_1_img: String,
  $cart_1_header: String,
  $cart_1_text: String,
  $cart_2_img: String,
  $cart_2_header: String,
  $cart_2_text: String,
  $cart_3_img: String,
  $cart_3_header: String,
  $cart_3_text: String,
  $url: String
){
  updatePrintsadvantagecardblock(
    id: $id,
    title: $title,
    cart_1_img: $cart_1_img,
    cart_1_header: $cart_1_header,
    cart_1_text: $cart_1_text,
    cart_2_img: $cart_2_img,
    cart_2_header: $cart_2_header,
    cart_2_text: $cart_2_text,
    cart_3_img: $cart_3_img,
    cart_3_header: $cart_3_header,
    cart_3_text: $cart_3_text,
    url: $url
  ){
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
