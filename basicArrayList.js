import React from 'react'

export default function BasicArrayList() {
    const student=[
        {
            id : 1,
            name:'surya',
            address: 'hyd'
        },
        {
            id : 2,
            name:'sai',
            address: 'chennai'
        },
        {
            id : 3,
            name:'sampath',
            address: 'ap'
        },
        {
            id : 4,
            name:'ramesh',
            address: 'vijayawada'
        },

    ]
    return (
        student.map((stu)=> <h3 key={stu.id} > my id is {stu.id} and my name is {stu.name}, my address is {stu.address}</h3>)
  )
}

