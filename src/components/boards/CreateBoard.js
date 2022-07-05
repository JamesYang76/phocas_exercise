import { useState } from 'react';
import { useMutation } from '@apollo/client';

import {CREATE_BOARD_MUTATION} from '../../graphql/mutations';
import { ORGANISATION_QUERY } from '../../graphql/queries';

const CreateBoard = (props) => {
  const {organisation_id} = props;

  const [formState, setFormState] = useState({
    organisation_id: organisation_id,
    name: ''
  });

  const [createBoard, { loading, error }] = useMutation(CREATE_BOARD_MUTATION, {
    variables: {
      organisationId: formState.organisation_id,
      input: {
        name: formState.name
      }
    },
    refetchQueries: [{
      query: ORGANISATION_QUERY,
      variables: { organisationId: formState.organisation_id },
    }],
    awaitRefetchQueries: true
  });

  if(error) console.error(error);

  return (
    <div>
      <h3>Create a Board</h3>
      {
        error && error.graphQLErrors.map(({ message }, i) => (
          <div key={i}>{message}</div>
        ))
      }
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBoard();
        }}
      >
        <label>
          Name:
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
            data-testid='create-board-name'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      {
        loading && <p>Processing...</p>
      }
    </div>
  );
}

export default CreateBoard;
