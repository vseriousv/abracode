import { gql } from 'apollo-boost';

export const addPrintspreviewblockMutation = gql`
mutation addPrintspreviewblock(
  $imgid: String,
  $opsectionid: String,
  $titlepage: String,
  $subtext_1: String,
  $subtext_2: String,
  $subtext_3: String,
  $button_1: String,
  $url_btn_1: String,
  $button_2: String,
  $url_btn_2: String,
  $url: String
){
  addPrintspreviewblock(
    imgid: $imgid,
    opsectionid: $opsectionid,
    titlepage: $titlepage,
    subtext_1: $subtext_1,
    subtext_2: $subtext_2,
    subtext_3: $subtext_3,
    button_1: $button_1,
    url_btn_1: $url_btn_1,
    button_2: $button_2,
    url_btn_2: $url_btn_2,
    url:$url
  ){
    titlepage
  }
}
`;

export const updatePrintspreviewblockMutation = gql`
mutation updatePrintspreviewblock(
  $id: ID,
  $imgid: String,
  $opsectionid: String,
  $titlepage: String,
  $subtext_1: String,
  $subtext_2: String,
  $subtext_3: String,
  $button_1: String,
  $url_btn_1: String,
  $button_2: String,
  $url_btn_2: String,
  $url: String
){
  updatePrintspreviewblock(
    id: $id,
    imgid: $imgid,
    opsectionid: $opsectionid,
    titlepage: $titlepage,
    subtext_1: $subtext_1,
    subtext_2: $subtext_2,
    subtext_3: $subtext_3,
    button_1: $button_1,
    url_btn_1: $url_btn_1,
    button_2: $button_2,
    url_btn_2: $url_btn_2,
    url:$url
  ){
    id
    img{
      name
    }
    opsection{
      name
    }
    titlepage
    subtext_1
    subtext_2
    subtext_3
  }
}
`;
