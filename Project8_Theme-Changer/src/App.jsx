import useLocalStorage from "./useLocalStorage"
import './theme.css'
export default function App(){
  const[theme,setTheme]=useLocalStorage('theme','dark');

  function toogleTheme(){
    setTheme(theme=='light'?'dark':'light');
  }

  console.log(theme);

  return(
    <div className="light-dark-mode" data-theme={theme} >
      <div className="container">
        <h1>Theme Toggle</h1>
        <button onClick={toogleTheme}>Switch</button>
      </div>
    </div>
  )
}