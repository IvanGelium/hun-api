import '../styles/varDark.css'
import '../styles/SimpleButton.css'

export default function SimpleButton({ title, name = 'button', callback }) {
  return (
    <div className={`simpleButton ${name}`} id={name} onClick={callback}>
      {title}
    </div>
  )
}
