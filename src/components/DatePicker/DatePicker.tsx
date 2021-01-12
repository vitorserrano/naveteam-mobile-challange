import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

interface IDatePicker {
  value: string | Date;
  onChange(): void;
}

const DatePicker: React.FC<IDatePicker> = ({ value, onChange }) => {
  return (
    <DateTimePicker
      maximumDate={new Date()}
      value={value || new Date()}
      mode="date"
      is24Hour
      display="default"
      onChange={onChange}
    />
  );
};

export default DatePicker;
