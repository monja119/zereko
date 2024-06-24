import React, {useState, useEffect} from 'react'
import HistoryCard from "../../components/HistoryCard";

const History = () => {

  return (
    <div className='h-full w-full overflow-y-scroll p-6 overflow-x-hidden flex flex-row gap-4 flex-wrap'>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
    </div>
  )
}

export default History