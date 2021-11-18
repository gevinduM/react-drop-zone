import { useState } from 'react';
import { DropContainer  }  from './app.style'
import { v4 as uuidv4 } from 'uuid';
import DropZone from '../components/DropZone'

const App = () =>{

  const [dropZonesList, setDropZonesList] = useState([{ id: uuidv4() }]);
  const addAnother = () => {
    setDropZonesList([...dropZonesList, { id: uuidv4() }]);
  }

  const dropZones = dropZonesList.map(zone => <DropZone key={zone.id} updateDropZones={addAnother} />);

  return (
    <DropContainer disableGutters={true}>
       {dropZones}
    </DropContainer>
  )
}

export default App;