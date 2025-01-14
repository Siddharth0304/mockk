"use client";
import { useState } from 'react';
import { Button, Modal,Form,Input,Space,InputNumber,Select,Tooltip,Checkbox,Switch,Slider,TimePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
const format = 'HH:mm:ss';

export default function AddPolicyModal() {
    const startTime = dayjs('12:08:23', 'h:mm:ss');
    const endTime = dayjs('12:08:23', 'h:mm:ss');
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const [form] = Form.useForm(); 

    const handleOk = () => {
      form
      .validateFields()
      .then((values) => {
        setConfirmLoading(true);
          console.log(values);
          setOpen(false);
          setConfirmLoading(false);
          form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
    };

    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };

    const showModal = () => {
      setOpen(true);
    };
    return (
      <>
        <Button type="primary" onClick={showModal} style={{height:'2.9rem',padding:'0 1rem',fontSize:'1rem',fontWeight:'600',marginLeft:'10px',backgroundColor:'#578E7E',color:'#20201e',border:'2px solid #20201e'}}>
          Add Policy
        </Button>
        <Modal
          title="Add New Policy"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >

          <Form name="basic" form={form} autoComplete="off">
                  <Form.Item label="Policy Name" valuePropName="checked" name='policy_name' rules={[{ required: true, message: 'Please enter policy name!' }]}>
                    <Input />
                  </Form.Item>
                <Form.Item label="Kiosk Mode" valuePropName="checked" name='kiosk'>
                    <Switch/>
                  </Form.Item>
                  <Form.Item label="Enable ADB" valuePropName="checked" name='adb'>
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Brightness" style={{width:'60%'}} name='brightness'>
                    <Slider step={10} />
                  </Form.Item>
                  <Form.Item label="Volume" style={{width:'60%'}} name='volume'>
                    <Slider step={10}/>
                  </Form.Item>
                  <Form.Item label="Recieve OTA Updates" valuePropName="checked" name='ota'> 
                    <Switch />
                  </Form.Item>
                  <Form.Item label="Device Uptime" valuePropName="checked" name='uptime' rules={[{ required: true, message: 'Please schedule the uptime!' }]}>
                    <TimePicker.RangePicker format={format} /> 
                  </Form.Item>
                  <Form.Item label="Video Resolution" style={{width:'60%'}} name='resolution' rules={[{ required: true, message: 'Please select resolution!' }]}>
                    <Select>
                      <Select.Option value=""></Select.Option>
                      <Select.Option value="360">360</Select.Option>
                      <Select.Option value="480">480</Select.Option>
                      <Select.Option value="720">720</Select.Option>
                      <Select.Option value="1080">1080</Select.Option>
                      <Select.Option value="4K">4K</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Geolocation Lockdown" valuePropName="checked" name='location'>
                    <Switch />
                  </Form.Item>
        </Form>
            
        </Modal>
        
      </>
    );
}
