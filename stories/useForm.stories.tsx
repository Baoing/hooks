import React from 'react';
import {useForm} from '@channelwill/hooks';
import {Meta} from "@storybook/react";
import {Button, Form, TextField} from '@shopify/polaris';

export default {
  title: 'Tool Hooks/useForm',
} as Meta;

// 定义验证函数
const required = (value: any) => (value ? "" : 'This field is required');
const emailFormat = (value: any) =>
  /\S+@\S+\.\S+/.test(value) ? "" : 'Invalid email format';
const length = (value: string) => value.length >= 8 ? "" : "The field value is at least 8 characters long"

const Template = () => {

  const [formValues, formErrors, handleInputChange, resetForm, validateForm, clearErrors] = useForm<{
    name: string,
    email: string,
    password: string
  }>(
    {
      name: '',
      email: '',
      password: ''
    },
    {
      email: (value) => required(value) || emailFormat(value),
      password: (value) => required(value) || length(value)
    }
  );

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
            onChange={(value) => handleInputChange({name: value})}
            autoComplete={""}
            error={formErrors.name || ""}
          />

          <TextField
            label="Email"
            value={formValues.email}
            onChange={(value) => handleInputChange({email: value})}
            autoComplete={""}
            error={formErrors.email || ""}
          />

          <TextField
            label="Password"
            type={"password"}
            value={formValues.password}
            onChange={(value) => handleInputChange({password: value})}
            autoComplete={""}
            error={formErrors.password || ""}
          />

          <div className={"flex mt-2 gap-2"}>
            <Button
              size={"large"}
              onClick={() => handleInputChange({name: 'Bob', email: 'Bob@gmail.com', password: '123456789'})}
            >Set init data</Button>
            <Button size={"large"} onClick={resetForm}>Reset</Button>
            <Button size={"large"} submit variant={"primary"}>Submit</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export const example = Template.bind({});