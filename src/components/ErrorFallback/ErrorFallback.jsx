import React, { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';

import errorImage from '../../assets/images/error-image.png'

import s from './ErrorFallback.module.scss'

function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('error', error)
  })

  const handleTryAgain = () => {
    resetErrorBoundary();
    navigate('/');
  }
  return (
      <div className={s.errorWrapper}>
        <img className={s.errorImage} src={errorImage} alt='Something went wrong!'/>
        <button className={s.errorButton} onClick={handleTryAgain}>Try again</button>
      </div>
  );
}

export default ErrorFallback;