import React from 'react';
import DatePicker from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function TimePickerDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('DatePicker');

  const handleChange = (date: string) => {
    console.log(date);
  };
  return <DatePicker type="primary" handleChange={handleChange} />;
}
