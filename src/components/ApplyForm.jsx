import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'


function ApplyForm() {

  const { register, handleSubmit, control, setValue } = useForm();
  const onSubmitData = (data) => {
    console.log(data);
  };
  const publicHolidays  = ["New Year Day - 2024", "Christmas Day - 2023"]
  const [date, setDate] = React.useState(new Date(Date.now()));
  const handleChange = (dateChange) => {
    setValue("leaveDate", dateChange, {
      shouldDirty: true
    });
    setDate(dateChange);
  };

  return (
    <div className='lg:w-1/2 p-4 m-8 border rounded-lg'>
      <span className='text-xl font-bold pb-4'>Apply Leave</span>
      <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmitData)}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Jane" {...register('name')}/>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Leave Type
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-type" {...register('leaveType')}>
                <option>Vacation Leave</option>
                <option>Medical Leave</option>
                {publicHolidays.map((x,y) => <option key={y}>{x}</option>)}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Leave Date
            </label>
            <Controller
              name="leaveDate"
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
    </div>
  );
}

export default ApplyForm;