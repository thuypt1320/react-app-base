import './styles/layout.css';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

interface LayoutItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode,
  type: 'layout-header' | 'layout-main' | 'layout-footer' | 'layout-header-left' | 'layout-header-right' | 'layout-note',
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={'layout'}>
      {children}
    </div>
  );
};

export const LayoutItem = ({
  children,
  type,
  ...others
}: LayoutItemProps) => {
  return (
    <div className={type} {...others}>
      {children}
    </div>
  );
};
