"use client"
import React from 'react'
const Filter = () => {
  return (
      <div className="w-1/5 relative p-4 border-r-1 border-gray-500 shadow-sm rounded-lg">
          <div className="absolute top-0 left-0 bg-slate-100 p-4 rounded-lg h-full overflow-y-scroll ">
            <h3 className="text-lg font-bold mb-2">Filters</h3>
            <p className="text-gray-500 mb-4">Apply filters to table data.</p>
            <div className="mb-4">
              <label htmlFor="saved-filter" className="sr-only">
                Select saved filter
              </label>
              <select
                id="saved-filter"
                className="w-full border border-gray-300 rounded-md py-2 px-3 bg-white"
              >
                <option value="">Select saved filter</option>
                <option value="filter1">Filter 1</option>
                <option value="filter2">Filter 2</option>
              </select>
            </div>
            {/* Teams Section */}
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2">Teams</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="team-1" className="mr-2" />
                  <label
                    htmlFor="team-1"
                    className="px-2 py-1 text-sm rounded-lg bg-yellow-200"
                  >
                    Design
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="team-2" className="mr-2" />
                  <label
                    htmlFor="team-2"
                    className="px-2 py-1 text-sm rounded-lg bg-blue-200"
                  >
                    Product
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="team-3" className="mr-2" />
                  <label
                    htmlFor="team-3"
                    className="px-2 py-1 text-sm rounded-lg bg-purple-200"
                  >
                    Marketing
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="team-4" className="mr-2" />
                  <label
                    htmlFor="team-4"
                    className="px-2 py-1 text-sm rounded-lg bg-red-200"
                  >
                    Management
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="team-5" className="mr-2" />
                  <label
                    htmlFor="team-5"
                    className="px-2 py-1 text-sm rounded-lg bg-green-200"
                  >
                    Sales
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="team-6" className="mr-2" />
                  <label
                    htmlFor="team-6"
                    className="px-2 py-1 text-sm rounded-lg bg-blue-200"
                  >
                    Operations
                  </label>
                </div>
              </div>
            </div>

            {/* Role Section */}
            <div className="mb-4">
              <h4 className="text-md font-semibold mb-2">Role</h4>
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2"
              />
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="role-1" className="mr-2" />
                  <label htmlFor="role-1" className="text-sm">
                    Backend Developer
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-2" className="mr-2" />
                  <label htmlFor="role-2" className="text-sm">
                    Frontend Developer
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-3" className="mr-2" />
                  <label htmlFor="role-3" className="text-sm">
                    Fullstack Developer
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-4" className="mr-2" />
                  <label htmlFor="role-4" className="text-sm">
                    Product Designer
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-5" className="mr-2" />
                  <label htmlFor="role-5" className="text-sm">
                    Product Manager
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-6" className="mr-2" />
                  <label htmlFor="role-6" className="text-sm">
                    QA Engineer
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-7" className="mr-2" />
                  <label htmlFor="role-7" className="text-sm">
                    UX Copywriter
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="role-8" className="mr-2" />
                  <label htmlFor="role-8" className="text-sm">
                    UX Designer
                  </label>
                </div>
              </div>
              <button className="text-purple-600 text-sm font-semibold mt-2">
                Show 10 more
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <button className="text-gray-600 bg-gray-100 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button className="text-white bg-yellow-400 px-4 py-2 rounded-md">
                Save filter
              </button>
              <button className="text-white bg-orange-500 px-4 py-2 rounded-md">
                Apply
              </button>
            </div>
          </div>
        </div>
  )
}

export default Filter;