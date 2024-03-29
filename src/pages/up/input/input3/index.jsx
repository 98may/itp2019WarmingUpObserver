import {
  Button,
  Card,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';

//below   from profile ！！！！！！！@may
import { Divider } from 'antd';
// import React, { Component } from 'react';
// import { PageHeaderWrapper } from '@ant-design/pro-layout';
// import { connect } from 'dva';
// import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

class BasicForm1 extends Component {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'formBasicForm13/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 7,
        },
      },
      wrapperCol: {
        xs: {
          span: 24, //输入框的宽度
        },
        sm: {
          span: 12,
        },
        md: {
          span: 10,
        },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 10,
          offset: 7,
        },
      },
    };

    // return (
    //   <PageHeaderWrapper>
    //     <Card bordered={false}>
    //       <Descriptions
    //         title="公司资金"
    //         style={{
    //           marginBottom: 32,
    //         }}
    //       >
    //         <Descriptions.Item label="总资金">999万</Descriptions.Item>
    //         <Descriptions.Item label="现金">200万</Descriptions.Item>
    //         <Descriptions.Item label="贷款">799万</Descriptions.Item>
    //         {/* <Descriptions.Item label="子订单">3214321432</Descriptions.Item> */}
    //       </Descriptions>
    //       <Divider
    //         style={{
    //           marginBottom: 32,
    //         }}
    //       />
    //       <Descriptions
    //         title="公司存货"
    //         style={{
    //           marginBottom: 32,
    //         }}
    //       >
    //         <Descriptions.Item label="A芯片">7456</Descriptions.Item>
    //         <Descriptions.Item label="B芯片">886</Descriptions.Item>
    //         <Descriptions.Item label="C芯片">7422</Descriptions.Item>
    //         {/* <Descriptions.Item label="取货地址">浙江省杭州市西湖区万塘路18号</Descriptions.Item> */}
    //         {/* <Descriptions.Item label="备注">无</Descriptions.Item> */}
    //       </Descriptions>
    //       <Divider
    //         style={{
    //           marginBottom: 32,
    //         }}
    //       />

    //       {/* <div className={styles.title}>退货商品</div>
    //       <Table
    //         style={{
    //           marginBottom: 24,
    //         }}
    //         pagination={false}
    //         loading={loading}
    //         dataSource={goodsData}
    //         columns={goodsColumns}
    //         rowKey="id"
    //       /> */}

    //       {/* <div className={styles.title}>退货进度</div>
    //       <Table
    //         style={{
    //           marginBottom: 16,
    //         }}
    //         pagination={false}
    //         loading={loading}
    //         dataSource={basicProgress}
    //         columns={progressColumns}
    //       /> */}
    //     </Card>
    //   </PageHeaderWrapper>
    // );

    return (
      <PageHeaderWrapper content={<FormattedMessage id="form-basic-form1.basic.description" />}>
        <Card bordered={false}>
          <Form
            onSubmit={this.handleSubmit}
            hideRequiredMark
            style={{
              marginTop: 8,
            }}
          >
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-basic-form1.userId.label" />}
            >
              {getFieldDecorator('userId', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-basic-form1.userId.required',
                    }),
                  },
                ],
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'form-basic-form1.userId.placeholder',
                  })}
                />,
              )}
            </FormItem>

            <Divider
              style={{
                marginBottom: 32,
              }}
            />
            <Divider
              style={{
                marginBottom: 32,
              }}
            />

            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-basic-form1.TInvest.label" />}
            >
              {getFieldDecorator('TInvest', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-basic-form1.TInvest.required',
                    }),
                  },
                ],
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'form-basic-form1.TInvest.placeholder',
                  })}
                />,
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-basic-form1.MInvest.label" />}
            >
              {getFieldDecorator('MInvest', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-basic-form1.MInvest.required',
                    }),
                  },
                ],
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'form-basic-form1.MInvest.placeholder',
                  })}
                  // min={0}
                  // max={100}
                />,
              )}
              {/* <span className="ant-form-text">万</span> */}
            </FormItem>

            <FormItem
              {...submitFormLayout}
              style={{
                marginTop: 32,
              }}
            >
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form-basic-form1.form.submit" />
              </Button>
              <Button
                style={{
                  marginLeft: 8,
                }}
              >
                <FormattedMessage id="form-basic-form1.form.save" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(
  connect(({ loading }) => ({
    submitting: loading.effects['formBasicForm13/submitRegularForm'],
  }))(BasicForm1),
);
