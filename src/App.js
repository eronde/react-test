import React, {useEffect} from 'react'
import './App.css';
import Amplify, {API} from 'aws-amplify'
import config from './aws-exports'
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

import Datatable from './datatable'
Amplify.configure(config)
function App() {
  const [petName, setPetName] = React.useState('')
  const [petType, setPetType] = React.useState('')
  const [pets, setPets] = React.useState([])
  useEffect(() => {
    API
      .get('petapi', '/pets/Name')
      .then(petRes => {
        console.log(petRes)
        setPets(petRes)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post('petapi', '/pets', {
      body: {
        Name: petName,
        Type: petType,

      },
    }).then(fetchPetch => {
      setPets([...pets, {Name: petName, Type: petType}])
    })
  };
  return (
    <div className="App">
      <header className="App-header">
        Hello
      <form onSubmit={handleSubmit}>
          <input value={petName} placeholder="petName" onChange={(e) => setPetName(e.target.value)} />
          <input value={petType} placeholder="petType" onChange={(e) => setPetType(e.target.value)} />
          <button> Add pet </button>
        </form>
        <div>

          <Datatable data={pets} />
        </div>

        <AmplifySignOut />
      </header>usestate
    </div>
  );
}

export default withAuthenticator(App);


