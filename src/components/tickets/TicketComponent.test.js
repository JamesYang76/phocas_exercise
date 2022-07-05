import { render, screen } from '@testing-library/react';
import TicketComponent from "./TicketComponent";
import * as router from 'react-router';

const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
jest.mock('./TicketLists', () => {return (props) => <></>;});

describe("<TicketComponent />", () => {
  test('renders with title', async () => {
    const tickets = [{
      id: 'TICKET1',
      name: 'TEST'
    }];

    render(
      <TicketComponent
        organisation_id={'test_id'}
        board_id={'test_board_id'}
        tickets={tickets}
      />
    );

    const button_txt = screen.getByText('Create a Ticket');
    expect(button_txt).toBeInTheDocument();
  });
});