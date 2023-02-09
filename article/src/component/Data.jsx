import React, { useState } from "react";
import styled from "styled-components";

const Data = ({ data ,  alldata }) => {
 

  const edit = () => {};

  const deletes = function (key) {
    const ans = alldata.map((dataa)=>{
        return dataa.title!==key?dataa:{};
    })
    alldata = ans;
    console.log(alldata);
  };

  // const [data, setData] = useState(data);

  return (
    <>
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
      </Containers>
    </>
  );
};
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
export default Data;
