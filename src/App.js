import React, { useState  } from 'react';
import { Main, BasicFormWrapper  } from './styled';
import { Row, Col, Form, Input, Button,Card, DatePicker,Select} from 'antd'; 
import logo from './logo.png'
import './App.css'
const { Option } = Select;
const onFinish = (values) => {
  console.log(values);
};
const App = () => {
  let [exist, setExist] = useState(false);
  let existParent = value => {
    if (value === 'YES') {
      setExist(true);
    } else {
      setExist(false);
    } 
  };
return (
  <div className='myappstyle'>
  <Main>
    <div style={{textAlign:'center'}}>
      <img src={logo} width='30%' />
    </div> 
  <BasicFormWrapper className="mb-25">
        <Form preserve={false} name="multi-form" onFinish={onFinish} layout="vertical">
         <Card headless style={{ borderColor:'black'}}>
          <h1 style={{textAlign:'center'}}>STUDENT DETAILS</h1>
          <Row gutter={30}>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Academic_Year" label='Admission For Academic Year'>
                <Select placeholder="Admission For Academic Year" >
                  <Option value='2024-2025'>2024-2025</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="branch" label='Branch'>
              <Select placeholder="Select Branch" >
                  <Option value='Everwin Matriculation - Kolathur'>Everwin Matriculation - Kolathur</Option>
                  <Option value='Everwin Vidyashram CBSE - Mathur'>Everwin Vidyashram CBSE - Mathur</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="first_name" label='First Name'>
                <Input style={{height:'48px'}} placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="last-name" label='last Name'>
                <Input style={{height:'48px'}} placeholder="Last Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="gender" label='Gender'>
              <Select placeholder="Select Gender" >
                  <Option value='Male'>Male</Option>
                  <Option value='Female'>Female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Admission_For" label='Admission For'>
              <Select placeholder="Admission For" >
                  <Option value='X'>X</Option>
                  <Option value='XII'>XII</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Date_of_Birth" label='Date of Birth'>
              <DatePicker style={{width:'100%'}}/>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Blood_Group" label='Blood Group'>
              <Select placeholder="Blood Group" >
                  <Option value='A+'>A+</Option>
                  <Option value='B+'>B+</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Previous_School_Name" label='Previous School Name'>
                <Input style={{height:'48px'}} placeholder="Previous School Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="existing_parent" label='Are you an existing parent?'>
              <Select placeholder="Select Gender" onChange={existParent}>
                  <Option value='YES'>YES</Option>
                  <Option value='NO'>NO</Option>
                </Select>
              </Form.Item>
            </Col>    
            {exist === true ? (         
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Woocampus_Register_Mobile" label='Woocampus Register Mobile'>
                <Input type='number' style={{height:'48px',width:'50%',marginRight:'20px'}} placeholder="Mobile No" />
                <Button
              className="primary"
              size="large"
              type='primary'
              // onClick={CheckExist}
            >
              Click
            </Button>
              </Form.Item>
            </Col>  
             ) : (
          ''
        )} </Row>
        <Row gutter={30}>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_Name" label='Parent Full Name'>
                <Input style={{height:'48px'}} placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_relationship" label='Relationship'>
              <Select placeholder="Select Relationship" >
                  <Option value='Mother'>Mother</Option>
                  <Option value='Father'>Father</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_Occupation" label='Occupation'>
              <Select placeholder="Select Occupation" >
                  <Option value='Salaried'>Salaried</Option>
                  <Option value='Self_Employeed'>Self_Employeed</Option>
                  <Option value='Home Maker'>Home Maker</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_mobileno" label='Mobile No'>
                <Input type='number' style={{height:'48px'}} placeholder="Mobile No" />
              </Form.Item>
            </Col>   
          
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Source" label='Source'>
              <Select placeholder="Select Source" >
                  <Option value='Word of mouth'>Word of mouth</Option>
                  <Option value='Social Media'>Social Media</Option>
                </Select>
              </Form.Item>
            </Col> 
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="Status_Remark" label='Status Remark'>
                <Input   style={{height:'48px'}} placeholder="status Remark" />
              </Form.Item>
            </Col>  
          </Row> 
      <Form.Item style={{textAlign:'end'}}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
      </Card>
      {/* <Card headless style={{margin:'0px 100px 0px 100px'}}>
          <h1 style={{textAlign:'center'}}>PARENT DETAILS</h1>
          <Row gutter={30}>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_Name" label='Full Name'>
                <Input style={{height:'48px'}} placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_relationship" label='Relationship'>
              <Select placeholder="Select Relationship" >
                  <Option value='Mother'>Mother</Option>
                  <Option value='Father'>Father</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_Occupation" label='Occupation'>
              <Select placeholder="Select Occupation" >
                  <Option value='Salaried'>Salaried</Option>
                  <Option value='Self_Employeed'>Self_Employeed</Option>
                  <Option value='Home Maker'>Home Maker</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={12} xs={24} className="mb-25">
              <Form.Item name="parent_mobileno" label='Mobile No'>
                <Input type='number' style={{height:'48px'}} placeholder="Mobile No" />
              </Form.Item>
            </Col>   
          </Row> 
      </Card> */}
      
        </Form>
    </BasicFormWrapper> 
  </Main>
  </div>
);}
export default App;