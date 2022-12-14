import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const onInputChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onCheckBoxGroupChange = e => {
    if (values[e.target.name]) {
      const arr = [...values[e.target.name]];
      if (arr.includes(e.target.value)) {
        arr.splice(arr.indexOf(e.target.value), 1);
        setValues({ ...values, [e.target.name]: arr });
      } else {
        setValues({ ...values, [e.target.name]: [...arr, e.target.value] });
      }
    } else {
      setValues({ ...values, [e.target.name]: [e.target.value] });
    }
  };

  const onRadioGroupChange = e => {
    if (values[e.target.name]) {
      setValues({ ...values, [e.target.name]: e.target.value });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  return [values, onInputChange, onCheckBoxGroupChange, onRadioGroupChange];
};

export default useForm;
