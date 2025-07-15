import {useDispatch } from 'react-redux';
import { setDisplay } from '../store';
import { useEffect } from 'react';

function DrumPad({pad}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const audio = document.getElementById(pad.key);
    audio.currentTime=0;
    audio.play();
    dispatch(setDisplay(pad.id))
  }



  useEffect(() => {
    const handleKeyPress = (e) => {
            if (e.key.toUpperCase() === pad.key) {
                const audio = document.getElementById(pad.key);
                    if (audio) {
                    audio.currentTime=0;
                    audio.play();
                    dispatch(setDisplay(pad.id))
                }
            }
        };

            document.addEventListener('keydown', handleKeyPress);
            return () => {
                document.removeEventListener('keydown', handleKeyPress)
            };
    }, [pad.key, pad.id, dispatch]);
    
  return (
    
        <button
        onClick= { handleClick}
        key= {pad.key}
        id= {pad.id}
        className= "btn btn-secondary m-2 btn-lg rounded drum-pad">
        {pad.key}
        <audio 
        className="clip"
        id={pad.key}
        src={pad.src}></audio>
        </button>



  )
}

export default DrumPad;
