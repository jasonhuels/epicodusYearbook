import React from "react";
import { Switch, Route } from "react-router-dom";
import StudentList from "./StudentList";
import Home from "./Home";
import NavBar from "./NavBar";
import TeacherList from "./TeacherList";
import Error404 from "./Error404";
import NewStudentControl from "./NewStudentControl";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterStudentList: []
    };
    this.handleAddingNewStudentToList = this.handleAddingNewStudentToList.bind(this);
  }

  handleAddingNewStudentToList(newStudent) {
    var newMasterStudentList = this.state.masterStudentList.slice();
    newMasterStudentList.push(newStudent);
    this.setState({ masterStudentList: newMasterStudentList });
  }

  render() {

    return (
      <div className="container" >
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <div className="row">
            <Route path='/Yearbook' render={() => <StudentList studentList={this.state.masterStudentList} />} />
            <Route path='/newstudent' render={()=><NewStudentControl onNewStudentCreation={this.handleAddingNewStudentToList} />} />
            <Route path='/Teachers' component={TeacherList} />
          </div>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}



export default App;