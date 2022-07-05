import { useParams } from 'react-router-dom';
import {useQuery} from '@apollo/client';

import {BOARD_QUERY} from '../../graphql/queries';
import Board from './Board';
import TicketComponent from '../tickets/TicketComponent';

const BoardDetail = () => {

  const { organisation_id, id } = useParams();
  const { loading, error, data } = useQuery(BOARD_QUERY, {
    variables: {
      organisationId: organisation_id,
      boardId: id
    }
  });

  if(loading) return <p>Loading</p>;
  if(error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Board Details</h3>
      <Board board={data.board} />
      <TicketComponent
        board_id={id}
        organisation_id={organisation_id}
        tickets={data.board.tickets}
      />
    </div>
  );
};

export default BoardDetail;
