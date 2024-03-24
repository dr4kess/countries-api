import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import React, { Suspense, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import { getCountriesThunk } from '../../store/thunks/countries.thunk';
import { setIsMobile } from '../../store/slices/app.slices';

import ErrorFallback from '../ErrorFallback/ErrorFallback';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainPage = React.lazy(() => import('../MainPage/MainPage'));
const DetailsPage = React.lazy(() => import('../DetailsPage/DetailsPage'));

import Spinner from '../Spinner/Spinner';

import s from './App.module.scss'


const App = () => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({
        query: '(max-width: 900px)',
      });


    useEffect(() => {
        dispatch(getCountriesThunk())
    }, [])

    useEffect(() => {
        dispatch(setIsMobile(isMobile));
    }, [isMobile]);

    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <div className={s.app}>
                    <Header />
                        <div className={s.content}>
                            <ErrorBoundary
                                FallbackComponent={ErrorFallback}> 
                                <Routes>
                                    <Route path="/" element={<MainPage />} />
                                    <Route path="/:countryName" element={<DetailsPage />} />
                                </Routes>
                            </ErrorBoundary>
                        </div>
                    <Footer/>
                </div>
            </Suspense>
        </Router>
    )
}

export default App;