import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import BoardList from './BoardList';

describe('<BoardList />', () => {
  it('renders with boards properties', () => {
    const boards = [{id: 'ABC-134-5678', name: 'TEST NAME'}];
    render(
      <Router>
        <BoardList organisation_id={'TEST ID'} boards={boards}/>
      </Router>
    );

    const title = screen.getByText('Board List');
    expect(title).toBeInTheDocument();

    const id = screen.getByText(boards[0].id);
    expect(id).toBeInTheDocument();

    const name = screen.getByText(boards[0].name);
    expect(name).toBeInTheDocument();

    const detail_button = screen.getByText('Details');
    expect(detail_button).toBeInTheDocument();
  });
});
