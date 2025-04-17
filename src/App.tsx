import './App.css'
import CardPerson from './components/home/CardPerson'
import ItemsPerson from './components/items/ItemsPerson'

function App() {

  return (
    <>
      <div className='bg-black h-screen w-screen flex flex-col items-center justify-center'>
        <CardPerson/>
        <ItemsPerson/>
      </div>
    </>
  )
}

export default App
