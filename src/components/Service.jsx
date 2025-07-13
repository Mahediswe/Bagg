import React from 'react'

const Service = () => {
  const data = [
    { id: 0, title: 'Online Shopping' },
    { id: 1, title: 'Free Delivery' },
    { id: 2, title: 'Save Money' },
    { id: 3, title: 'Easy Returns' },
  ]

  return (
    <div className="border-y-2 bg-gradient-to-r from-[#fbe2ff] to-[#fde9fd] min-h-[300px] pt-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-6">
        {data.map((item, id) => (
          <div
            key={id}
            className="flex-1 text-center border-r last:border-r-0 border-gray-300 px-4"
          >
            <div className="h-24 flex items-center justify-center bg-gray-100 rounded shadow-sm">
              <p className="text-2xl font-bold text-gray-700">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
