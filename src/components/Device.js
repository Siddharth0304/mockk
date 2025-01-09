'use client';
import styled from 'styled-components'
import { Card,Select,Tooltip,Button } from 'antd';
import {PlusOutlined } from '@ant-design/icons';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const TitleDiv=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
`;
export default function Device() {
  return (
    <div style={{padding:'0 3%'}}>
      <TitleDiv>
          <h2>Device Name</h2>
          <Button color="orangered" variant="solid">
            Delete
          </Button>     
      </TitleDiv>
      <div>
          <Card style={{width: 400,fontFamily:'poppins'}}>
              <img src="https://a.storyblok.com/f/47007/1200x628/a4a4843482/ad-glossary-meta.png" alt=""  style={{width:350}}/>
              <span>Status : Online</span> <br/>
              <span>Last Screenshot Timestamp : 09-01-2025, 03:09 p.m</span> <br/><br/>
              <Select
                style={{
                  width: 300,
                }}
                placeholder='Schedule'
                onChange={handleChange}
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
                  <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                </Tooltip>
          </Card>
          <br/>
          <Card style={{width: 400,fontFamily:'poppins'}}>
              <h3>Device Specifications</h3>
              
              <span>Policy : Policy 1</span> <br/>
              <span>UID : ugag-9890-hg-5690</span> <br/>
              <span>Android Version : 13</span><br/>
              <span>Memory Used : 343.21 MB</span><br/>
              <span>Total Memory : 2.1 GB</span><br/>
              <br/>
              <Select
                style={{
                  width: 300,
                }}
                placeholder='Device Tag'
                onChange={handleChange}
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
                <Button type="primary" shape="circle" icon={<PlusOutlined />} />
              </Tooltip>
          </Card>
      </div>
      <div>
        
      </div>
      

    </div>
  )
}