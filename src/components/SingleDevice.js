"use client";
import styled from 'styled-components'
import { Card,Select,Tooltip,Button,Switch,Form, Slider,TimePicker,Image} from 'antd';
import {PlusOutlined } from '@ant-design/icons';
import moment from 'moment'
import dayjs from 'dayjs';
import { useState } from 'react';
const format = 'HH:mm:ss';

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const TitleDiv=styled.div`
    padding: 0 10%;
    font-family:poppins;
`;
export default function SingleDevice() {
  const startTime = dayjs('12:08:23', 'h:mm:ss');
  const endTime = dayjs('12:08:23', 'h:mm:ss');
  const [flag,setFlag]=useState(false);
  const [schedule,setSchedule]=useState("");
  const [tag,setTag]=useState("");
  const onFinish=(values)=>{
    const {kiosk,adb,brightness,volume,ota,uptime,resolution,location}=values;
    const formValues={
      kiosk,
      adb,
      brightness,
      volume,
      ota,
      uptime,
      resolution,
      location,
      schedule:schedule,
      tag:tag
    };
    console.log(values);
    console.log(formValues);
  }
  const onFinishFailed=()=>{
    console.log("Gone");
  }


  const changeFlag=()=>(setFlag(true));

  return (
    <div >
      <TitleDiv>
          <h2 style={{textAlign:'center'}}>Device Name</h2>
          <Button variant="solid" style={{position:'absolute',right:'2%',top:'2.5%',fontSize:'1rem',backgroundColor:'orangered',fontWeight:'600',border:'none',color:'black'}}>
            Delete
          </Button>     
      </TitleDiv>
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'flex-start'}}>
        <div style={{width:'30%'}}> 
            <Card style={{fontFamily:'poppins'}} styles={{ body:{paddingTop: 10,paddingBottom:10}}}>
                <div>
                  <Image src="https://a.storyblok.com/f/47007/1200x628/a4a4843482/ad-glossary-meta.png" alt=""  style={{width:'100%'}}/>
                </div>
                <span>Status : Online</span> <br/>
                <span>Last Screenshot Timestamp : 09-01-2025, 03:09 p.m</span> <br/><br/>
                <Select
                  style={{
                    width: '75%',
                  }}
                  placeholder='Schedule'
                  onChange={(value)=>(
                    setSchedule(value)
                  )}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                  ]}/>&nbsp;&nbsp;
                  <Tooltip title="Add New Schedule">
                    <Button type="primary" shape="circle" icon={<PlusOutlined />}  size='default'/>
                  </Tooltip>
            </Card>
            <br/>
            <Card style={{fontFamily:'poppins'}} styles={{ body:{paddingTop: 0}}}>
                <h3>Device Specifications</h3>
                <span>Policy : Policy 1</span> <br/>
                <span>UID : ugag-9890-hg-5690</span> <br/>
                <span>Android Version : 13</span><br/>
                <span>Memory Used : 343.21 MB</span><br/>
                <span>Total Memory : 2.1 GB</span><br/>
                <br/>
                <Select
                  style={{
                    width: '75%',
                  }}
                  placeholder='Device Tag'
                  onChange={(value)=>(
                    setTag(value)
                  )}
                  options={[
                    {
                      value: 'jack',
                      label: 'Jack',
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                ]}/>&nbsp;&nbsp;
                <Tooltip title="Add New Tag">
                  <Button type="primary" shape="circle" icon={<PlusOutlined />} size='default'/>
                </Tooltip>
                <br/>
            </Card>
            <br/>
        </div>
        <div style={{fontFamily:'poppins',width:'60%'}}>
          <Card style={{fontFamily:'poppins'}} styles={{ body:{paddingTop: 0}}}>
                <h2 style={{textAlign:'center'}}>Device Policy</h2>
                <Form 
                  onFinish={onFinish} 
                  onFinishFailed={onFinishFailed}
                  initialValues={{
                    kiosk: true,
                    adb: false,
                    brightness: 60,
                    volume: 0,
                    ota: true,
                    uptime: [startTime, endTime],
                    resolution: "720",
                    location: true,
                  }}
                >
                  <Form.Item label="Kiosk Mode" valuePropName="checked" name='kiosk'>
                    <Switch onChange={changeFlag}/>
                  </Form.Item>
                  <Form.Item label="Enable ADB" valuePropName="checked" name='adb'>
                    <Switch onChange={changeFlag}/>
                  </Form.Item>
                  <Form.Item label="Brightness" style={{width:'60%'}} name='brightness'>
                    <Slider step={10} onChange={changeFlag}/>
                  </Form.Item>
                  <Form.Item label="Volume" style={{width:'60%'}} name='volume'>
                    <Slider step={10} onChange={changeFlag}/>
                  </Form.Item>
                  <Form.Item label="Recieve OTA Updates" valuePropName="checked" name='ota'>
                    <Switch onChange={changeFlag}/>
                  </Form.Item>
                  <Form.Item label="Device Uptime" valuePropName="checked" name='uptime'>
                    <TimePicker.RangePicker format={format} onChange={changeFlag}/> 
                  </Form.Item>
                  <Form.Item label="Video Resolution" style={{width:'60%'}} name='resolution'>
                    <Select onChange={changeFlag}>
                      <Select.Option value=""></Select.Option>
                      <Select.Option value="360">360</Select.Option>
                      <Select.Option value="480">480</Select.Option>
                      <Select.Option value="720">720</Select.Option>
                      <Select.Option value="1080">1080</Select.Option>
                      <Select.Option value="4K">4K</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Geolocation Lockdown" valuePropName="checked" name='location'>
                    <Switch  onChange={changeFlag}/>
                  </Form.Item>
                  <div style={{width:'100%',display:'flex',flexDirection:'row-reverse',paddingRight:'10%'}}>
                    <Form.Item>
                      <Button htmlType="submit" style={{backgroundColor:'#0044CC',border:'none',color:'#fbfbf2',fontWeight:'500',display:(flag==false && schedule.length==0 && tag.length==0)?'none':''}}>Save</Button>
                    </Form.Item>
                  </div>
                  
                </Form>
            </Card>
        </div>
      </div>
    </div>
  )
}