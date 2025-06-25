import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import PopularServices from "../components/PopularServices";
import { useLoaderData } from "react-router";
import OurMission from "../components/OurMission";
import FAQSection from "../components/FAQSection";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  const servicesData = useLoaderData();

  return (
    <div className="container mx-auto min-h-screen">
      <Helmet>
        <title>EduSpark - Home</title>
      </Helmet>
      <section data-aos="fade-up">
        <Banner></Banner>
      </section>

      <section >
        <PopularServices servicesData={servicesData.data}></PopularServices>
      </section>

      <section>
        <OurMission></OurMission>
      </section>

      <section id="faq">
      <FAQSection></FAQSection>
      </section>
    </div>
  );
};

export default Home;
