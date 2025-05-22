import '../styles/SimpleField.css'
import '../styles/varDark.css'

const SField = ({ register, name, title }) => {
  return (
    <>
      <div className='fieldContainer'>
        <label name={name}>{title}</label>
        <input
          {...register(name)}
          id={name}
          type='text'
          className='field'
        ></input>
      </div>
    </>
  )
}

export default SField
