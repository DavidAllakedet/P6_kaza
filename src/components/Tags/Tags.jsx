import '../../styles/Logement.scss'
function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </div>
  )
}
export default Tags
