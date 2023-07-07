import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "../style.css";
import { LineChart, XAxis, CartesianGrid, Line, Tooltip } from "recharts";

function Home() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const increase = ()=>{
    if(width<1000){
      setWidth(width+50);
    }
  }
  const decrease = ()=>{
    if(width>300){
      setWidth(width-50);
    }
  }
  const [data, setData] = useState("");
  useEffect(() => {
    const socket = socketIOClient("http://localhost:8080/");
    socket.on("message", (data) => {
      setData(data);
      //   this.render();
    });
  }, [data]);
  return (
    <div className="container home-container">
      <div className="card col-md-12 home-card text-dark">
        <div className="card-title">
          <h1>Real-Time Chart</h1>
        </div>
        <div className="card-body">
          <LineChart
            width={width}
            height={height}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" style={{fontFamily:'cursive', color:'red'}}/>
            <Tooltip />
            <CartesianGrid stroke="black" />
            <Line type="cursive" dataKey="x" stroke="blue" yAxisId={0} />
            <Line type="monotone" dataKey="y" stroke="red" yAxisId={1} />
          </LineChart>
        </div>
        <div className="inline-block">
        <button onClick={increase} className="mr-5">+</button>
        <button onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
