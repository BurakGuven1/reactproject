import logo from './logo.svg';
import './App.css';
import User from './components/User'
import Navbar from './components/navbar';
function App() {
  const cont=true;
  return (
    <div className="App">
      <Navbar />
      <hr/>
      <User 
      name=" can"
      bölüm=" tamirci"
      calistigiyer=" tamirci yanı "
      />
      <hr/>
      <Navbar  a=" bu da iki"/>

      <User 
      name=" can"
      bölüm=" tamirci"
      calistigiyer=" tamirci yanı "
      fazla=" bu ikinci de görüncek"
      />
      
      
    </div>
  );
}

export default App;
