import { useNavigate } from 'react-router-dom';
import './BoardList.css';
import Board from './Board';

const BoardList = (props) => {
  const {boards, organisation_id} = props;
  const navigate = useNavigate();

  return (
    <div>
      <h3>Board List</h3>
      <ul className="board__list">
        {
          boards &&
          (
            boards.map((board) => {
              return(
                <li
                  key={board.id}
                >
                  <Board board={board} />
                  <button onClick={() => navigate(`/organisation/${organisation_id}/board/${board.id}`)}>
                    Details
                  </button>
                </li>
              )
            })
          )
        }
      </ul>
    </div>
  );
}

export default BoardList;
