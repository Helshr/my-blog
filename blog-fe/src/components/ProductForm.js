import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            // if (!err) {
            //     console.log("here")
            //     this.props.onSubmit(values)
            // }
            let email = values.email
            console.log('email: ', email)
            function is_email(email) {
                if ( email == "") {
                    return false;
                } else {
                    if (! /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test(email)) {
                        return false;
                    }
                }
                return true;
            }
            if (is_email(email)) {
                this.props.onSubmit(values)
                this.props.form.values = ''
            } else {
                alert('请输入正确邮箱地址！')
            }
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form onSubmit={this.handleSubmit}>
            <FormItem>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your Author!' }],
            })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Message!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="password" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
            })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="email" />
            )}
            </FormItem>
            <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
                提 交
            </Button>
            </FormItem>
        </Form>
        );
    }
}
    
const productsForm = Form.create()(NormalLoginForm);

export default productsForm
  
