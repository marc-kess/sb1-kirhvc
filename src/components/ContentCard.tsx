import React from 'react'
import { ThumbsUp } from 'lucide-react'

interface ContentCardProps {
  title: string
  date: string
  likes: number
  featured?: boolean
}

export const ContentCard: React.FC<ContentCardProps> = ({ title, date, likes, featured = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${featured ? 'h-96' : 'h-48'}`}>
      <div className="h-2/3 bg-gray-300"></div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{date}</span>
          <div className="flex items-center">
            <ThumbsUp size={16} className="mr-1" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}