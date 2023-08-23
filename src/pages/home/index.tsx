import React from 'react';
import './index.scss';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Index: React.FC<IndexType> = (props) => {
  return <div className="home">home1123</div>;
};
export default Index;
