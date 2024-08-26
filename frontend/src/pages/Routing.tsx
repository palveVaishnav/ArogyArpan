import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import Fundraisers from './Fundraisers';
import Fundraiser from './Fundraiser';
import About from './About';
// import Doctor from './Doctor';
// import Donor from './Donor'; 
import Signup from './Signup';
import Signin from './Signin';
import { CreateFundraiser } from './CreateFundraisers';
import { Profile } from './Profile';
import { Notion } from './Notion';

export function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/Signin' element={<Signin />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='Home' element={<Home />} />
                        <Route path='Fundraisers' element={<Fundraisers />} />
                        <Route path='Fundraiser/:id' element={<Fundraiser />} />
                        <Route path='About' element={<About />} />
                        <Route path='Notion' element={<Notion />} />
                        <Route path='createfundraiser' element={<CreateFundraiser />} />
                        <Route path='profile' element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}