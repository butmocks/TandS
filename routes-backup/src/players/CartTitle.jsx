import React from 'react';

const TaskTitle = ({ userData, count }) => {
  
  return <div className="cart-title">{`${userData}, you added ${count} items`}</div>;
};

export default TaskTitle;
