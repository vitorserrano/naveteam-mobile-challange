import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';

import Label from '../Label';
import { DefaultInput, ErrorMessage } from './styles';

type InputProps = React.ComponentProps<typeof DefaultInput>;

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = (
  props,
  ref,
) => {
  const {
    label,
    values,
    name,
    errors,
    touched,
    handleChange,
    setFieldTouched,
  } = props;

  const isError = touched[name] && errors[name] ? errors[name] : null;

  return (
    <>
      <Label title={label} />

      <DefaultInput
        ref={ref}
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        isError={!!isError}
        {...props}
      />

      <ErrorMessage>{isError}</ErrorMessage>
    </>
  );
};

export default forwardRef(Input);
