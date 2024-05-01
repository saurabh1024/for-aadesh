import React from 'react'
import MyCollections from '../common/MyCollections'

const MyCollection = () => {
    return (
        <div className='my_collection py-[50px]'>
            <div className="container">
                <h3 className='mb-5 border-b pb-3 border-[#FFFFFF1A]'>My collection</h3>

                <MyCollections/>
                
            </div>
        </div>
    )
}

export default MyCollection