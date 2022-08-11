import { ReactNode } from 'react';
interface CardProps {
  children: ReactNode;
}

export const Card = (props: CardProps) => {
  const { children } = props;
  return <div style={{
    border: '1px solid black',
    borderRadius: '8px',
    width: 'max-content',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    margin: '20px'
  }}>
    {children}
  </div>;
};
