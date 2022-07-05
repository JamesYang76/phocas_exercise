import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Organisation from './Organisation';

jest.mock('../boards/BoardComponent', () => {return () => <></>;});
jest.mock('../boards/BoardDetail', () => {return () => <></>;});
jest.mock('../tickets/CreateTicket', () => {return () => <></>;});
jest.mock('../tickets/EditTicket', () => {return () => <></>;});


describe("<Organisation />", () => {
  it('renders with id and name', () => {
    const organisation = {id: 'ABC-134-5678', name: 'TEST NAME'};

    render(
      <Router>
        <Organisation organisation={organisation}/>
      </Router>
    );

    const id = screen.getByText(new RegExp(organisation.id, 'i'));
    expect(id).toBeInTheDocument();

    const name = screen.getByText(new RegExp(organisation.name, 'i'));
    expect(name).toBeInTheDocument();
  });
});
