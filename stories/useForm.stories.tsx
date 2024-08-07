import React from 'react';
import {useForm} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import {Button, Form, TextField} from '@shopify/polaris';

export default {
  title: 'Hooks/useForm',
} as Meta;

// 定义验证函数
const required = (value: any) => (value ? "" : 'This field is required');
const emailFormat = (value: any) =>
  /\S+@\S+\.\S+/.test(value) ? "" : 'Invalid email format';
const length = (value: string) => value.length >= 8 ? "" : "The field value is at least 8 characters long"

const Template = () => {

  const [formValues, formErrors, handleInputChange, resetForm, validateForm, clearErrors] = useForm(
    {
      name: '',
      email: '',
      password: ''
    },
    {
      name: required,
      email: (value) => required(value) || emailFormat(value),
      password: (value) => required(value) || length(value)
    }
  );

  const handleChange = (key: string, value: string) => {
    handleInputChange(key, value);
    // 如果需要输入时清除error
    clearErrors(key)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formValues)
      resetForm();
    } else {
      console.log(formErrors)
    }
  };

  return (
    <div className={"w-96 max-w-full"}>
      <Form onSubmit={handleSubmit}>
        <div className={"flex gap-2 flex-col"}>
          <TextField
            label="Name"
            value={formValues.name}
            onChange={(value) => handleChange("name", value)}
            autoComplete={""}
            error={formErrors.name || ""}
          />

          <TextField
            label="Email"
            value={formValues.email}
            onChange={(value) => handleChange("email", value)}
            autoComplete={""}
            error={formErrors.email || ""}
          />

          <TextField
            label="Password"
            type={"password"}
            value={formValues.password}
            onChange={(value) => handleChange("password", value)}
            autoComplete={""}
            error={formErrors.password || ""}
          />

          <div className={"flex mt-2 gap-2"}>
            <Button size={"large"} onClick={resetForm}>Reset</Button>
            <Button size={"large"} submit variant={"primary"}>Submit</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export const example = Template.bind({});