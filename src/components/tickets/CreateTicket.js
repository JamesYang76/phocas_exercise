import {useState} from 'react';
import {useMutation} from '@apollo/client';
import {useNavigate, useParams} from 'react-router-dom';
import {BOARD_QUERY} from '../../graphql/queries';
import {CREATE_TICKET_MUTATION} from '../../graphql/mutations';
import TicketForm from './TicketForm';

const CreateTicket = () => {
  const { organisation_id, board_id } = useParams();
  const [createTicket, { loading, error }] = useMutation(CREATE_TICKET_MUTATION)
  const navigate = useNavigate();
  const [ticketState, seTicketState] = useState(null);

  const onSubmit = (ticket) => {
    seTicketState(ticket);

    createTicket({
      variables: {
        organisationId: organisation_id,
        boardId: board_id,
        input: {
          name: ticket.name,
          description: ticket.description,
          status: ticket.status,
          visible: ticket.visible
        }
      },
      refetchQueries: [{
        query: BOARD_QUERY,
        variables: {
          organisationId: organisation_id,
          boardId: board_id
        }
      }],
      awaitRefetchQueries: true,
      onCompleted: () => navigate(`/organisation/${organisation_id}/board/${board_id}`)
    });
  };
  if(loading) return <p>Processing...</p>;
  if(error) console.error(error)

  return (
    <div>
      <h3>Create a Ticket</h3>
      {
        error && error.graphQLErrors.map(({ message }, i) => (
          <div key={i}>{message}</div>
        ))
      }
      <TicketForm ticket={ticketState} onSubmit={ onSubmit }/>
    </div>
  );
}

export default CreateTicket;