import "./Card.css"
import Button from "../Button/Button"
import { products } from "../../data"
import { useState } from "react"
import { Product } from "../Product/Product"
import CreateProductForm from "../CreateProductForm/CreateProductForm"
import { CreatePage } from "../CreatePage/CreatePage"
import ProductModal from "../ProductModal/ProductModal"
import { useNavigate } from "react-router-dom"
import StatsBlock from "../StatsBlock/StatsBlock"
export default function Card({ isLoggin }) {


  const [recipe, setRecipe] = useState(products)
  const [activeRecipe, setActiveRecipe] = useState(false)

  const nav = useNavigate()


  const recipeController = () => {
    setActiveRecipe((prev) => !prev)

    
  }

  
  const searchHandler = (e) => {
    const target = e.target.value;

    setRecipe(products.filter((item) => {
      return item.itemName.toLowerCase().includes(target.toLowerCase()) 
     
    }))
  
  }

  return (
    <>



      <button 
      className="btn" 
      // onClick={() => { nav('/create-new-recipe'), console.log('rere') }} 
      onClick={recipeController}
      >
        Создать рецепт
      </button>

    {/* <ProductModal>  hehehehey</ProductModal> */}

      {activeRecipe ? <CreateProductForm setRecipe={setRecipe} recipe={recipe} /> : ''}

      <input
        className="search-input"
        type="text"
        placeholder="Найти рецепт..."
        // style={{
        //   border: "1px solid black",
        //   width: "100%",
        //   padding: "5px",
        //   lineHeight: "1.5rem",
        //   borderRadius: "10px",
        //   marginRight: "5px",
        //   marginLeft: "5px",
        //   marginTop: "1rem",
        //   marginBottom: "1rem",
          
        // }}
        onChange={(e) => { searchHandler(e)}}
      />

<StatsBlock recipe={recipe} setRecipe={setRecipe}></StatsBlock>

{recipe ?  <ul className="list_of_cards">
      {
        
        recipe.length ? 
        recipe.map((item, index) => (
        <Product key={item.id} item={item} recipe={recipe} setRecipe={setRecipe}/>
      )) : 
<div>Рецептов не найдено</div>

      }
</ul> : <div>loading...</div>}

    </>
  )
}