import{Container} from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Signup from "./components/Signup"
function App() {
  return (
  <>
      <Header/>
      <main className ='py-3'>
        <p>User Signup Page</p>
        <Signup/>
        
      </main>
      
      <Footer/>
    </>
  );
}

export default App;



