import React from 'react';
import { motion } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';

type Props = Omit<HTMLMotionProps<"button">, "ref"> & { variant?: 'primary'|'secondary'|'ghost' };
// type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'secondary'|'ghost' };
export const Button: React.FC<Props> = ({ variant='primary', className='', children, ...rest }) => {
  const base = 'focus-ring inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-medium transition';
  const styles = variant === 'primary'
    ? 'bg-blue-600 text-white hover:opacity-95'
    : variant === 'secondary'
    ? 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100'
    : 'bg-transparent';
  return <motion.button whileHover={{ y: -1 }} whileTap={{ y: 0 }} className={`${base} ${styles} ${className}`} {...rest}>{children}</motion.button>;
};
