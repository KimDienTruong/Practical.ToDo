import React from 'react'
import FormInput from './FormInput'

const AddToDoForm = () => {
  return (
    <form>
        <FormInput 
          label="Title"
          type="text"
          placeholder="Title"
          id="title"
        />
        <FormInput 
          label="Description"
          type="text"
          placeholder="Description"
          id="description"
        />
         <div className="flex items-center justify-center ">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add Task
        </button>
      </div>
    </form>
  )
}

export default AddToDoForm