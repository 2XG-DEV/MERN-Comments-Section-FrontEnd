import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listComments } from "../actions.js/commentActions";
import Comment from "../components/Comment/Comment";
import { useEffect } from "react";
import "./CommentListScreen.css";
import AddComment from "../components/AddComment/AddComment";

const CommentListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listComments());
  }, [dispatch]);

  const commentList = useSelector((state) => state.commentList);
  const { loading, error, comments } = commentList;

  return (
    <div className="commentList">
      {loading && <p>loading</p>}
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
      <AddComment />
    </div>
  );
};

export default CommentListScreen;
