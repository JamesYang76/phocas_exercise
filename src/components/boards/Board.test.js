import { render, screen } from '@testing-library/react';
import Board from './Board';

describe("<Board />", () => {
  it('renders with id and name', () => {
    const board = {id: 'ABC-134-5678', name: 'TEST NAME'};
    render(<Board board={board}/>);

    const id = screen.getByText(board.id);
    expect(id).toBeInTheDocument();

    const name = screen.getByText(board.name);
    expect(name).toBeInTheDocument();
  });
});
