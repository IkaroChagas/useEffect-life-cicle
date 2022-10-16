import {useState, useEffect} from 'react';
import './App.css';

function App() {
 const [count, setCount] = useState(0)
 const [countb, setCountB] = useState(5)


 // life cicle - mount updatemount e unmount que é a criação do componente a atualização do componente e por último a "morte do componente" com um clearupFunction


 useEffect(() => {
  console.log('Roda a cada renderização')
 }) 

 useEffect(() => {
  console.log('Só roda se incrementar valor')

 }, [count] ) // Aqui além de ser renderizado o array de dependencias serve como observador da renderização

 useEffect(() => {
  console.log('Só executa uma vez')
 }, [])

 // encerrando o ciclo de um componente existe a clean-up function

 useEffect(() => {
  const timer = setTimeout(() => {
    console.log(`O incrementador foi alterado ${count} vezes`)
  }, 2000)

  return () => {
    clearTimeout(timer)
  }


 }, [count])


  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount +1)}>Renderizar +1</button>
      <p>{count}</p>
      <br/>
      <button onClick={() => setCountB(prevCount => prevCount -1)}>Renderizar -1</button>
      <p>{countb}</p>
    </div>
  );
}

export default App;
