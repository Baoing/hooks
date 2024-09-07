import { useState } from "react";

type Validator = (value: string) => string;

interface InitialState {
  [key: string]: string;
}

interface ValidationSchema {
  [key: string]: Validator;
}

function useForm(
  initialState: InitialState,
  validationSchema?: ValidationSchema
) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleChange = (newValues: Record<string, any>) => {
    setValues({ ...values, ...newValues });

    if(validationSchema){
      // Perform validation on the changed field
      for (let key in newValues){
        // 如果更改了值，则将报错信息取消
        newValues[key] && setErrors({ ...errors, [key]: "" });
      }
    }
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    for (const key in validationSchema) {
      const error = validationSchema[key](values[key]);
      newErrors[key] = error;
      if (error) {
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const clearErrors = (key?: string) => {
    if(key){
      setErrors({ ...errors, [key]: "" });
    }else{
      setErrors({})
    }
  }

  return [
    values,
    errors,
    handleChange,
    resetForm,
    validateForm,
    clearErrors,
  ] as const;
}

export default useForm;