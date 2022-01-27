import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {useDispatch} from "react-redux";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SwipeableCarousel from "../components/SwipeableCarousel/SwipeableCarousel";
import * as authService from "../services/authService";
import {signIn} from "../store/actions/auths";
import {toast} from "react-toastify"

const Signin = () => {
    const dispatch = useDispatch();
    const onFinish = (values) => {
        loginUser(values)
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const loginUser = (values) => {
        authService.signin(values)
            .then((res) => {
                dispatch(signIn(res.data))
                toast.success(res.data.message);
                console.log("successssssss")
            }).catch((err) => {
            if (err && err.res && err.res.data && err.res.data.message)

                toast.error(err.res.data.message);
        })
    };
    return (
        <>
            <div className="container">
                <Header className="pb-5"/>
                <div className="content-style new-form login">
                    <h2 className="form-header">
                        <div className="row d-flex">
                            <div className="col-md-6 col-sm-6 col-xs-12 hlabel">Üye Girişi</div>
                            <div className="col-md-6 col-sm-6 col-xs-12 hsublabel">Üyeliğiniz yok mu?
                                <Link href="/signup" className="no-dcrtn text-white"> Üye Ol</Link>
                            </div>
                        </div>
                    </h2>
                    <div className="separator">
                        <span>veya</span>
                    </div>
                    <Form
                        name="basic"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                            <Button type="primary" htmlType="submit"
                                    className="align-items-center justify-content-center">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <SwipeableCarousel/>
            </div>
            <Footer/>
        </>

    );
};

export default Signin;