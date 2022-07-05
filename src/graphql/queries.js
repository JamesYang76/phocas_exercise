import { gql } from '@apollo/client';

export const ORGANISATION_QUERY = gql`
  query organisation($organisationId: ID!) {
    organisation(organisationId: $organisationId) {
      id
      name
      boards {
        id
        name
      }
    }
  }
`;

export const BOARD_QUERY = gql`
  query board($organisationId: ID!, $boardId: ID!) {
    board(organisationId: $organisationId, boardId: $boardId) {
      id
      name
      tickets {
        id
        name
      }
    }
  }
`;

export const TICKET_QUERY = gql`
  query ticket($organisationId: ID!, $ticketId: ID!) {
    ticket(organisationId: $organisationId, ticketId: $ticketId) {
      id
      name
      description
      status
      visible
    }
  }
`;
