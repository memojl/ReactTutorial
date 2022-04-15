import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import logo from './logo.svg';
import './assets/css/App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeTxtL1 = (e) =>{
    //console.log(e.target.value);
    setLinea1(e.target.value)
  }

  const onChangeTxtL2 = (e) =>{
    //console.log(e.target.value);
    setLinea2(e.target.value)
  }

  const onChangeImg = (e) =>{
    console.log(e.target.value);
    setImagen(e.target.value)
  }

  const Exportar = () =>{
    html2canvas(document.querySelector("#meme")).then(canvas=>{
      //document.body.appendChild(canvas)
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }


  return (
    <div className="App">
      
      <select onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeTxtL1} type="text" placeholder="Linea 1" /> <br />
      <input onChange={onChangeTxtL2} type="text" placeholder="Linea 2" /> <br />
      <button onClick={Exportar} >Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt='' />
      </div>

    </div>
  );
}

export default App;
