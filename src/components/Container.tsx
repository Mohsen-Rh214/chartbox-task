import React from 'react'

const Container = ({ children, styles }: { children: React.ReactNode, styles?: string }) => {
    return (
        <div className={`flex flex-col h-40 w-[550px] bg-white rounded-lg shadow-md justify-center items-center ${styles}`}>{children}</div>
    )
}

export default Container