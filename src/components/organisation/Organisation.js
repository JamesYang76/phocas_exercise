import {Route, Routes} from 'react-router-dom';

import BoardComponent from '../boards/BoardComponent';
import BoardDetail from '../boards/BoardDetail';
import CreateTicket from '../tickets/CreateTicket';
import EditTicket from '../tickets/EditTicket';

const Organisation = (props) => {
  const {organisation} = props;
  return (
    <div>
      <h2>{organisation.name}({organisation.id})</h2>
      <Routes>
        <Route
          path="/"
          element={
            <BoardComponent
              boards={organisation.boards}
              organisation_id={organisation.id}
            />
          }
        />
        <Route
          path="/organisation/:organisation_id/board/:id"
          element={<BoardDetail />}
        />
        <Route
          path="/organisation/:organisation_id/board/:board_id/ticket/new"
          element={<CreateTicket />}
        />
        <Route
          path="/organisation/:organisation_id/board/:board_id/ticket/:id/edit"
          element={<EditTicket />}
        />
      </Routes>
    </div>
  );
}

export default Organisation;
