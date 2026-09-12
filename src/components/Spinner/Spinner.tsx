import './Spinner.css'

interface SpinnerProps {
  label?: string
}

export function Spinner({ label = 'Loading' }: SpinnerProps) {


  return (
    <span role= 'status'>
        <span className='spinner'></span>
        <span className='visually-hidden' >{label}</span>
    </span>
  )
}
