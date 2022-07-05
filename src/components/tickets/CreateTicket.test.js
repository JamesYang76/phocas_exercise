import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import CreateTicket from './CreateTicket';
import {MockedProvider} from "@apollo/client/testing";

const mocks = [];

describe("<CreateTicket />", () => {
  test('renders with Title', async () => {
    render(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <CreateTicket />
        </MockedProvider>
      </Router>
    );

    const title = screen.getByText('Create a Ticket');
    expect(title).toBeInTheDocument();
  });
});
