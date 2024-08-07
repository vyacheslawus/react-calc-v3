import { useEffect, useState } from "react"
import "./Header.css"
import { MoveRight } from "lucide-react"


export default function Header() {


  const [time, setTime] = useState(new Date())

  useEffect(() => {
    console.log('re')
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return function () {
      clearInterval(interval)
    }
  }, [])

  return (
    <header style={{
      marginTop: "10px"
    }}>
      <div>
        <img src="https://sun9-43.userapi.com/s/v1/ig2/I29skuz-hsKlm5U0cIM76npwz8p5ak9Lum7vlofFTHMGHeM-DJbxuOvAF32kbFdmB1_UhJo_PYT2YNoshnPbpEiV.jpg?size=200x200&quality=96&crop=0,0,1080,1080&ava=1" 
        alt="" 
        width="150" 
        height="150" 
        style={{
          borderRadius: "50%",
          marginRight: "15px",
          // marginBottom: "10px"

        }}
        />
      </div>

    <div>
          <h3> react bake calc v2.0 </h3>

      <span>the time is now: {time.toLocaleTimeString()}

      </span>
    </div>


    </header>
  )

}