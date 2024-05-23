import React from 'react'
import './Menu.css'

const Menu = () => {
    const menuItems = [
        { name: 'Spaghetti Carbonara', price: '$12.99', description: 'Classic pasta dish with bacon, eggs, and Parmesan cheese.' },
        { name: 'Margherita Pizza', price: '$10.99', description: 'Traditional Italian pizza topped with tomatoes, mozzarella, and basil.' },
        { name: 'Caesar Salad', price: '$8.99', description: 'Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.' },
        { name: 'Grilled Salmon', price: '$15.99', description: 'Delicious salmon fillet seasoned and grilled to perfection.' },
        { name: 'Chicken Alfredo', price: '$13.99', description: 'Creamy Alfredo sauce served over tender chicken breast and fettuccine pasta.' },
        { name: 'Beef Tacos', price: '$9.99', description: 'Soft corn tortillas filled with seasoned ground beef, lettuce, cheese, and salsa.' },
        { name: 'Vegetable Stir Fry', price: '$11.99', description: 'Fresh mixed vegetables stir-fried in a savory sauce and served over rice.' },
        { name: 'Lobster Bisque', price: '$14.99', description: 'Rich and creamy soup made with lobster meat, broth, cream, and spices.' },
        { name: 'Cheeseburger', price: '$10.49', description: 'Juicy beef patty topped with melted cheese, lettuce, tomato, and onion.' },
        { name: 'Chocolate Lava Cake', price: '$6.99', description: 'Decadent chocolate cake with a gooey, molten chocolate center.' }
      ];

  return (
    <div className="menu-card">
    <h1 className='menu-title'>Menu</h1>
    {menuItems.map((item, index) => (
      <div key={index} className="menu-item">
        <span className="menu-item-name">{item.name}</span>
        <span className='menu-item-description'>{item.description}</span>
        <span className="menu-item-price">{item.price}</span>
      </div>
    ))}
  </div>
  )
}

export default Menu