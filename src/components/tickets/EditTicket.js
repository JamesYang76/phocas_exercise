import {useNavigate, useParams} from 'react-router-dom';
import {useMutation, useQuery} from "@apollo/client";
import {BOARD_QUERY, TICKET_QUERY} from "../../graphql/queries";
import { UPDATE_TICKET_MUTATION } from '../../graphql/mutations';
import TicketForm from "./TicketForm";

const EditTicket = () => {
  const { organisation_id, board_id, id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(TICKET_QUERY, {
    variables: {
      organisationId: organisation_id,
      ticketId: id
    }
  });

  const [updateTicket, update={loading, error}] = useMutation(UPDATE_TICKET_MUTATION)

  const onSubmit = (ticket) => {
    updateTicket({
      variables: {
        organisationId: organisation_id,
        boardId: board_id,
        ticketId: ticket.id,
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
      onCompleted: () => navigate(`/organisation/${organisation_id}/board/${board_id}`)
    });
  }

  if(loading) return <p>Loading</p>;
  if(error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Edit a Ticket</h3>
      {update.loading && <p>Processing...</p>}
      {
        update.error && update.error.graphQLErrors.map(({ message }, i) => (
          <div key={i}>{message}</div>
        ))
      }
      <TicketForm ticket={data.ticket} onSubmit={ onSubmit }/>
    </div>
  );
}

export default EditTicket;