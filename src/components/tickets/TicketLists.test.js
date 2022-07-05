import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import {BrowserRouter as Router} from 'react-router-dom';
import TicketList from "./TicketLists";
const mocks = [];

describe("<TicketList />", () => {
  test('renders with tickets', async () => {

    const tickets = [{
      id: 'TICKET1',
      name: 'TEST'
    }];

    render(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <TicketList
            organisation_id={"ABC"}
            board_id={"123"}
            tickets={tickets}
          />
        </MockedProvider>
      </Router>
    );

    const id = screen.getByText(tickets[0].id);
    expect(id).toBeInTheDocument();

    const name = screen.getByText(tickets[0].name);
    expect(name).toBeInTheDocument();
  });
});