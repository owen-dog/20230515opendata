import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const FormDisabledDemo = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };
    return (
        <>

            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}

            >
                <Form.Item label="Radio">
                    <Radio.Group>
                        <Radio value="apple"> For-profit advertising </Radio>
                        <Radio value="pear"> Non-profit advertising </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Name of advertisement">
                    <Input />
                </Form.Item>
                <Form.Item label="Type of the advertisement">
                    <Select>
                        <Select.Option value="demo">Housing rental</Select.Option>
                        <Select.Option value="demo">Property for sale</Select.Option>
                        <Select.Option value="demo">...</Select.Option>

                    </Select>
                </Form.Item>
               
                <Form.Item label="City">
                    <Cascader
                        options={[
                            {
                                value: 'london',
                                label: 'london',
                                children: [
                                    {
                                        value: 'soho',
                                        label: 'soho',
                                    },
                                    {
                                        value: 'soho1',
                                        label: 'soho1',
                                    },
                                    {
                                        value: 'soho2',
                                        label: 'soho2',
                                    },
                                ],
                               
                            },
                            {
                                value: 'hampshire',
                                label: 'hampshire',
                                children: [
                                    {
                                        value: 'southampton',
                                        label: 'southampton',
                                    },
                                    {
                                        value: 'southampton2',
                                        label: 'southampton2',
                                    },
                                    {
                                        value: 'southampton3',
                                        label: 'southampton3',
                                    },
                                ],
                               
                            },
                            {
                                value: 'oxford',
                                label: 'oxford',
                                children: [
                                    {
                                        value: 'oxford',
                                        label: 'oxford',
                                    },
                                ],
                            }
                        ]}
                    />
                </Form.Item>
                {/* <Form.Item label="Starting date">
                    <DatePicker />
                </Form.Item> */}
                <Form.Item label="Ranging date">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Number of commercial each day">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="Button">
                    <Button>Summit</Button>
                </Form.Item>
            </Form>
        </>
    );
};
export default () => <FormDisabledDemo />;