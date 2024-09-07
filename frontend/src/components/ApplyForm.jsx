import React from 'react'
import { useForm, Controller } from "react-hook-form"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import LeaveTable from './LeaveTable';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { add } from './redux/leaveSlice';
import Cookies from 'js-cookie'


function ApplyForm() {

  const dispatch = useDispatch();

  const { register, handleSubmit, control, setValue } = useForm({});
  const onSubmitData = (data) => {
    data['id'] = uuidv4()
    data['user'] = Cookies.get('username')
    data['date'] = format(data['date'], 'dd/MM/yyyy').toString()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      credentials: 'include',
      body: JSON.stringify(data),
    };
    fetch(`https://leaveprototype-backend.vercel.app/api/leave`, requestOptions)
        .then(res => {if (res.status==200){
          dispatch(add(data))
        }}).catch(err => {
          console.log(err)
        })
  };
  const publicHolidays  = ["New Year Day - 2024", "Christmas Day - 2023"]
  const [date, setDate] = React.useState(new Date(Date.now()));
  const handleChange = (dateChange) => {
    console.log(dateChange)
    setValue("date", dateChange, {
      shouldDirty: true
    });
    setDate(dateChange);
  };

  return (
    <div className='p-4 m-8 border rounded-lg'>
      <span className='text-xl font-bold pb-4'>Apply Leave</span>
      <form className="w-full max-w-xxl" onSubmit={handleSubmit(onSubmitData)}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-team">
              Team
            </label>
            <select class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-team" {...register('team')}>
              <option selected>Team A</option>
              <option>Team B</option>
              <option>Team C</option>
              <option>Team D</option>
            </select>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-type">
              Leave Type
            </label>
            <select class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-type" {...register('leaveType')}>
              <option selected>Vacation</option>
              <option>Medical</option>
              {publicHolidays.map((x,y) => <option key={y}>{x}</option>)}
            </select>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-shift">
              Shift
            </label>
            <select class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-shift" {...register('shift')}>
              <option selected>Day</option>
              <option>Night</option>
            </select>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-date">
              Leave Date
            </label>
            <Controller
              name="date"
              control={control}
              defaultValue={date}
              render={() => (
                <DatePicker
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  selected={date}
                  placeholderText="Select date"
                  onChange={handleChange}
                />
              )}
            />
          </div>
        </div>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Apply"/>
      </form>
      <LeaveTable />
    </div>
  );
}

export default ApplyForm;