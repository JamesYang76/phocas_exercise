import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import EditTicket from './EditTicket';
import {MockedProvider} from "@apollo/client/testing";

const mocks = [];

describe("<EditTicket />", () => {
  test('renders with Loading', async () => {
    render(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <EditTicket  organisation_id={'org_id'} board_id={'board_id'} id={'id'} />
        </MockedProvider>
      </Router>
    );

    const title = screen.getByText('Loading');
    expect(title).toBeInTheDocument();
  });
});
