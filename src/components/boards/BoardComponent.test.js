import { render, screen } from '@testing-library/react';
import BoardComponent from './BoardComponent';

jest.mock('./CreateBoard', () => {return () => <div data-testid='create-board' />;});
jest.mock('./BoardList', () => {return () => <div data-testid='board-list' />;});

describe("<BoardComponent />", () => {
  it('renders with CreateBoard and BoardList', () => {
    const board = {id: 'ABC-134-5678', name: 'TEST NAME'};
    render(<BoardComponent organisation_id={'TEST_ID'} board={board}/>);

    const CreateBoard = screen.getByTestId('create-board');
    expect(CreateBoard).toBeInTheDocument();

    const BoardList = screen.getByTestId('board-list');
    expect(BoardList).toBeInTheDocument();
  });
});
