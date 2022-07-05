import { gql } from '@apollo/client';

export const CREATE_BOARD_MUTATION = gql`
  mutation putBoard($organisationId: ID!, $input: BoardInput!) {
    putBoard(organisationId: $organisationId, boardId: null, input: $input) {
      id
      name
    }
  }
`;

export const CREATE_TICKET_MUTATION = gql`
  mutation putTicket($organisationId: ID!, $boardId: ID!, $input: TicketInput!) {
    putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: null, input: $input) {
      id
      name
      description
      status
      visible
    }
  }
`;

export const UPDATE_TICKET_MUTATION = gql`
  mutation putTicket($organisationId: ID!, $boardId: ID!, $ticketId: ID $input: TicketInput!) {
    putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: $ticketId, input: $input) {
      id
      name
      description
      status
      visible
    }
  }
`;

export const DELETE_TICKET_MUTATION = gql`
  mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
    deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
      id
    }
  }
`;
