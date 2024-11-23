import './leninp.css'
const Leninp = ({curlen,chnagelen}) => {
    
  return (
    <div className='passlen'>
        <label htmlFor="len">Password Length:</label>
        <input type="number" placeholder='Enter Length' id='len' value={curlen} onChange={(e)=>chnagelen(Number(e.target.value))}/>
    </div>
  )
}

export default Leninp