import BookTable from "./BookTable";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Router>
     <Routes>
     <Route exact path="/" Component={BookTable}/>
     </Routes>
    </Router>
      
    </div>
  );
}

export default App;
