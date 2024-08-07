import './CreateProductForm.css'
import Button from '../Button/Button'
import { useRef, useState } from 'react'



export default function CreateProductForm({ setRecipe, style, recipe }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [inputElements, setInputElements] = useState([]);

    const imageInputRef = useRef()
    const nameInputRef = useRef()
    const descrptionInputRef = useRef()


  const createRecipe = (e) => {
    e.preventDefault()

    const splitString = imageInputRef.current.value
    const stringArr = Array.from(splitString)


    if (!stringArr.includes(('h', 't', 't', 'p', ':', '/')) || splitString === '') {
      alert('Поле должно содержать строку ссылочного типа: "http://your-link-to-picture.jpg')
      
      
      return 
 
    }

    if (nameInputRef.current.value === '' || descrptionInputRef.current.value === '') {
            alert('Поля не должны быть пустыми')
      return
    }

    const newRecipe = {
      itemName: name,
      description,
      image
    }

    setRecipe([newRecipe, ...recipe])
    setName('')
    setDescription('')
    setImage('')
  }

  const addNewField = (e) => {

    e.preventDefault(e)

      const newInputElement = {
      id: inputElements.length + 1,
      name: "название ингредиента",
      amount: "количество в гр.",
      type: "text",
    };

    setInputElements([...inputElements, newInputElement])

  }

const removeField = () => {
  
}

  return (
    <form className="" style={style}>
      <input
        type="text"
        placeholder='Название продукта'
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}
        required
        ref={nameInputRef}

      />

      <input
        type="text"
        placeholder='Описание продукта'
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}
        required
        ref={descrptionInputRef}

      />

      <input
        type="text"
        placeholder='Картинка (только ссылка URL)'
        onChange={(e) => {
          setImage(e.target.value)
        }}
        value={image}
        ref={imageInputRef}
      />


   {inputElements.map((inputElement) => (
          
            <div className="label-element label-ingredients" key={inputElement.id}>
              <h3>Ингредиент {inputElement.id} </h3>
              {/* <label htmlFor="">{inputElement.name}</label> */}
              <input type={inputElement.type} placeholder={inputElement.name} onChange={() =>console.log('huy' + inputElement.id) }/>
              {/* <label htmlFor="">{inputElement.amount}</label> */}
              <input type={inputElement.type} placeholder={inputElement.amount}/>
              <Button style={"btn plus-btn"} click={() => {
                setInputElements(inputElements.filter(item => item.id !== inputElement.id))
              }}>-</Button>
            </div>

          ))}

      <strong>Добавить ингредиент</strong>

      <Button style={"btn active plus-btn"} click={(e) => addNewField(e)}>+</Button>

      <Button style={"btn"} click={(e) => { createRecipe(e) }}>Добавить новый продукт</Button>
    </form>
  )
}