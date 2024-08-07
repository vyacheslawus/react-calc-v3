import "./SwitchMenu.css"
import { products } from "../../data"
import { useState } from "react"

export default function SwitchMenu({ recipe, setRecipe }) {

  const [activePie, setActivePie] = useState(false)
  const [activeBread, setActiveBread] = useState(false)
  const [active, setActive] = useState(false)

  const falsesAll = () => {

      setActiveBread(false)
      setActivePie(false)
      setActive(false)

  }

  const switchColorFunction = (e) => {
    console.log(e.target.id)

    if(e.target.id === "pie") {
      falsesAll()
      setActivePie(true)
      
    } if (e.target.id === "bread") {
      falsesAll()
      setActiveBread(true)
     
    } if (e.target.id === "all") {
      falsesAll()
      setActive(true)
 
    }
    
  }



    return (
        <div className="switch-menu-wrapper">

        <button id="pie" className={activePie ? "switch-menu-button menu-button-active" : "switch-menu-button"} onClick={(e) => {
            switchColorFunction(e)
            setTimeout(() => {

              setRecipe(products.filter(chunk => {
                return (chunk.category === "bread")
              }))

            }, 200)
       
  }} > Хлеб и выпечка</button>
  
        <button id="bread" className={activeBread ? "switch-menu-button menu-button-active" : "switch-menu-button"} onClick={(e) => {
            switchColorFunction(e)
            setTimeout(() => {

              setRecipe(products.filter(chunk => {
                return (chunk.category === "pie")
              }))

            }, 200) 
  
          }} > Кондитерские изделия </button>

          <button id="all" className={active ? "switch-menu-button menu-button-active" : "switch-menu-button"} onClick={(e) => {
            switchColorFunction(e)
            setTimeout(() => {

              setRecipe(products.filter(chunk => {
                return (chunk)
              }))

            }, 200)
          }}>
            Все рецепты
          </button>

        </div>


    )  

}