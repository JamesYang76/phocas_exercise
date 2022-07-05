import { useState } from 'react';

const TicketForm = (props) => {
  const { onSubmit, ticket } = props;
  const [formState, setFormState] = useState({
    id: ticket ? ticket.id : null,
    name: ticket ? ticket.name : '',
    description: ticket ? ticket.description : '',
    status: ticket ? ticket.status : 'TODO',
    visible: ticket ? ticket.visible : true
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            id: formState.id,
            name: formState.name,
            description: formState.description,
            status: formState.status,
            visible: formState.visible
          });
        }}
      >
        <label>
          Name:
          <br />
          <input
            type='text'
            placeholder='Input a name'
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            data-testid='ticket-name'
          />
        </label>
        <br /><br />
        <label>
          Description:
          <br />
          <textarea
            rows='4'
            placeholder='Input a Description'
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
          />
        </label>
        <br /><br />
        <label>
          Status:
          <br />
          <select
            value={formState.status}
            onChange={(e) =>
              setFormState({
                ...formState,
                status: e.target.value
              })
            }
            data-testid='ticket-status'
          >
            <option value={'TODO'}>TODO</option>
            <option value={'INPROGRESS'}>INPROGRESS</option>
            <option value={'DONE'}>DONE</option>
          </select>
        </label>
        <br /><br />
        <label>
          Visible:
          <br />
          <select
            value={formState.visible}
            onChange={(e) =>
              setFormState({
                ...formState,
                visible: e.target.value
              })
            }
            data-testid='ticket-visible'
          >
            <option value={true}>YES</option>
            <option value={false}>NO</option>
          </select>
        </label>
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default TicketForm;
