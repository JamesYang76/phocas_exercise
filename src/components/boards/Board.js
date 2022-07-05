const Board = (props) => {
  const {board} = props;

  return (
    <div>
      <dl>
        <dt>ID</dt>
        <dd>{board.id}</dd>
        <dt>Name</dt>
        <dd>{board.name}</dd>
      </dl>
    </div>
  );
};

export default Board;
