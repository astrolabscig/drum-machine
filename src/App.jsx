import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import DrumPad from './components/DrumPad.jsx'
import Heater1 from './assets/Heater-1.mp3'
import Heater2 from './assets/Heater-2.mp3'
import Heater3 from './assets/Heater-3.mp3'
import Heater4 from './assets/Heater-4_1.mp3'
import Clap from './assets/Heater-6.mp3'
import Kick_n_Hat from './assets/Kick_n_Hat.mp3'
import RP4_KICK_1 from './assets/RP4_KICK_1.mp3'
import Dsc_Oh from './assets/Dsc_Oh.mp3'
import Cev_H2 from './assets/Cev_H2.mp3'

import './App.css';

function App() {
  const displayText = useSelector(state => state.display)

  const drumPads = [
    {
      key:  'Q',
      id: 'Heater-1',
      src: Heater1
    },
    {
      key:  'W',
      id: 'Heater-2',
      src: Heater2
    },
    {
      key:  'E',
      id: 'Heater-3',
      src: Heater3
    },
    {
      key:  'A',
      id: 'Heater-4',
      src: Heater4
    },
    {
      key:  'S',
      id: 'Clap',
      src: Clap
    },
    {
      key:  'D',
      id: 'Kick_n_Hat',
      src: Kick_n_Hat
    },
    {
      key:  'Z',
      id: 'Kick',
      src: RP4_KICK_1
    },
    {
      key:  'X',
      id: 'Open-HH',
      src: Dsc_Oh
    },
    {
      key:  'C',
      id: 'Closed-HH',
      src: Cev_H2
    },
  ];



  return (
    <div id="drum-machine" className="container text-center mt-5">
      <h1>DRUM MACHINE</h1>

      <div id="display" className="alert alert-primary">
        {displayText}
      </div>


      <div className="row justify-content-center d-flex flex-wrap">
        {drumPads.map( pad => (
          <DrumPad key={pad.id} pad={pad} />
        ))}

      </div>


    </div>
  )
}

export default App
