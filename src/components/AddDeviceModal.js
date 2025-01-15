"use client";
import { useState } from 'react';
import { Button, Modal,Form,Input,Space,InputNumber,Select,Tooltip,Checkbox,Switch,Slider,TimePicker } from 'antd';
import { PlusOutlined,PlusCircleTwoTone, PlusCircleOutlined } from '@ant-design/icons';
import '../app/ui/AddModal.css'
import '../app/ui/AddDeviceModal.css';
import dayjs from 'dayjs';
const format = 'HH:mm:ss';

//modalText1,open1,confirmLoading1 - To open 'Add Device' modal
//modalText2,open2,confirmLoading2 - To open the next modal related to configuring new device

export default function AddDeviceModal() {
    const startTime = dayjs('12:08:23', 'h:mm:ss');
    const endTime = dayjs('12:08:23', 'h:mm:ss');
    const [open1, setOpen1] = useState(false);
    const [confirmLoading1, setConfirmLoading1] = useState(false);
    const [modalText1, setModalText1] = useState('Content of the modal');
    const [open2, setOpen2] = useState(false);
    const [confirmLoading2, setConfirmLoading2] = useState(false);
    const [modalText2, setModalText2] = useState('Content of the modal');
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [form] = Form.useForm(); 

    const handleOk2 = () => {
      form
      .validateFields()
      .then((values) => {
        setConfirmLoading2(true);
          console.log(values);
          setOpen2(false);
          setConfirmLoading2(false);
          form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
    };

    const handleCancel2 = () => {
      console.log('Clicked cancel button');
      setOpen2(false);
    };

    const showModal1 = () => {
      setOpen1(true);
    };
    const handleOk1 = () => {
      setModalText1('The modal will be closed after two seconds');
      setConfirmLoading1(true);
      setTimeout(() => {
        setOpen1(false);
        setConfirmLoading1(false);
        setOpen2(true);
      }, 2000);
    };
    const handleCancel1 = () => {
      console.log('Clicked cancel button');
      setOpen1(false);
    };
    return (
      <>
        <Button type="primary" onClick={showModal1} className='add-button'>
          Add Device <PlusCircleOutlined />
        </Button>
        <Modal
          title="Registration Code"
          open={open1}
          onOk={handleOk1}
          confirmLoading={confirmLoading1}
          onCancel={handleCancel1}
          okText={"Add Device"}
            okButtonProps={{
                style: { 
                  backgroundColor: '#578f7e', 
                  border: '2px solid #578e7e', 
                  color: '#fffaec', 
                  fontWeight: '600'
                }
                
            }}
            cancelButtonProps={{
              style:{
                backgroundColor:'#BC1823',
                color:'#fffaec',
                fontWeight: '600',
                border:'2px solid #fffaec'
              }
            }}
        >
            <div>
                <div style={{fontFamily:'poppins'}}>
                    <h3>Steps To Register :</h3>
                    1. Enter the 9-digit registration code displayed on your device. <br/>
                    2. The device registration code will only be valid for 5 minutes. <br/>
                    3. After 5 minutes the registration code will be refreshed. <br/>
                </div>
            </div>
            <br/><br/>
            <Form>
                <Form.Item label="Enter Registration Code" name="reg_code" rules={[{required: true,message: 'Please enter the code!',},]} style={{fontWeight:'500'}}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>

        <Modal
          
          title="Provision Device"
          open={open2}
          onOk={handleOk2}
          confirmLoading={confirmLoading2}
          onCancel={handleCancel2}
        >
          <Form
            name="basic"
            form={form}
            autoComplete="off"
            style={{fontFamily:'poppins'}}
          >
            <Form.Item
              
              label={<span className='single-device-form-item'>Device Name</span>}
              name="device_name"
              rules={[
                {
                  required: true,
                  message: 'Please enter device name!',
                },
              ]}
            >
              <Input placeholder="Device Name"/>
            </Form.Item>
            <Form.Item
                label={<span className='single-device-form-item'>Location Coordinates</span>}
                name="coordinates"
                rules={[{ required: true, message: 'Please enter the coordinates!' }]}
            >
              <Space>
                  <Form.Item
                      name="Latitude"
                      noStyle
                      rules={[{ required: true, message: 'Please enter the latitude!' }]}
                  >
                      <InputNumber placeholder="Latitude" />
                  </Form.Item>

                  <Form.Item
                      name="Longitude"
                      noStyle
                      rules={[{ required: true, message: 'Please enter the longitude!' }]}
                  >
                      <InputNumber placeholder="Longitude" style={{width:'58%'}}/>
                  </Form.Item>
              </Space>
            </Form.Item>
            <div style={{display:'flex',alignItems:'start'}}>
              <Form.Item label={<span className='single-device-form-item'>Device Tag</span>} name="tag" rules={[{ required: true, message: 'Please select a tag!' }]}>
                <Select style={{width:300}} placeholder='Device Tag'>
                  <Select.Option value="360">360</Select.Option>
                  <Select.Option value="480">480</Select.Option>
                  <Select.Option value="720">720</Select.Option>
                  <Select.Option value="1080">1080</Select.Option>
                  <Select.Option value="4K">4K</Select.Option>
                </Select>
              </Form.Item>&nbsp;&nbsp;
              <Tooltip title="Add New Tag">
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size='default' className='plus-button'/>
              </Tooltip>
            </div>
            <div style={{display:'flex',alignItems:'start'}}>
              <Form.Item label={<span className='single-device-form-item'>Device Policy</span>} name="policy" rules={[{ required: true, message: 'Please select a policy!' }]}>
                <Select style={{width:300}} placeholder='Device Policy'>
                  <Select.Option value=""></Select.Option>
                  <Select.Option value="360">360</Select.Option>
                  <Select.Option value="480">480</Select.Option>
                  <Select.Option value="720">720</Select.Option>
                  <Select.Option value="1080">1080</Select.Option>
                  <Select.Option value="4K">4K</Select.Option>
                </Select>
              </Form.Item>
              &nbsp;&nbsp;
              <Tooltip title="Add New Policy">
                <Button type="primary" shape="circle" icon={<PlusOutlined />} size='default' className='plus-button'/>
              </Tooltip>
            </div>
            
            <Checkbox checked={componentDisabled} onChange={(e) => setComponentDisabled(e.target.checked)}>
              {<span className='single-device-form-item'>Modify Policy For This Device</span>}
            </Checkbox>
            <div style={{display:componentDisabled==false?'none':'',pointerEvents: !componentDisabled ? 'none' : 'auto', opacity: !componentDisabled ? 0.5 : 1,}}>
              <br/>
                <Form.Item label={<span className='single-device-form-item'>Kiosk Mode</span>} valuePropName="checked" name='kiosk'>
                    <Switch/>
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Enable ADB</span>} valuePropName="checked" name='adb'>
                    <Switch />
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Brightness</span>} style={{width:'60%'}} name='brightness'>
                    <Slider step={10} />
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Volume</span>} style={{width:'60%'}} name='volume'>
                    <Slider step={10}/>
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Recieve OTA Updates</span>} valuePropName="checked" name='ota'>
                    <Switch />
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Device Uptime</span>} valuePropName="checked" name='uptime'>
                    <TimePicker.RangePicker format={format} /> 
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Video Resolution</span>} style={{width:'60%'}} name='resolution'>
                    <Select>
                      <Select.Option value=""></Select.Option>
                      <Select.Option value="360">360</Select.Option>
                      <Select.Option value="480">480</Select.Option>
                      <Select.Option value="720">720</Select.Option>
                      <Select.Option value="1080">1080</Select.Option>
                      <Select.Option value="4K">4K</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label={<span className='single-device-form-item'>Geolocation Lockdown</span>} valuePropName="checked" name='location'>
                    <Switch />
                  </Form.Item>
            </div>
        </Form>
            
        </Modal>
        
      </>
    );
}
