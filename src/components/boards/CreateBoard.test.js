import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import CreateBoard from './CreateBoard';
const mocks = [];

describe("<CreateBoard />", () => {
  test('renders with input elements', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreateBoard organisation_id={'TEST_ID'}/>
      </MockedProvider>
    );

    const title = screen.getByText('Create a Board');
    expect(title).toBeInTheDocument();

    const label = screen.getByText('Name:');
    expect(label).toBeInTheDocument();

    const name = screen.getByTestId('create-board-name');
    expect(name).toBeInTheDocument();
  });
});
