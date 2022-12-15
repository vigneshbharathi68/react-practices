import React from 'react'
import { BackBtn } from '../../../components/BackButton/BackBtn'
import { ListCard } from '../../../components/ListCard/ListCard'

export const ReqactQuery = () => {
    const topics = [
    ]
  return (
    <>
        <BackBtn />
        <ListCard title='React Query' data={topics}/>
    </>
  )
}
