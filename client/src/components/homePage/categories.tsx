import React from 'react'
interface UserProfile {
    name: string;
    category: string;
    image: string;
  }
  
  const users: UserProfile[] = [
    {
      name: "BasBoll",
      category: "Sports",
      image: "/images/Avatar.png", 
    },
    {
      name: "Tennis",
      category: "Sports",
      image: "/images/Avatar2.png",
    },
    {
      name: "Guitar",
      category: "Music",
      image: "/images/Avatar3.png",
    },
    {
      name: "Lily-Rose Chedjou",
      category: "Food",
      image: "/images/Avatar4.png",
    },
    {
      name: "sadwolf227",
      category: "Catalog 1",
      image: "/images/Avatar5.png",
    },
    {
      name: "greenkoala518",
      category: "Catalog 2",
      image: "/images/Avatar6.png",
    },
    {
      name: "tinypanda866",
      category: "Catalog 3",
      image: "/images/Avatar7.png",
    },
    {
      name: "tinypanda866",
      category: "Catalog 4",
      image: "/images/Avatar8.png",
    },
  ];

const Categories = () => {
  return (
    <div className="py-16 w-[90%] m-auto">
        <h1 className="text-4xl text-center mt-7 font-semibold">View Our  Categories</h1>
       <div className="flex justify-center mt-4">
        <p className="max-w-xl text-center text-[#475467]">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
       </div>
        
       <div className=" mt-10 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
          {users.map((user, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-gray-900">
                {user.name}
              </h3>
              <p className="mt-1 text-sm text-orange-500">{user.category}</p>
            </div>
          ))}
        </div>
      </div>


      </div>
  )
}

export default Categories
