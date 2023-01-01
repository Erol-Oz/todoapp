import 'animate.css';
function List({ forms, setForms }) {

  
  const removeMission = (todoIndex) => {
    const newList = forms.filter((_, index) =>
      index != todoIndex)
    setForms(newList)
    }

  return (
    <div>
      <ul>
        {
          forms.map((form, index) => <div className='animate__bounceInRight' id="listItem" key={index}> {form} <button id="button" onClick={() => removeMission(index)} >Delete</button></div>)
        }

      </ul>
    </div>
  )
}

export default List
