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
            author="Sam"
            timeAgo="Today at 6.00 PM"
            comment="Nice blog post!"
            imgs={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
            author="Alex"
            timeAgo="Today at 5.33 AM"
            comment="That's a good one xD"
            imgs={faker.image.avatar()}
        />
      </ApprovalCard> 

      <ApprovalCard>
        <CommentDetail
            author="John"
            timeAgo="Yesterday at 4.20 PM"
            comment="Well done,mate!"
            imgs={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
