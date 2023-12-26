import React from 'react'
import { Icon } from '@iconify/react'
import PackageCard from './PackageCard'

const Packages = ({ fontColor, handleGoBack }) => {
    return (
        <div className={`${fontColor}`}>
            <div className='flex flex-col m-5 justify-between gap-y-8'>
                <div className='flex items-center gap-x-6'>
                    <button onClick={handleGoBack}>
                        <Icon icon="ep:back" width={25} />
                    </button>
                    <span className='text-2xl font-semibold'>
                        Available Packages
                    </span>
                </div>
                <div className='gap-y-5 flex flex-col'>
                    <PackageCard />
                    <PackageCard />
                </div>
            </div>
        </div>
    )
}

export default Packages