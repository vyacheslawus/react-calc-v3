
import { useNavigate } from "react-router-dom"
import Header from "../Header/Header"
import "./CreatePage.css"
import { Eraser, CircleCheckBig } from 'lucide-react'
import { useState } from "react"






export const CreatePage = () => {


  const [inputElements, setInputElements] = useState([]);

  const nav = useNavigate();

  const addIngHandle = (e) => {
    e.preventDefault();
    console.log("add ing");

    const newInputElement = {
      id: inputElements.length + 1,
      name: "название ингредиента",
      amount: "количество в гр.",
      type: "text",
    };

    setInputElements([...inputElements, newInputElement]);
  };

  return (
    <>
      <Header></Header>
      <h2>welcome to the create new card page</h2>

      <form action="">

        <div className="label-element" >
          <label htmlFor="">Наименование рецептуры</label>
          <input type="text" />

          <label htmlFor="">Описание продукта </label>
          <input type="text" />

          <p>Добавить поле для ингредиента</p>
          <button className="btn" onClick={(e) => addIngHandle(e)}>
            +
          </button>

          {inputElements.map((inputElement) => (
            <div className="label-element label-ingredients" key={inputElement.id}>
              <h3>Ингредиент {inputElement.id} </h3>
              <label htmlFor="">{inputElement.name}</label>
              <input type={inputElement.type} />
              <label htmlFor="">{inputElement.amount}</label>
              <input type={inputElement.type} />

              <h3>add also</h3>
              <button className="btn" onClick={(e) => addIngHandle(e)}>
                +
              </button>
            </div>


          ))}
        </div>



        <button className="btn">
          create <CircleCheckBig />
        </button>
        <button className="btn" onClick={() => nav("/")}>
          back
        </button>
      </form>
    </>
  );
};

// export const CreatePage = () => {



//   const nav = useNavigate()

//   const addIngHandle = (e) => {
//     e.preventDefault()
//     console.log("add ing")

//     return (
//       <div className="label-element">

//         <label htmlFor="">name of product</label>
//         <input type="text" />

//       </div>
//     )
//   }

//   return (

//     <>

//       <Header></Header>
//       <h2>welcome to the create new card page</h2>

//       <form action="">

//         <div className="label-element">

//           <label htmlFor="">name of product</label>
//           <input type="text" />

//         </div>


//         <button className="btn" onClick={(e) => { addIngHandle(e) }}>add ingredient</button>

//         <button className="btn">create <CircleCheckBig /> </button>
//         <button className="btn" onClick={() => { nav('/') }} >back</button>



//       </form>
//     </>
//   )

// }