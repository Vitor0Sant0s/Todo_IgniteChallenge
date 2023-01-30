import React from 'react';
import Logo from '../../assets/Logo-todo.svg'

import styles from './styles.module.css'


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo da pagina Todo" />
    </header>
  );
}

export default Header;