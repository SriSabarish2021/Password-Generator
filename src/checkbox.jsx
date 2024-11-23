import './checkbox.css'
const Checkbox = ({upper,chnageupper,lower,chnagelower,num,chnagenum,spcl,chnagespcl}) => {
    
    
    return (
    <div className='chckbox'>
        <div className='box'>
            <input type="checkbox" id="upper" checked={upper} onChange={(e)=>chnageupper(e.target.checked)}/>
            <label htmlFor="upper">include uppercase</label>
        </div>
        <div  className='box'>
            <input type="checkbox" id="lower" checked={lower} onChange={(e)=>chnagelower(e.target.checked)}/>
            <label htmlFor="lower">include Lowercase</label>
        </div>
        <div  className='box'>
            <input type="checkbox" id="num" checked={num} onChange={(e)=>chnagenum(e.target.checked)}/>
            <label htmlFor="num">include Number</label>
        </div>
        <div  className='box'>
            <input type="checkbox" id="spc" checked={spcl} onChange={(e)=>chnagespcl(e.target.checked)}/>
            <label htmlFor="spc">include Special Char</label>
        </div>
    </div>
  )
}

export default Checkbox