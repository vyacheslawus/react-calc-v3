import { useParams } from "react-router-dom"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import { products } from "../../data"
import Header from "../Header/Header"
import CreateProductForm from "../CreateProductForm/CreateProductForm"
import { NotebookTabs } from 'lucide-react'


export const DetailsPage = () => {



  const { id } = useParams()


  const product = products[id]
  return (
    <section style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    }}>

      <Header />
    
      <h2 style={{
        marginBottom: "2rem",
        marginTop: "1rem",
        padding: "10px"
      }}>Oписание процесса:  
      <br/>
      <span style={{ color: "red", fontWeight: "bold", textAlign: "center" }}> {product.itemName} </span> </h2 >
      <h4 style={{
        lineHeight: "1.5rem",
        padding: "0.5rem",
        fontWeight: "normal",
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "2rem",
          width: "25rem"
        }}>

          <NotebookTabs size={50} color="#123759" />
          <NotebookTabs size={50} />
          <NotebookTabs size={50} />

        </div>

        {product.detailsProcess ?
          <p style={{
            paddingRight: "20px",
            paddingLeft: "5px"

          }}>{product.detailsProcess}</p> :


          <p>not found yet</p>}</h4>


      <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "2rem",
        width: "25rem"
      }}>

        <NotebookTabs size={50} color="#123759" />
        <NotebookTabs size={50} />
        <NotebookTabs size={50} />

      </div>





      <Link style={{ padding: "20px", border: "1px solid black", margin: "1rem", borderRadius: "10px", backgroundColor: "grey", color: "white", textAlign: "center" }} to={`/product/${id}`} >Назад к рецептуре</Link>
    
    </section>
  )
  
}