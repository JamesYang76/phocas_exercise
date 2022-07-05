import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import BoardDetail from './BoardDetail';

describe('<BoardDetail>', () => {
  it('<BoardDetail /> renders with Loading', async () => {

     render(
      <MockedProvider mocks={[]} addTypename={false}>
        <BoardDetail />
      </MockedProvider>
    );

    const title = screen.getByText('Loading');
    expect(title).toBeInTheDocument();
  });
});
