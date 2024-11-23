import './copy.css'
const Copy = ({password,copied}) => {
  
  return (
    <div className="form">
        <form>
            <input type='empty' readOnly value={password} />
            <span onClick={()=>copied()}>Copy</span>
        </form>
    </div>
  )
}

export default Copy