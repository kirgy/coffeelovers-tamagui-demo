import React, { createContext, useContext, useState } from 'react'

export type Rating = {
  uuid: string
  rating: number
  userId: string
}

type RatingContextType = {
  ratings: Rating[]
  addRating: (uuid: string, rating: number) => void
  getRatingsByUUID: (uuid: string) => void
  getMyRatingsByUUID: (uuid: string) => Rating | undefined
}

const RatingsInitialState: Rating[] = [
  // {
  //   uuid: '41f2f4ccb3e005249b9d6ee49ffc3b80',
  //   rating: 4,
  //   userId: 'not_me',
  // },
]

const RatingContext = createContext<RatingContextType | undefined>(undefined)

type RatingProviderProps = {
  children: React.ReactNode
}

export const RatingProvider = ({ children }: RatingProviderProps) => {
  const [ratings, setRatings] = useState<Rating[]>(RatingsInitialState)
  const addRating = (uuid: string, rating: number) => {
    if (!ratings.find((r) => r.uuid === uuid)) {
      setRatings([...ratings, { uuid, rating, userId: 'my_id' }])
    }
  }

  const getRatingsByUUID = (uuid: string): Rating[] => {
    return ratings.filter((r) => r.uuid === uuid)
  }

  const getMyRatingsByUUID = (uuid: string): Rating | undefined => {
    return ratings.find((r) => r.uuid === uuid && r.userId === 'my_id')
  }
  return (
    <RatingContext.Provider value={{ ratings, addRating, getRatingsByUUID, getMyRatingsByUUID }}>
      {children}
    </RatingContext.Provider>
  )
}

export const useRatings = (): RatingContextType => {
  const context = useContext(RatingContext)
  if (context === undefined) {
    throw new Error('useRatings must be used within a RatingProvider')
  }
  return context
}
