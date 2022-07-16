import dayjs from 'dayjs'
import { within, userEvent, screen } from '@storybook/testing-library'
import { Story, Meta } from '@storybook/react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from './DatePicker'
import { action } from '@storybook/addon-actions'

// this was missing in their
import { expect } from '@storybook/jest'

const Template: Story = (props) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div style={{ width: '1200px', height: '800px' }}>
      <DatePicker {...props} />
    </div>
  </LocalizationProvider>
)

export default {
  title: 'Product Master/DatePicker',
  component: Template,
} as Meta

const args = {
  label: 'Closing Date',
  id: 'id',
  required: true,
  onChange: action('change'),
  description: 'field description',
  defaultValue: dayjs('2018-06-03').toDate(),
}

export const Default = Template.bind({})
Default.args = args

export const Open = Template.bind({})
Open.args = args
Open.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const input = await canvas.findByTestId('date-picker-input')
  expect(input).toBeTruthy()

  const CalendarIcon = await canvas.findByTestId('CalendarIcon')

  await userEvent.click(CalendarIcon)

  const popup = await screen.findByRole('dialog')
  expect(popup).toBeTruthy()
}

export const OpenDesktop = Template.bind({})
OpenDesktop.args = {
  ...args,
  useDesktopVersion: true,
}
OpenDesktop.play = Open.play

export const Error = Template.bind({})
Error.args = {
  ...args,
  error: true,
  helperText: 'bla',
  errorMessage: 'Date is invalid',
}
