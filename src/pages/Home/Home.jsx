import React from 'react'
import Nothing from "../../components/Nothing.jsx";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div className={"w-full flex flex-col justify-center items-center h-full"}>
            <Nothing/>
            <Link
                to={"project/create"}
                className={'btn btn-primary mt-16'}
            >
                Créer un projet
            </Link>
        </div>
    </>
  )
}

export default Home