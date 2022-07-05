import { render, screen } from '@testing-library/react';
import TicketForm from './TicketForm';

describe("TicketForm", () => {
  test('renders with ticket properties', () => {
    const ticket = {
      id: 'ABC-134-5678',
      name: 'TEST NAME',
      description: 'TEST DESC',
      status: 'TODO',
      visible: true
    };
    render( <TicketForm ticket={ticket} onSubmit={()=>{}}/>);

    const name = screen.getByTestId('ticket-name');
    expect(name.value).toBe(ticket.name);

    const description = screen.getByText(ticket.description);
    expect(description).toBeInTheDocument();

    const status = screen.getByTestId('ticket-status');
    expect(status.value).toBe(ticket.status);

    const visible = screen.getByTestId('ticket-visible');
    expect(visible.value).toBe(String(ticket.visible));
  });
});
