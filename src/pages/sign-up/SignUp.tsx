import React from 'react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import RegisterForm from '../../components/forms/registerForm';

const SignUp: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white shadow-[0px_3px_6px_rgba(18,15,40,0.12)]">
      <Header />

      <RegisterForm />

      <Footer />
    </div>
  );
};

export default SignUp;
