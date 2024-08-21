import React from 'react'

function Header() {
  return (
    <div>
        Header
    </div>
  )
}

export default Header









































// import Image from 'next/image'
// import React from 'react'

// function Header() {
//     const headerMenu=[
//         {
//         id:1,
//         name:'Ride',
//         icon:'/icons8-electrician-64.png',
//     },
//     {
//         id:2,
//         name:'Ride',
//         icon:'/icons8-electrician-64.png',
//     }
// ]
//   return (
//     <div className='p-5 pb-3 pl-10 border-b-[4px] border-gray-200'>
//         <div>
//             <Image src='/wehelp.png'
//             width={70} height={70} alt='Logo' />
//             <div>
//                 {headerMenu.map((item)=>(
//                     <div>
//                         <Image src={item.icon} width={17} height={17} />
//                         <h2>{item.name}</h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header