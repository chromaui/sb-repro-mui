import dayjs from 'dayjs';
import { FormHelperText, InputLabel, TextField } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';

export const DatePicker = (props: any) => {
  const {
    id,
    description,
    required,
    value,
    defaultValue,
    onChange,
    label,
    disabled,
    manual,
    dateTime,
    className,
    errorMessage,
    ...restProps
  } = props;
  const valueToRender = typeof value === 'string' ? value : value?.value;

  return (
    <div className={className}>
      <InputLabel htmlFor={id} defaultValue={label} required={required}>
        {label}
      </InputLabel>
      <MuiDatePicker
        OpenPickerButtonProps={{
          'data-testid': 'date-picker-open-button',
        }}
        InputProps={{
          'data-testid': 'date-picker-input',
        }}
        disabled={disabled}
        value={valueToRender || defaultValue}
        onChange={(newValue: any) => {
          onChange({
            value: newValue
              ? newValue.isValid()
                ? dateTime
                  ? dayjs(newValue).toISOString()
                  : dayjs(newValue).format('YYYY-MM-DD')
                : 'Invalid'
              : null,
          });
        }}
        renderInput={(params) => (
          <TextField id={id} {...params} error={!!errorMessage} />
        )}
        {...restProps}
      />
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </div>
  );
};
