"use client";
import { SearchOutlined } from "@ant-design/icons";
import {AutoComplete ,Button,Input,Table,Space,Tag} from "antd";
import AddPolicyModal from "./AddPolicyModal";
import Link from "next/link";
import { useState } from "react";

const titltStyle={
    color:'black',fontWeight:'bold',fontSize:'1rem'
}

export default function AllPolicy() {
    const [options, setOptions] = useState([]);
    const [inp, setInp] = useState("");
    const handleInput =async (value) => {
        setInp(value);
        // if(value.trim().length>0){
        //     const res = await fetch('http://localhost:8080/courses/all');
        //     const data = await res.json();
        //     const opt = data.map(course => ({
        //         label: course.title,
        //         value: course.title,
        //         key: course.id
        //     }));
        //     setOptions(opt);
        // }
        // else{
        //     setOptions([]);
        // }
    };
    
    const handleSelect = (value) => {
        setInp(value); 
    };

    const handleSubmit=()=>{
        console.log(inp);
    }

    const columns = [
        {
            title: <span style={titltStyle}>S.NO</span>,
            dataIndex: 'sno',
            key: 'sno',
        },
        {
          title: <span style={titltStyle}>Policy</span>,
          dataIndex: 'policy',
          key: 'policy',
          render: (text) => <Link href={'/policy/currentpolicy'} style={{color:'black'}}>{text}</Link>,
        },
        // {
        //   title: 'Status',
        //   dataIndex: 'status',
        //   key: 'status',
        // },
        // {
        //   title: 'Schedule',
        //   dataIndex: 'schedule',
        //   key: 'schedule',
        // },
      ];
      const data = [
        {
          key: '1',
          sno:'1',
          policy: 'Sony Bravia',
        //   status: 'Online',
        //   schedule:'Schedule 34'
        },
        {
            key: '2',
            sno:'2',
            policy: 'Samsung Frame TV',
            // status: 'Online',
            // schedule:'Schedule 1'
        },
        {
            key: '3',
            sno:'3',
            policy: 'Toshiba New Sonic 4K',
            // status: 'Offline',
            // schedule:'Schedule 2'
        },
      ];
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>All Policies</h1>
            <div style={{padding:'2%'}}>
            <div>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> {/* Prevent default form submission */}
                    <AutoComplete
                        style={{ width:'90%',height:'3rem',fontSize:'2rem',fontWeight:'500'}}
                        options={options} // Use options based on input value
                        onSearch={handleInput} // Update input value on search
                        onSelect={handleSelect} // Update input value on selection
                        filterOption={true} 
                        value={inp}
                        autoFocus={true}
                    > 
                        <Input className="search-bar" style={{ height: '3rem', fontSize: '1.2rem', fontWeight: '500' }} placeholder="Search Policy" prefix={inp ? <SearchOutlined /> : <SearchOutlined style={{color:'#BFBFBF'}}/>} />
                    </AutoComplete>
                    <AddPolicyModal/>       
                </form>
            </div>
            <br/><br/>
            <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}
