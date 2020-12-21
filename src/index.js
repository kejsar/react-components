import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar="https://picsum.photos/35/30"
          timeAgo="Today at 6:00PM"
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
