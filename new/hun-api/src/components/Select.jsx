import '../styles/Select.css'
import '../styles/varDark.css'

export default function Select({ title, register, selectArray, name }) {
  return (
    <div className='wholeSelect'>
      <label className='selectLabel' value={title}>
        {title}
      </label>
      <select className='select' {...register(name)}>
        {selectArray.map((el) => {
          return <option key={el.id}>{el.value}</option>
        })}
      </select>
    </div>
  )
}
