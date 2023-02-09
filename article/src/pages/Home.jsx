import React, { useEffect, useState } from "react";
import Form from "../component/Form";
import Data from "../component/Data";
import styled from "styled-components";
// let alldata = [
//   {
//     title: "Running",
//     description: "Running is good for health",
//   },
//   {
//     title: "Cycling",
//     description: "cycling is good for health",
//   },
// ];
const Home = () => {
  // function center(title  , description ,date ){
  //   setalldata((oldaata)=>{
  //     return [...oldaata ,  {title ,  description,date}]
  //   })
  // }
  const [alldata, setalldata] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  

  const addTitle = () => {
    setalldata((oldaata) => {
      return [...oldaata, { title, description, date }];
    });
    console.log(alldata);
  };
  const deletes = function (key) {
    const ans = alldata.map((dataa)=>{
        return dataa.title!==key?dataa:null;
    })
    console.log("The delete button is clicked" ,ans);

    setalldata(ans);
    console.log("The delete button is clicked" ,ans);
  };
  const edit =()=>{

  }

 
  return (
    <>
    <Container>
      <Title>Form</Title>
      <Forms>
        <div style={{ marginTop: "20px" }}>
          Title :{" "}
          <Input
            style={{ padding: "4px", borderRadius: "10px" }}
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
        </div>
        <div>
          Description :{" "}
          <Desc
            type="text"
            style={{
              marginLeft: "20px",
              padding: "40px",
              borderRadius: "10px",
              resize: "none",
            }}
            onChange={(e) => setDescription(e.target.value)}
          ></Desc>
        </div>
        <div style={{ marginBottom: "5px" }}>
          Date :{" "}
          <Input
            style={{ padding: "4px", borderRadius: "10px" }}
            onChange={(e) => setDate(e.target.value)}
          ></Input>
        </div>
        <Add onClick={addTitle}>Add Post</Add>
      </Forms>
    </Container>
    
    {alldata.map(data=>
      <Containers>
      <Titles>
        {data.title}
        <div>
          <Edit onClick={edit}>Edit</Edit>
          <Delete
            onClick={() => {
              deletes(data.title);
            }}
          >
            Delete
          </Delete>
        </div>
      </Titles>
      <Description>{data.description}</Description>
    </Containers>)}
      </>
  );
};
const Container = styled.div`
  height: 40vh;
  width: 30vw;
  background-color: orange;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
`;
const Title = styled.div`
  height: 6vh;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  color: white;
  font-size: 20px;
  background-color: grey;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Input = styled.input``;
const Desc = styled.input``;
const Forms = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Add = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  border-style: none;
  margin-right: 20px;
  margin-left: 180px;
  background-color: green;
  color: white;
`;
const Titles = styled.div`
  height: 6vh;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  color: white;
  font-size: 20px;
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Description = styled.div`
  padding-top: 25px;
  padding-left: 20px;
  font-size: 10px;
  color: white;
  background-color: orange;
  margin-bottom: 20px;
`;
const Edit = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 4px;
  border-style: none;
  margin-right: 20px;
`;

const Delete = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 4px;
  border-style: none;
  margin-right: 20px;
`;

const Containers = styled.div`
  width: 60vw;
  background-color: orange;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`;
export default Home;
