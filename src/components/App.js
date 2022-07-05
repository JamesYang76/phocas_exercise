
import {useQuery} from '@apollo/client';
import {ORGANISATION_QUERY} from '../graphql/queries';
import {ORGANISATION_ID} from '../constants';
import Organisation from './organisation/Organisation';

function App() {
  const { loading, error, data } = useQuery(ORGANISATION_QUERY, {
    variables: { organisationId:  ORGANISATION_ID }
  });

  let displayComponent;
  if (loading)  displayComponent = <p>Loading</p>;
  else if(error) displayComponent = <p>Error :(</p>;
  else
    displayComponent = <Organisation organisation={data.organisation}/>

  return (
    <div>
      <h1>Phocas Exercise</h1>
      { displayComponent }
    </div>
  );
}

export default App;
