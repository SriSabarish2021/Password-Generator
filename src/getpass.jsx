import './btn.css'
const Getpass = ({getterpass}) => {
  
  return (
    <div className='btn'>
        <button type='button' onClick={()=>getterpass()}>Get Password</button>
    </div>
  )
}

export default Getpass