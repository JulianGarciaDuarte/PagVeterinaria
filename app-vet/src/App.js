import ProfileDog from './ProfileDog'
import NavBar from './NavBar'
import AnunciosBar from './AnunciosBar';
import HistoriaClinica from './HistoriaClinica';

function App() {
  return (
    <>
      <AnunciosBar/>
      <NavBar/>
      <div className="main-container">
      <ProfileDog/>
      <HistoriaClinica/>
      </div>
    </>
  )
}

export default App;
