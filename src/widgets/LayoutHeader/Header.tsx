import React, { useState } from "react";
import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import Modal from "../../shared/ui/Modal/Modal";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1>Posts</h1>
      <ThemeSwitcher />
      <button onClick={() => setIsOpen(true)}>О проекте</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>О проекте</h2>
        <p>Информация</p>
      </Modal>
    </header>
  );
};

export default Header;
