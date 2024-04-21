'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Danger from '../../public/danger.png'

const ItemNotFound = () => {

    const params = useParams<{ slug: string; }>()

    return (
        <div className='flex gap-2 items-center justify-start w-[80%]'>
            <div className='h-14 w-14 flex items-center justify-center'>
                <Image src={Danger} alt='not found' />
            </div>
            <p className='text-[#212121]'>There is no result for <strong>"{params.slug}"</strong>!</p>
        </div>
    )
}

export default ItemNotFound