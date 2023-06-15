import React from 'react'

const divforcontact={
    height:'1125px',
    width:'60%',
    // backgroundImage:"url('https://copycontent.co.uk/wp-content/uploads/2020/10/what-is-a-blog-2.jpg')",
    // textAlign:'center',
    // padding:'0.5px',
    // backgroundRepeat:'no-repeat',
    // backgroundSize:'100%',
    backgroundColor:'white',
    margin:'20px 150px 20px 105px',
    textAlign:'left'
    
  };

  const mybtn={
    height:'45px',
    width:'80px',
    fontColor:'inherit',
    backgroundColor:'rgb(106, 106, 106)',
    fontSize:'20px',
    margin:'20px 130px 20px 60px',
    textAlign:'left',

  };

const ContactUs = () => {
  return (
    <div style={{backgroundColor:'rgb(222,216,223)',padding:'1px'}}>
      <div style={divforcontact}>
      <h1 style={{fontSize:'50px',color:'inherit',paddingLeft:'50px'}}>Contact Us</h1>
     <form style={{fontSize:'30px',paddingLeft:'50px'}}>
        <label for="name">Your Name (Required)</label><br/>
        <input type="text" id="name" name="name" required style={{height:'45px',width:'550px'}}/>
        <br/><br/>

        <label for="name">Your Email (Required)</label><br/>
        <input type="text" id="name" name="name" required style={{height:'45px',width:'650px'}}/>
        <br/><br/>

        <label for="name">Subject</label><br/>
        <input type="text" id="name" name="name" style={{height:'45px',width:'550px'}}/>
        <br/><br/>

        <label for="name">Your Message</label><br/>
        <textarea row="5" col="6" style={{height:'400px',width:'650px'}}></textarea>
        <br/>

     </form>

     <button style={mybtn}>Send
        </button>

      </div>
    </div>
  );
}

export default ContactUs

