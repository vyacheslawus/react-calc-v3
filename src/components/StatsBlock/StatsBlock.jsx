import "./StatsBlock.css"
import { products } from "../../data"
import SwitchMenu from "../SwitchMenu/SwitchMenu";

export default function StatsBlock({ recipe, setRecipe }) {
console.log(recipe)
// console.log(products)

let cakes = 0;
let bread = 0;




    products.forEach(item => {
        if (item.category === "bread") {
            bread += 1;
        }
        
        if (item.category === "pie") {
            cakes += 1;
        }
    })


    return (
      <>

      {/* <details>
        <summary> 
            click here

        </summary>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore aut neque doloribus beatae. Quasi amet ipsa perspiciatis voluptates provident?</p>

        <p>asdsadsad asd sadas  d</p>


      </details> */}



  
  <div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5px",
            fontSize: "13px"
        }}>

            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>

<p style={{
    marginBottom: "10px"
}}>Всего рецептов:   
    <span style={{
            color: " rgb(9, 117, 226)",
            fontSize: "14px"
        }}> 
        {" " + products.length}
    </span> 
    </p>



            </div>

            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
            <p style={{
    marginBottom: "10px"
}}> из них хлеба и выпечки: 
        <span style={{
            color: " rgb(9, 117, 226)",
            fontSize: "14px"
        }} >{" " + bread}</span>
                </p>
           

                <p>кондитерских изделий:


        <span style={{
            color: " rgb(9, 117, 226)",
            fontSize: "14px"
        }}>

{" " + cakes}
        </span>

     
</p>
    
            {/* <p>baked: <span>3</span> </p> */}
            
            </div>
            
        </div>


      <SwitchMenu recipe={recipe} setRecipe={setRecipe}></SwitchMenu>
  </div>
  
      </>
    )
  }