import React from 'react'
import { Search } from 'lucide-react'
import { ContentCard } from './ContentCard'

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">TeamFeed.io</h1>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </header>

      <div className="mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Add Article To Team Newsfeed"
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {['Artificial Intelligence', 'Mobility', 'Coding Agents', 'New Fundraising', 'Defense', 'New Breakthroughs', 'Growth Marketing', 'Legal'].map((label) => (
          <span key={label} className="bg-gray-200 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition duration-300">
            {label}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Featured Article</h2>
          <ContentCard
            featured={true}
            title="New AI Sales Rep Company Raises $30M From Top VCs"
            date="10/10/2024 - 1:00PM"
            likes={3}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Chronological Articles</h2>
          <div className="space-y-4">
            <ContentCard
              title="New AI Sales Rep Company Raises $30M From Top VCs"
              date="10/10/2024 - 1:00PM"
              likes={3}
            />
            <ContentCard
              title="Another Interesting Article"
              date="10/10/2024 - 12:30PM"
              likes={1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}