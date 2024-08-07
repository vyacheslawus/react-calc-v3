import { useEffect, useRef } from "react"
import "./ProductModal.css"
import { createPortal } from "react-dom"

export default function ProductModal({ children }) {

  return (
    <div  className="modal-wrapper">
      <div className="modal-content">
        {children}
      </div>
    </div>
  )  
}