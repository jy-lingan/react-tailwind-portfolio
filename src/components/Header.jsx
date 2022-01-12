import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const menuItems = [
        {
            title: 'Home',
            key: '/'
        },
        {
            title: 'Courses',
            key: '/courses'
        },
        {
            title: 'Projects',
            key: '/projects'
        },
        {
            title: 'Contact',
            key: '/contact'
        },

    ]

    return (
        <div className='text-gray-light'>
            <div
                className="flex 
            bg-gray-dark 
            justify-between
            items-center 
            p-2
            shadow-lg
            ">

                <div>
                    <h1 className='text-4xl font-bold'
                    >J I M</h1>
                </div>

                <div className='flex'>

                    {menuItems.map((item) => {
                        return (
                            <li className='list-none mx-5'>
                                <Link to={`/${item.key}`}>{item.title}</Link>
                            </li>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default Header
