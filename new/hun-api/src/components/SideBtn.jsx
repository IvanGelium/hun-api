import '../styles/varDark.css'
import '../styles/SideBtn.css'
import { useNavigate } from 'react-router-dom'

const SideBtn = ({ link, children }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(link)
  }
  return (
    <div className='sideBtn' onClick={handleClick}>
      {children}
    </div>
  )
}
export default SideBtn
