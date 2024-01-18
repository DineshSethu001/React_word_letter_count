
import Counter from   "./components/pages/Counter"
import './App.css'

export default function App(){
  return(
    <div className="AppContainer">
     
            <h1 id="top"> 
            <span className="highlight">W</span>ords and <span className="highlight">L</span>etters <span className="highlight">C</span>ounter 
            </h1> 
            <Counter />
    </div>
  )
}