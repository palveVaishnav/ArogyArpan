import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import Fundraisers from './Fundraisers';
import Fundraiser from './Fundraiser';
import About from './About';
import Doctor from './Doctor';
import Donor from './Donor';

export function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='Home' element={<Home />} /> 
                        <Route path='Fundraisers'element={<Fundraisers />} / >
                        <Route path='Fundraiser'element={<Fundraiser />} / >
                        <Route path='About'element={<About />} / >
                        <Route path='Doctor'element={<Doctor/>} / >
                        <Route path='Donor'element={<Donor/>} / >
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}