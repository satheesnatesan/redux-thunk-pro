import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../actions/tutorials";

const TutorialsList = (props) => {
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const tutorials = useSelector(state => state.tutorials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveTutorials());
  }, []);

  /*const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };*/

  /*const removeAllTutorials = () => {
    dispatch(deleteAllTutorials())
      .then(response => {
        console.log(response);
        refreshData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    refreshData();
    dispatch(findTutorialsByTitle(searchTitle));
  };
*/
  const deleteTutorial = () => {
    props.history.push("/posts");
    /*TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/posts");
      })
      .catch(e => {
        console.log(e);
      });*/
  };

  const newTutorial = () => {
    props.history.push("/add");
  };

  return (
    <div className="list row">
      <div className="col-md-8">
      <div>
          <button className="btn btn-success" onClick={newTutorial}>
            +
          </button>
        </div>
      </div>
      <div className="">
        <h4><center>Posts List</center></h4>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {tutorials &&
            tutorials.map((tutorial, index) => (    
    <tr>
      <th scope="row">{tutorial.id}</th>
      <td>{tutorial.userId}</td>
      <td>{tutorial.title}</td>
      <td>{tutorial.body}</td>
      <td><Link
              to={"/tutorials/" + tutorial.id}
              className="btn btn-primary"
            >
              EDIT
            </Link>
            <Link
              to={"/Posts-View/" + tutorial.id}
              className="btn btn-success"
            >
              VIEW
            </Link>
            <Link
              onClick={deleteTutorial}
              className="btn btn-danger"
            >
              DELETE
            </Link></td>
    </tr>
   ))}
  </tbody>
</table>   
      </div>
      
    </div>
  );
};

export default TutorialsList;