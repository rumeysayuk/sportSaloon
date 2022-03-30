import React, {Fragment} from 'react';
import {Form, Input, Checkbox, Button, Select} from 'antd';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SwipeableCarousel from "../components/SwipeableCarousel/SwipeableCarousel";
import Link from "next/link";
import apiAxios from "../utility/apiAxios";
import {toast} from "react-toastify";
import { useRouter } from 'next/router'

const {Option} = Select;
const Signup = () => {
    const router = useRouter()
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            }, sm: {
                span: 8,
            },
        }, wrapperCol: {
            xs: {
                span: 24,
            }, sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24, offset: 0,
            }, sm: {
                span: 16, offset: 8,
            },
        },
    };
    const [form] = Form.useForm();

    const onFinish = (values) => {
        apiAxios.post("/auth/register", values).then(({data}) => {
            toast.success(data.message)
            router.push("/signin")
        })
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (<Form.Item name="prefix" noStyle>
        <Select
            style={{
                width: 70,
            }}
        >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            <Option value="90">+90</Option>
        </Select>
    </Form.Item>);

    const items = ["Tek üyelikle 350+ spor salonu", "Taahhütsüz ve Aylık üyelik esnekliği", "Tüm salonlara sınırsız giriş özgürlüğü", "Dilediğinde iptal etme hakkı"]

    return (
        <Fragment>
            <div className="container">
                <Header/>
                <div className="row d-flex w-100">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="row d-flex">
                            <div className="col-md-6 col-sm-6 col-xs-12 hlabel ">Üye ol</div>
                            <div className="col-md-6 col-sm-6 col-xs-12 hsublabel">Üyeliğiniz Var Mı?
                                <Link href="/signin" className="no-dcrtn text-white"> Üye Girişi</Link>
                            </div>
                        </div>

                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                prefix: '90',
                            }}
                            scrollToFirstError
                        >
                            <Form.Item
                                label="Adınız"
                                name="Firstname"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Soyadınız"
                                name="Lastname"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                },]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[{
                                    required: true, message: 'Please input your password!',
                                },]}
                                hasFeedback
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[{
                                    required: true, message: 'Please confirm your password!',
                                }, ({getFieldValue}) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[{
                                    required: true, message: 'Please input your phone number!',
                                },]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[{
                                    validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="warning" className="text-center btn btn-outline-warning"
                                        htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 myDiv">
                        <div className="row">
                            <div className="col-12 mt-1  text-center d-flex">
                                <span className="headSignup hlabel mt-5">RumoCard.com'u Neden Tercih Etmeli?</span>
                            </div>
                            <div>
                                <ul className="ul">
                                    {
                                        items.map((item, i) => (
                                            <li key={i} className="d-flex my-4 text-capitalize mx-3 px-3 mt-3">
                                                <CheckCircleOutlinedIcon className="text-success"/>
                                                <span className="text-signup">{item}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SwipeableCarousel/>
            </div>
            <Footer/>
        </Fragment>


    );
};

export default Signup;