import '../styles/SubmitBtn.css'
import '../styles/varDark.css'

const SubmitBtn = ({ register, title }) => {
  return (
    <>
      <input
        {...register('submitBtn')}
        type='submit'
        className='submitBtn'
        value={title}
      ></input>
    </>
  )
}

export default SubmitBtn
