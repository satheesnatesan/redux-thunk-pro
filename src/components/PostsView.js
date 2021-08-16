import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import { Link } from "react-router-dom";

const PostsView = props => {
    
    const [currentTutorial, setCurrentTutorial] = useState(props.match.params.id);
  
    const getTutorial = id => {
      TutorialDataService.get(id)
        .then(response => {
          setCurrentTutorial(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      getTutorial(props.match.params.id);
    }, [props.match.params.id]);
  

  return (
    <div className="col-md-6">
        {currentTutorial ? (
          <div>
            <h4>Posts Details</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentTutorial.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentTutorial.body}
            </div>
            <Link
              to={"/"}
              className="btn btn-primary"
            >
              Cancel
            </Link>
          </div>
        ) : (
          <div>
            
          </div>
        )}
      </div>
  );
};

export default PostsView;