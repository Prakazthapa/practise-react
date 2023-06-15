import React from 'react'
const AboutUs = () => {
  const divforcontent={
    height:'588px',
    width:'50%',
    // backgroundImage:"url('https://copycontent.co.uk/wp-content/uploads/2020/10/what-is-a-blog-2.jpg')",
    // textAlign:'center',
    // padding:'0.5px',
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'100%',
    backgroundColor:'rgb(222, 216, 223)',
    float:'right',
    paddingLeft:'45px'
  };

  
  const divforimage={
    height:'588px',
    width:'50%',
    backgroundImage:"url('https://scontent.fbir5-1.fna.fbcdn.net/v/t39.30808-6/257134645_933897043884426_192048708192190783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH5fN840FOL2wJziv7dDzDo8OnmWLq8NIzw6eZYurw0jHILqQRLaBWA8UBIv4YS-fpSSK3SKYA3Poglaewxz3M5&_nc_ohc=il1uH4MgS70AX94TttA&_nc_ht=scontent.fbir5-1.fna&oh=00_AfBYt7qkgCqLq-m7bIUg_gJp_tonDbZHYL-UBVjk53Ep9w&oe=648B1A2D')",
    // textAlign:'center',
    // padding:'0.5px',
    backgroundRepeat:'no-repeat',
    backgroundSize:'75%',
    backgroundColor:'rgb(222, 216,223)',
    // backgroundPositionx:'center',
    // backgroundPositiony:'center',
    backgroundPosition:'center'
    
    
  };
  return (
    <>

    <div style={divforcontent}>
    <h1 style={{fontSize:'50px',color:'inherit'}}>About Me</h1>
    <h3 style={{fontSize:'30px'}}>HI, MY NAME IS <span style={{fontFamily:'cursive'}}>Prakash Thapa</span></h3>
    <p style={{fontSize:'25px'}}>And, Lets Blog is my little corner of internet!</p>
    </div>
    <div style={divforimage}>
    
    </div>
    </>
  );
}

export default AboutUs
