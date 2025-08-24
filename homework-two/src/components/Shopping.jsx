const Shopping = ({name,brand,type}) => {

  return (
    <li>
      <h3>{name}</h3>
      <p>
        {brand}
      </p>
      <p>
        {type}
      </p>
    </li>
  )
}
export default Shopping