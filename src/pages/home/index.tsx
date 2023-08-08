import React, { useState, useEffect } from 'react';
import './index.scss';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Index: React.FC<IndexType> = (props) => {
  return <div className="home">home</div>;
};
export default Index;
