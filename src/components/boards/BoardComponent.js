import CreateBoard from './CreateBoard';
import BoardList from "./BoardList";

const BoardComponent = (props) => {
  const {organisation_id, boards} = props;

  return (
    <div>
      <CreateBoard organisation_id={organisation_id} />
      <BoardList organisation_id={organisation_id} boards={boards}/>
    </div>
  );
}

export default BoardComponent;
