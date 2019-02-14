import * as React from "react";
import styled from 'styled-components';

interface Props {
  name: string;
  age: number;
  job: string;
}

const ProfileDiv = styled.div`
  width: 10rem;
  color: white;
  background-color: blueviolet;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Profile: React.SFC<Props> = ({ name, age, job }) => {
  return (
    <ProfileDiv>
      <h1>Profile</h1>
      <div>
        <b>Name: </b>
        {name}
      </div>
      <div>
        <b>Age: </b>
        {age}
      </div>
      <div>
        <b>Job: </b>
        {job}
      </div>
    </ProfileDiv>
  );
};

export default Profile;
