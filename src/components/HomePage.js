import React from 'react';
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import logo from "../images/logo 1.png";
import backgroundImage from '../images/back-header.png';
import profile from "../images/profile.png";
import vector from "../images/Vector (1).png";
import vector2 from "../images/Vector (2).png";
import quran from "../images/quran.png";
import box1 from "../images/box1.png";
import box2 from "../images/box2.png";
import box3 from "../images/box3.png";
import box4 from "../images/box4.png";
import icon3 from "../images/icon3.png";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import circle from "../images/circle.png";
import card5 from "../images/card-play.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";
import image4 from "../images/image 4.png";
import image5 from "../images/image 5.png";
import image6 from "../images/image 6.png";
import playButton from "../images/play.png";
import heart from "../images/heart.png";
import part from "../images/part.png";
import mobile from "../images/mobile.png";
import vector4 from "../images/Vector (4).png";
import google from "../images/google.png";
import footer from "../images/footer.png";
import location from "../images/location.png";
import user from "../images/user.png";

const HomePage = () => {

    const navbarStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // You can adjust this property based on your image and design preferences
        height:'320px',
      };

    
    return (
        <>

        <Navbar expand="lg" style={navbarStyle}  >
          <Container style={{marginTop :'-150px'}}>
            <Navbar.Brand href="#home">
            <img  src={logo} alt=""  style={{width:'110px' , height:'110px'}}/></Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" style={{ backgroundColor: '#fff', border: 'none' }}/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5" >
            <Nav.Link style={{ color: '#D19B6F' , marginLeft :'20px'}} href="#الرئيسيه">الرئيسيه</Nav.Link>
            <Nav.Link  style={{ color: '#FFFFFF' , marginLeft :'20px' }} href="#صوتيات">صوتيات</Nav.Link>
            <Nav.Link style={{ color: '#FFFFFF' , marginLeft :'20px' }} href="#كتب">كتب</Nav.Link>
            <Nav.Link style={{ color: '#FFFFFF' , marginLeft :'20px'}} href="#مقالات">مقالات</Nav.Link>
            <Nav.Link style={{ color: '#FFFFFF' , marginLeft :'20px'}} href="#صور">صور</Nav.Link>
            <Nav.Link style={{ color: '#FFFFFF' , marginLeft :'20px'}} href="#تواصل معنا">تواصل معنا</Nav.Link>
          </Nav>
          
           <Nav className="me-auto">
            <Button style={{color : '#FFFFFF' , backgroundColor : 'rgba(209, 155, 111, 0.3)' , borderRadius : '19px' , width :'160px' , height:'38px' ,
               marginLeft :'20px' , border:'none' , top:'56px' , fontWeight:'400' , fontSize:'15px' }} >   <img  src={location} alt="" style={{marginLeft:'5px'}} />مصر, القاهره </Button>

              <Button style={{color : '#042030' , fontWeight:'700',  background : 'linear-gradient(331.41deg, #D19B6F 6.78%, #F6E5C3 204.87%)' , borderRadius : '19px' , width :'119px' , height:'38px' , border:'none'  }} >  <img  src={user} alt="" style={{marginLeft:'5px'}} /> تسجيل</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

     <Container style={{ background :'linear-gradient(331.41deg, #D19B6F 6.78%, #F6E5C3 204.87%)' , width:'90%', borderRadius:'19px' , position:'relative' , marginTop:'-150px'}} >
        <Row className="d-flex justify-content-between align-items-center">
            <Col sm="4"  >
             <div  className=" d-flex align-items-center  " style={{flexDirection :'column'}}  >
               <h2 style={{color: '#FFFFFF' , width:'72px' , marginLeft :'90px' }}>الدكتور</h2>
                <h1 style={{color :'#051427' , width:'230px',fontSize:'45px' , fontWeight:'bold'}}> عُــمــر  كامـــل </h1>
                <h5 style={{color:'#7A808A', marginTop :'10px'}}>الصلاه القادمه : <span style={{color:'#FFFFFF'}} >العصر</span></h5>
                <h5 style={{color:'#FFFFFF' , marginTop :'10px'}}> الموعد بعد : 02:46:32</h5>

                    <div className="d-flex align-items-center justify-content-center   " style={{marginBottom:'-80px' , marginLeft :'-220px'}} >
                    <img  src={quran} alt=""  />
                    <img  src={vector2} alt="" className='responsive-image ' />
                    </div>
             </div>
             </Col>

             <Col sm="2" className="d-flex align-items-center " >
                 <img  src={vector} alt=""  />
              </Col>

             <Col sm="6" className=" d-flex align-items-center justify-content-end  " style={{marginLeft:'-12px'}} >
                <img  src={profile} alt="" style={{marginTop :'20px'}} />    
              </Col>
          </Row>
      </Container>

       <Container>
        <Row className="d-flex justify-content-between align-items-center ">
          <Col sm="3 p-1 " >
            <div style={{border:'2px solid #F5ECD9' , borderRadius:'15px' , width:'100%' , marginTop:"15px"}} >
              <img  src={box4} alt="" style={{marginTop:"15px"}} />
                <p style={{marginTop:"5px"}}>صوتيات</p>
              </div>
          </Col>

           <Col sm="3 p-1 " >
             <div style={{border:'2px solid #F5ECD9' , borderRadius:'15px' , width:'100%' , marginTop:"15px"}} >
                 <img  src={box3} alt="" style={{marginTop:"15px"}} />
                 <p style={{marginTop:"5px"}}>كتب</p>
              </div>
            </Col>

             <Col sm="3 p-1 " >
                <div style={{border:'2px solid #F5ECD9' , borderRadius:'15px' , width:'100%' , marginTop:"15px"}} >
                    <img  src={box2} alt="" style={{marginTop:"15px"}} />
                    <p style={{marginTop:"5px"}}>مقالات</p>
                  </div>
             </Col>

             <Col sm="3 p-1" >
               <div style={{border:'2px solid #F5ECD9' , borderRadius:'15px' , width:'100%' , marginTop:"15px"}} >
                  <img  src={box1} alt="" style={{marginTop:"20px"}} />
                  <p style={{marginTop:"5px"}}>صور</p>
                </div>
             </Col>

          <div className='d-flex justify-content-between mt-3'>
            <p style={{color:'#051427' , fontSize:'18px' , fontWeight:'700'}}>
            <img  src={icon3} alt="" style={{marginLeft:'5px'}} />
            اصدارات جديدة </p>
            <p style={{color:'#D19B6F' , fontSize:'16px' , fontWeight:'400'}}>عرض المزيد</p>
          </div>

        </Row>
      </Container>
      
      <Container>
        <Row className="d-flex justify-content-between align-items-center" style={{ margin: '20', padding: '20px' }}>
          
          <Col xs="6" md="4" lg="2" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={circle} alt="" style={{ width: '25px', height: '25px', marginBottom: '7px' }} />
            <img src={card1} alt="" style={{ width: '80%', height: 'auto', marginRight: '5px' }} />
          </Col>

          <Col xs="6" md="4" lg="2" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={card2} alt="" style={{ width: '80%', height: 'auto', marginRight: '5px' }} />
          </Col>

          <Col xs="6" md="4" lg="2" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={card3} alt="" style={{ width: '80%', height: 'auto', marginRight: '5px' }} />
          </Col>

          <Col xs="6" md="4" lg="2" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={card4} alt="" style={{ width: '80%', height: 'auto', marginRight: '5px' }} />
          </Col>

          <Col xs="6" md="4" lg="2" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={card2} alt="" style={{ width: '80%', height: 'auto', marginRight: '5px' }} />
          </Col>

          <Col xs="6" md="4" lg="2" style={{ textAlign: 'center', marginBottom: '10px' }}>
            <img src={card3} alt="" style={{ width: '80%', height: 'auto' , marginRight: '5px'}} />
            <img src={circle} alt="" style={{ width: '25px', height: '25px' , marginRight: '7px'}} />
          </Col>

        </Row>
      </Container>

       <Container >
        <Row className="d-flex justify-content-between align-items-center me-auto  ">
          <Col sm="8  " >
            <div className='d-flex justify-content-between mt-3'>
              <p style={{color:'#051427' , fontSize:'18px' , fontWeight:'700'}}>
               <img  src={icon3} alt="" style={{marginLeft:'5px'}} />الاكثر استماعاً</p>
               <p style={{color:'#D19B6F' , fontSize:'16px' , fontWeight:'400'}}>عرض المزيد</p>
          </div>


       <div style={{marginLeft:'-25px'}}>
          <Row className="d-flex justify-content-between align-items-center  " style={{marginLeft:'-55px', marginBottom: '10px' }}>
              <Col sm="4"   >
                 <div className="d-flex justify-content-center align-items-center "  >
                      <img  src={image2} alt="" className='mb-3'/>
                      <h5 style={{ width:'100%'}}>عمر عبد الكافي</h5>
                  </div>    
               </Col>

                 <Col sm="4 " >
                   <div className="d-flex justify-content-center  " >
                      <img src={part} alt="" style={{  marginBottom: '5px' }} />
                  </div>

                 </Col>

                  <Col sm="4" >
                      <div className="d-flex justify-content-center align-items-center  " >
                        <img src={heart} alt="" style={{ width: '25px', height: '25px', marginBottom: '5px' }} />
                        <img src={playButton} alt="" style={{  marginBottom: '5px' , paddingRight:'15px' }} />
                      </div>
                  </Col>
            <div style={{marginLeft:'-55px', marginBottom: '10px', borderBottom:'1.5px solid #EEEEEE ', width:'90%' }}></div>
            </Row>
                      
          <Row className="d-flex justify-content-between align-items-center mt-3 " style={{marginLeft:'-55px'}}>
              <Col sm="4  " >
                <div className="d-flex justify-content-center align-items-center " >
                    <img  src={image3} alt=""  className='mb-3' />
                    <h5 style={{ width:'100%'}}> احمد بن يوسف السيد </h5>
                </div>
               </Col>

                <Col sm="4" >
                  <div className="d-flex justify-content-center  " >
                    <img src={part} alt="" style={{  marginBottom: '5px' }} />
                  </div>
                </Col>

                <Col sm="4" >
                    <div className="d-flex justify-content-center align-items-center  " >
                        <img src={heart} alt="" style={{ width: '25px', height: '25px', marginBottom: '5px' }} />
                        <img src={playButton} alt="" style={{  marginBottom: '5px' , paddingRight:'15px' }} />
                  </div>
                </Col>
                      <div style={{marginLeft:'-55px', marginBottom: '10px', borderBottom:'1.5px solid #EEEEEE ', width:'90%' }}></div>
          </Row>

         <Row className="d-flex justify-content-between align-items-center " style={{marginLeft:'-55px' }}>
            <Col sm="4" >
              <div className="d-flex justify-content-center align-items-center " >
                 <img  src={image4} alt=""  className='mb-3 mt-3'   />
                  <h5 style={{ width:'100%'}}>طارق بن محمد</h5>
              </div>
            </Col>

            <Col sm="4" >
              <div className="d-flex justify-content-center  " >
                <img src={part} alt="" style={{  marginBottom: '5px' }} />
             </div>
             </Col>

            <Col sm="4" >
               <div className="d-flex justify-content-center align-items-center  " >
                  <img src={heart} alt="" style={{ width: '25px', height: '25px', marginBottom: '5px' }} />
                  <img src={playButton} alt="" style={{  marginBottom: '5px' , paddingRight:'15px' }} />
                </div>
              </Col>
                  <div style={{marginLeft:'-55px', marginBottom: '10px', borderBottom:'1.5px solid #EEEEEE ', width:'90%' }}></div>
         </Row>

        <Row className="d-flex justify-content-between align-items-center " style={{marginLeft:'-55px' }}>
            <Col sm="4  " >
               <div className="d-flex justify-content-center align-items-center " >
                  <img  src={image5} alt=""  className='mb-3 mt-3 '/>
                   <h5 style={{ width:'100%'}}>عبد الحي يوسف  </h5>
               </div>
              </Col>

              <Col sm="4" >
                <div className="d-flex justify-content-center  " >
                  <img src={part} alt="" style={{  marginBottom: '5px' }} />
                 </div>
               </Col>

              <Col sm="4" >
                <div className="d-flex justify-content-center align-items-center  " >
                  <img src={heart} alt="" style={{ width: '25px', height: '25px', marginBottom: '5px' }} />
                  <img src={playButton} alt="" style={{  paddingRight:'15px' }} />
                </div>
              </Col>
                 <div style={{marginLeft:'-55px', marginBottom: '10px', borderBottom:'1.5px solid #EEEEEE ', width:'90%' }}></div>
        </Row>

        <Row className="d-flex justify-content-between align-items-center " style={{marginLeft:'-55px' }}>
           <Col sm="4" >
              <div className="d-flex justify-content-center align-items-center " >
                 <img  src={image6} alt=""  className='mb-3 mt-3  '  />
                  <h5 style={{ width:'100%'}}>  عبد العزيز بن عبدالله</h5>
              </div>
            </Col>

            <Col sm="4" >
               <div className="d-flex justify-content-center  " >
                  <img src={part} alt="" style={{  marginBottom: '5px' }} />
                </div>

            </Col>

            <Col sm="4" >
                <div className="d-flex justify-content-center align-items-center  " >
                  <img src={heart} alt="" style={{ width: '25px', height: '25px', marginBottom: '5px' }} />
                  <img src={playButton} alt="" style={{  marginBottom: '5px' , paddingRight:'15px' }} />
                  </div>
              </Col>
                      
        </Row>

           </div>
          </Col>

           <Col sm="4 " >
             <div style={{ width:'100%' , marginTop:"15px"}} >
                 <h2 style={{color:'#051427'  , fontSize:'18px' , fontWeight:'700'}}>متابعه الاستماع</h2>
                  <img  src={card5} alt="" style={{width:"100%"}} />   
               </div>
             </Col>
        </Row>
       </Container>
      
      <Container >

      <Row className="d-flex justify-content-between align-items-center m-5 ">
         <Col sm="6 " xs ="12">
           <div style={{ width: '100%', marginTop: '15px' }}>
            <img src={mobile} alt="" style={{ width: '100%',  // Set the initial width to 100%
                marginTop: '15px',
                marginLeft: '-35px',
                '@media (max-width: 768px)': {
                  width: '50%',  // Adjust the width for screens up to 768px
                  marginLeft: 'auto',  // Center the image horizontally
                  marginRight: 'auto'  // Center the image horizontally
                } }}/>
          </div>  
           </Col>

            <Col sm="6" xs ="12">
               <div style={{ width:'100%' , marginTop:"15px"}} >
                 <h1  style={{marginTop:"5px" ,fontSize:'50px' , fontWeight:'700' }} >تنزيل التطبيق مجاناً</h1>
                 <p style={{marginTop:"5px" ,fontSize:'22px' , fontWeight:'400' ,  color:'#9d9c9c' , marginTop:"25px"  }}>تصفح جميع الكتب والصوتيات المفضله لك</p>

                <div style={{ width: '70%', marginTop: '15px' }}>
                    <img src={google} alt="" style={{ marginTop: '70px'  , marginRight:'85px'}} className='responsive-image2' />
                  </div>
                </div>   
             </Col>
           
         <Row className="d-flex justify-content-between align-items-center " >
            <Col sm='12'>
            <img
              src={vector4}
              alt=""
              style={{
                width: '100%',
                position: 'relative',
                zIndex: '-1',
                marginTop: '-290px',
              }}
              className="responsive-image" />
            </Col>
            </Row>
        </Row>
      </Container>
        

        {/* <div style={{ background:'rgba(167, 190, 174, 0.21)' ,borderTop:'2px solid  rgba(167, 190, 174, 0.26)' , borderRadius:'15px' }}>
        <Container>
            <Row className="d-flex justify-content-center align-items-center w-100 ">
                  <Col sm="12" >
                        <div style={{ width:'100%' }} >
                            <img  src={footer} alt="" style={{marginTop:"15px"}} />
                        
                            <div className="d-flex justify-content-center align-items-center d-flex-menu "  style={{color :'rgb(127 119 119) '}}>
                              <p style={{marginTop:"5px" , padding:'15px' }}>الرئيسيه</p>
                              <p style={{marginTop:"5px" , padding:'15px' }}>صوتيات</p>
                              <p style={{marginTop:"5px" , padding:'15px' }}>كتب</p>
                              <p style={{marginTop:"5px" , padding:'15px' }}>مقالات</p>
                              <p style={{marginTop:"5px" , padding:'15px' }}>صور</p>
                              <p style={{marginTop:"5px" , padding:'15px' }}>تواصل معنا</p>
                              <p style={{marginTop:"5px" , padding:'15px' }}>الشروط والاحكام </p>
                            </div>

                         </div>
                    </Col>
                </Row>
            </Container>
        </div>
    
    
        <div style={{background:'linear-gradient(235.96deg, #384659 0%, #051427 65.49%)' , color:"#fff" , padding
        :'10px'}}> حقوق الطبع والنشر @ 2023. جميع الحقوق محفوظة د/عمر كامل. </div> */}
         </>


      );}

export default HomePage;


