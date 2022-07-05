import {useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {BOARD_QUERY} from '../../graphql/queries';
import {DELETE_TICKET_MUTATION} from '../../graphql/mutations';

const TicketLists = (props) => {
  const {organisation_id, board_id, tickets } = props;
  const navigate = useNavigate();
  const [deleteTicket, {loading, error}] = useMutation(DELETE_TICKET_MUTATION)

  const onDelete = (ticket) => {
    deleteTicket({
      variables: {
        organisationId: organisation_id,
        ticketId: ticket.id
      },
      refetchQueries: [{
        query: BOARD_QUERY,
        variables: {
          organisationId: organisation_id,
          boardId: board_id
        }
      }],
      awaitRefetchQueries: true,
    })
  }

  if(error) console.error(error);

  return (
    <div>
      <h4>Tick List</h4>
      {
        loading && <p>Processing...</p>
      }
      {
        error && error.graphQLErrors.map(({ message }, i) => (
          <div key={i}>{message}</div>
        ))
      }
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td colSpan="2">Operations</td>
          </tr>
        </thead>
        <tbody>
        {
          tickets.map((ticket) => {
            return (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.name}</td>
                <td>
                  {
                    <button onClick={() => navigate(`/organisation/${organisation_id}/board/${board_id}/ticket/${ticket.id}/edit`)}>
                      Edit
                    </button>
                  }
                </td>
                <td>{<button onClick={() => onDelete(ticket)}>Delete</button>}</td>
              </tr>
            )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default TicketLists;