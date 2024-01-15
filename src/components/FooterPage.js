import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footer from "../images/footer.png";

const FooterPage = () => {
    return <div>

<div style={{ background:'rgba(167, 190, 174, 0.21)' ,borderTop:'2px solid  rgba(167, 190, 174, 0.26)' , borderRadius:'15px' }}>
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
        :'10px'}}> حقوق الطبع والنشر @ 2023. جميع الحقوق محفوظة د/عمر كامل. </div> 
    </div>;
}


export default FooterPage;