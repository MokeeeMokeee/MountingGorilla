import React from 'react';
import { gql } from '@apollo/client';

// MainPage Query
export const GET_MOUNTING = gql`
  query MyQuery {
    mountTable(order_by: { id: desc }) {
      id
      bad
      detail
      like
    }
  }
`;

//  mounting Query
export const GET_GOOD_MOUNTING = gql`
  query MyQuery {
    mountTable(order_by: { like: desc }) {
      id
      bad
      detail
      like
    }
  }
`;

// noMounting query
export const GET_NOT_MOUNTING = gql`
  query MyQuery {
    mountTable(order_by: { bad: desc }) {
      id
      bad
      detail
      like
    }
  }
`;

// update like Count
export const UPDATE_LIKE_COUNT = gql`
  mutation update_mountTable($id: Int!, $like: Int!) {
    update_mountTable(_set: { like: $like }, where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

// update bad Count
export const UPDATE_BAD_COUNT = gql`
  mutation update_mountTable($id: Int!, $bad: Int!) {
    update_mountTable(_set: { bad: $bad }, where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

// post Query
export const ADD_MOUNT = gql`
  mutation insert_mountTable($detail: String!) {
    insert_mountTable(objects: { detail: $detail }) {
      returning {
        id
      }
    }
  }
`;
