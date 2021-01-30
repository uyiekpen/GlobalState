import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import UseCase from './Component/UseCase/UseCase';
import FeedbackComp from './Component/FeedbackComp';
import { GlobalProvider } from './ContextApi/GlobalContext';
import BodyComp from './Component/BodyComp';
import EditStudent from "./Component/Files/EditStudent";
import AddStudent from "./Component/Files/AddStudent";

function App() {
  return (
   <GlobalProvider>
      <Router>
      <Switch>
        <Route path="/" exact component ={BodyComp}/>
        <Route path="/usecase" exact component ={UseCase}/>
        <Route path="/feedback" exact component ={FeedbackComp}/>
        <Route path ="/student/:id" exact component ={EditStudent}/>
        <Route path ="/add" exact component ={AddStudent}/>

      </Switch>
    </Router>
   </GlobalProvider>
  );
}

export default App;
