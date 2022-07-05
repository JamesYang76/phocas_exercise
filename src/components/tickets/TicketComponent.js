import { useNavigate } from 'react-router-dom';
import TicketLists from './TicketLists';

const TicketComponent = (props) => {
  const { organisation_id, board_id, tickets} = props;
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(`/organisation/${organisation_id}/board/${board_id}/ticket/new`)}>
        Create a Ticket
      </button>
      <TicketLists
        organisation_id={organisation_id}
        board_id={board_id}
        tickets={tickets}
      />
    </div>
  );
}

export default TicketComponent;
