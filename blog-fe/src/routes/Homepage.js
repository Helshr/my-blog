// export default connect()(IndexPage);
import React from 'react';
import { connect } from 'dva';
// import ProductForm from '../components/ProductForm';

const Homepage = ({ dispatch, messages }) => {
    console.log('products messages: ', messages)
    function func(values) {
        dispatch({
            type: 'users/submitMess',
            payload: { values: values }
        })
    }

    return (
        <div>
            <h2>Blog 注册</h2>
            <ProductForm onSubmit={func} />
        </div>
    );
};

export default connect(({ users }) => ({
    messages: users.data
}))(Products);