import './App.css';

const drumPad = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
let audio = new Audio(`[""]`)
  const play = () => {
    audio.play()
  }
function App() {   
  return (
    <div className="App" id="drum-machine">
        <div id="display">
          <div id="drum-pad" className="drum-pad">
            <button className="drum-pad" id="Q" onClick={play}>Q
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q">Q
              </audio>
            </button>
            <button className="drum-pad" id="W">W
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W" onClick={play}>W
              </audio>
            </button>
            <button className="drum-pad" id="E">E
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E" onClick={play}>E
              </audio>
            </button>
            <button className="drum-pad" id="A">A
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A" onClick={play}>A
              </audio>
            </button>
            <button className="drum-pad" id="S">S
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S" onClick={play}>S
              </audio>
            </button>
            <button className="drum-pad" id="D">D
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D" onClick={play}>D
              </audio>
            </button>
            <button className="drum-pad" id="Z">Z
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z" onClick={play}>Z
              </audio>
            </button>
            <button className="drum-pad" id="X">X
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X" onClick={play}>X
              </audio>
            </button>
            <button className="drum-pad" id="C">C
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C" onClick={play}>C
              </audio>
            </button>
          </div>
        </div>
    </div>
  );
}


export default App;
