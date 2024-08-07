import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Card from '../Card/Card'
import './LoginPage.css'
import { useReducer, useRef, useState } from 'react'



export const LoginPage = () => {
  
  // const [isLoggin, setIsLoggin] = useState(false)
  const inputRefLogin = useRef()
  const inputRefPassword = useRef()
  const loginWrap = useRef()


  const nav = useNavigate()

  const [isAdmin, setIsAdmin] = useState(false)

  const logginHandle = () => {
    if (inputRefLogin.current.value === "admin" || inputRefLogin.current.value === "slava" && inputRefPassword.current.value === '123') {
      setIsAdmin(true)
      nav('/main')
    } else {
      alert("you are not admin")
      inputRefLogin.current.value = ''
      inputRefPassword.current.value = ''
      return

    }
  }



  return (
    <>
    
    <div ref={loginWrap}  className="loginPage-wrapper">

      <h2>Loggin In</h2>


       <input ref={inputRefLogin} type="text"></input>
       <input ref={inputRefPassword} type="password"></input>
         <Button style={"btn"} click={logginHandle} >Enter</Button>

        

   
    </div>
    </>
  )
}