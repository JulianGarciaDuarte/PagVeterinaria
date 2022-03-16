import ProfileDog from './ProfileDog'
import NavBar from './NavBar'
import NavBar_M from './NavBar_M'
import AnunciosBar from './AnunciosBar';
import HistoriaClinica from './HistoriaClinica';
import Footer from './Footer';
function App() {
  return (
    <>
      <AnunciosBar/>
      <NavBar_M/>  
      <NavBar/>
      <main>
      <div className="container-fluid">
      <div class="row">
      <ProfileDog/>
      <HistoriaClinica/>
      <Footer/>
      </div>
      </div>
      </main>
    </>
  )
}

export default App;
