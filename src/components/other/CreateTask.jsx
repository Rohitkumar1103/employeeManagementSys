import React from 'react'

const CreateTask = () => {
  return (
        <div className="mt-10 max-w-6xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-400">Create New Task</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Task Title */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-300 font-medium">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI Design"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-gray-300 font-medium">Description</label>
            <textarea
              placeholder="Task description..."
              rows="5"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-300 font-medium">Date</label>
            <input
              type="date"
              className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-300 font-medium">Assign To</label>
            <input
              type="text"
              placeholder="Employee name"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-300 font-medium">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="p-3 rounded-lg bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 transition-transform duration-300 
                      text-white font-semibold py-3 px-10 rounded-full shadow-md 
                      transform hover:scale-105">
            Create Task
          </button>

          </div>
        </form>
      </div>
  )
}

export default CreateTask