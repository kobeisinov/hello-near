import React from 'react';
import {PostCard, Avatar, Job, Company, Months, Rating} from "./index.styled";

const PostActivityCard = ({data}) => {

  return (
    <PostCard>
      <Avatar>{data.icon}</Avatar>
      <Job>Job</Job>
      <Company>Company</Company>
      <Months>Months</Months>
      <Rating>Rating</Rating>
    </PostCard>
  );
};

export default PostActivityCard;
