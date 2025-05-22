import '../styles/Checkbox.css'
import '../styles/varDark.css'

const Checkbox = ({ register, title, name }) => {
  return (
    <div className='checkbox-wrapper'>
      <label htmlFor={name}>{`${title}: `}</label>
      <input
        {...register(name)}
        type='checkbox'
        className={`checkbox ${name}`}
      />
    </div>
  )
}

export default Checkbox
