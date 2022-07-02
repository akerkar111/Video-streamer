import "./App.css";
import Row from "./Components/Row";
import requests from "./Components/requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import { Offline, Online } from "react-detect-offline";
import { FiWifiOff } from "react-icons/fi";

function App() {
  return (
    <>
    {/* //When internet is connected */}
    <Online>
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomaceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
    </Online>

    {/* //when internet is not connected */}
     <Offline>
     <div className="offline-app" style={{width:"100vw",height:"100vh", display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <FiWifiOff size={100}/>
        <h1>No Connection</h1>
        <h4>Please check your internet connection</h4>
     </div>
     </Offline>
</>
  );
}

export default App;
