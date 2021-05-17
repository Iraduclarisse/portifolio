import React from 'react';
import MainLayout from '../component/MainLayout';
import Header from '../component/Header';
import HomeComponent from '../component/HomeComponent';
import AboutComponent from '../component/AboutComponent';
import ResumeComponent from '../component/ResumeComponent'

const Home=()=>{
    return(
<MainLayout>
    <HomeComponent>

    </HomeComponent>
<AboutComponent>    
</AboutComponent>

<ResumeComponent>    
</ResumeComponent>
</MainLayout>


    )
}

export default Home;