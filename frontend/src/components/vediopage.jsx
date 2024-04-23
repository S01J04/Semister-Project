import React from 'react'
import ReactPlayer from 'react-player'

const vediopage = () => {
  return (
    <div>
      <div className='text-center text-3xl font-bold py-6'>Billboard Advertising Campaign Executed For Our Client</div>
      <div className="h-[200px] flex items-center justify-center  md:h-[400px] lg:h-[400px] mx-auto xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=N6v7HQiCNiQ`}
                            controls
                            width="90%"
                            height="90%"
                            style={{ backgroundColor: "#000000" }}
                            playing={true}
                        />
                    </div>
    </div>
  )
}

export default vediopage
