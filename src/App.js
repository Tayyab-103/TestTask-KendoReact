import React, { useRef } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import SolutionSection from "./components/SolutionSection";
import MeetSection from "./components/MeetSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  const cardGridRef = useRef(null);
  const contactUsRef = useRef(null);
  const meetSectionRef = useRef(null);

  const scrollToCardGrid = () => {
    cardGridRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactUs = () => {
    contactUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToMeetSection = () => {
    meetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div className="App">
    <Navbar onServiceClick={scrollToCardGrid} onContactUsClick={scrollToContactUs} onAboutUsClick={scrollToMeetSection} />
    <Header />
    <SolutionSection />
    <div ref={meetSectionRef}>
      <MeetSection />
    </div>
    <div ref={cardGridRef}>
      <CardGrid />
    </div>
    <div ref={contactUsRef}>
      <ContactUs />
    </div>
    <Footer />
  </div>
  );
}

export default App;
