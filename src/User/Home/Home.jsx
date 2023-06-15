import { colors } from '@mui/material'
import React from 'react'

const Home = () => {
  const div1={
    height:'588px',
    width:'100%',
    backgroundImage:"url('https://copycontent.co.uk/wp-content/uploads/2020/10/what-is-a-blog-2.jpg')",
    textAlign:'center',
    padding:'0.5px',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%'
  };

  // const para1={
  //   fontSize:'100px',
  //   fontFamily:'cursive',
  //   color:'red'
  // }

  return (
    <>
    <div style={div1}>
      {/* <p style={para1}>Hi, <br/>I am Prakash Thapa!!!</p> */}
    </div>
    </>
  );
}

export default Home
