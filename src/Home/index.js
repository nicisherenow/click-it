import { NavLink } from "react-router-dom"
import './Home.css'

export default function Home () {

  return (
    <div className="home-container">
      <div className="general-overview">
        Your number is represented in the center as the black dot with white text. You can tap on numbers that are less than or equal to your current number in order to increase your value.
        Have fun, for an additional challenge try speed mode. Or just enjoy yourself on the zen mode.
      </div>
      <div className="zen-mode-container">
        <NavLink to='/zen-mode' className="zen-mode-button">
          Zen Mode
        </NavLink>
        <div className="zen-mode-description">
          In this mode, you can act at your leisure and feel free to take your time and calculate your most optimal move. If you get stuck on zen mode, just go ahead and click on the black dot to reroll your numbers.
        </div>
      </div>
      <div className="speed-mode-container">
        <NavLink to='/speed-mode' className="speed-mode-button">
          Speed Mode
        </NavLink>
        <div className="speed-mode-description">
          In this mode, the numbers will frolick around every couple of seconds and you can compete with yourself to see how quickly you can get above 10,000.
        </div>
      </div>
    </div>
  )
}
