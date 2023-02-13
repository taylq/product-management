import * as React from "react";
import axios from 'axios';
import { useState, useEffect } from "react"
import User from './User';
import { Row, Col, Button, Form, Input } from 'antd';

function UsersList() {
    const [users, setUsers] = useState([{
        avatar_url: "",
        login: "",
        id: 1
    }])
    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                className="ant-advanced-search-form"
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={8} style={{ display: 'block' }}>
                        <Form.Item
                            label={`Avatar`}
                            name={`Avatar`}
                            rules={[{ required: true, message: 'Please input your Avatar!' }]}
                        >
                            <Input placeholder="Avatar url" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} style={{ display: 'block' }}>
                        <Form.Item
                            label={`Name`}
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                            name={`Name`}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Form.Item wrapperCol={{ span: 8 }} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">
                            Add new
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
            <br/>
            <Row>
                {users.map(user => (
                    <Col span={6} key={user.id}>
                        <User avatar_url={user.avatar_url} login={user.login} key={user.id} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default UsersList;
