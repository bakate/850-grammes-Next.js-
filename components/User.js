import React from 'react';
import { useQuery, gql } from '@apollo/client';

// TODO! go further
const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      username
    }
  }
`;

const useUser = () => {
  const { error, loading, data } = useQuery(CURRENT_USER_QUERY);
  if (data) return data.me;
};

export { useUser, CURRENT_USER_QUERY };
