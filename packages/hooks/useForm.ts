import { useState } from "react";

export type Validator = (value: string) => string;

function useForm<T extends Record<string, any>>(
  initialState: T,
  validationSchema?: Partial<Record<keyof T, Validator>>
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
      // 使用类型断言来确保 key 是 keyof T
      const error = validationSchema[key as keyof T]?.(values[key as keyof T]);
      newErrors[key] = error || ""; // 如果没有错误，设置为空字符串
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