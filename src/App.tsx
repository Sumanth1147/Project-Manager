
import {Button} from './components/Button'

function App() {


  return (
    <>
     <p>Dev Board</p>
     <Button  variant='primary'  onClick={() => console.log('primary button clicked')} >Primary </Button>
     <Button  variant='secondary'  onClick={() => console.log('secondary button clicked')} >Secondary </Button>
     <Button  variant='danger'  onClick={() => console.log('danger button clicked')} disabled >Danger </Button>
    </>
  )
}

export default App
