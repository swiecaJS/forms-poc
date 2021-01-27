import { useForm } from "react-hook-form";
import React from "react";

export function Form({ defaultValues, children, onSubmit }) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}

export function Input({ register, name, ...rest }) {
  return (
    <div>
      <label for={name}>{name}</label>
      <input name={name} ref={register} {...rest} />
    </div>
  );
}
export function SingleLineEdit({ register, name, ...rest }) {
  return (
    <div>
      <label for={name}>{name}</label>
      <input name={name} ref={register} {...rest} />
    </div>
  );
}

export function SelectOneIcon({ register, name, ...rest }) {
  const options = ['Play', 'Pause', 'Share']

  return (
    <select name={name} ref={register} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export function getComponentByType(type){
  switch (type) {
    case 'SingleLineEdit':
      return SingleLineEdit
    case 'MultiLineEdit':
      return MultiLineEdit
    case 'SelectOneIcon':
      return SelectOneIcon
    default:
      return null
  }
}

export function MultiLineEdit({ register, name, ...rest }) {
  return (
    <div>
      <label for={name}>{name}</label>
      <textarea name={name} ref={register} {...rest} />
    </div>
  );
}

export function Select({ register, options, name, ...rest }) {
  return (
    <select name={name} ref={register} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}
