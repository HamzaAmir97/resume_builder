import React, { useContext, useState } from 'react'
import HERO_IMG from '../assets/hero-img.png'
import { useNavigate } from 'react-router-dom';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import Modal from '../components/Modal';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';
import { LuMousePointer, LuPalette, LuPencil } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  // Animation views
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: f1Ref, inView: f1InView } = useInView({ triggerOnce: true });
  const { ref: f2Ref, inView: f2InView } = useInView({ triggerOnce: true });
  const { ref: f3Ref, inView: f3InView } = useInView({ triggerOnce: true });

  return (
    <div className='w-full min-h-full bg-[url("../public/low-poly-grid-haikei.png")] bg-cover bg-center bg-no-repeat relative'>
      <div className="container mx-auto px-4 py-6">

        {/* Header */}
        <header className="flex justify-between items-center mb-16 px-8">
          <div className="text-xl font-bold">Resume Builder</div>
          {user ? <ProfileInfoCard /> : (
            <button
              className="bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 hover:bg-black hover:text-amber-50 rounded-lg"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Sign Up
            </button>
          )}
        </header>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 pr-4 mb-8 md:mb-0"
          >
            <div className='flex flex-col items-center gap-2'>
              <h1 className="text-5xl font-bold leading-tight">
                The{" "}
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,#7182ff_0%,#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
                  Resume
                </span>{" "}
                to get
              </h1>
              <h1 className='text-5xl mb-6'> your dream job</h1>
              <p className="text-lg text-gray-700 mb-8 text-center">
                create a resume and free download it in minutes with our smart and intuitive
                resume builder.
              </p>
              <button
                className="bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </motion.div>

          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, y: 50 }}
            animate={imgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="w-full md:w-2/3 py-6"
          >
            <img
              src={HERO_IMG}
              alt="Hero Image"
              className="w-full h-fit object-cover"
            />
          </motion.div>
        </div>

        {/* Features */}
        <section className="mt-5 px-8">
          <h2 className="text-2xl font-bold text-center mb-12">
            Features That Make You Shine
          </h2>

          <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8">
            <motion.div
              ref={f1Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={f1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 h-[15rem] w-[20rem] flex flex-col justify-center items-center p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-3">Easy Editing</h3>
              <span className="size-12 bg-purple-400 rounded-full p-2 flex items-center justify-center hover:bg-purple-800 cursor-pointer mb-4">
                <LuPencil className="size-12 text-white hover:rotate-45 transition" />
              </span>
              <p className="text-gray-600 text-center">
                Update your resume sections with live preview and instant formatting.
              </p>
            </motion.div>

            <motion.div
              ref={f2Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={f2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 h-[15rem] w-[20rem] flex flex-col justify-center items-center p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-3">
                Beautiful Templates
              </h3>
              <span className="size-12 bg-purple-400 rounded-full p-2 flex items-center justify-center hover:bg-purple-800 cursor-pointer mb-4">
                <LuPalette className="size-12 text-white hover:rotate-45 transition" />
              </span>
              <p className="text-gray-600 text-center">
                Choose from modern, professional templates that are easy to customize.
              </p>
            </motion.div>

            <motion.div
              ref={f3Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={f3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 h-[15rem] w-[20rem] flex flex-col justify-center items-center p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition"
            >
              <h3 className="text-lg font-semibold mb-3">One-Click Export</h3>
              <span className="size-12 bg-purple-400 rounded-full p-2 flex items-center justify-center hover:bg-purple-800 cursor-pointer mb-4">
                <LuMousePointer className="size-12 text-white hover:rotate-45 transition" />
              </span>
              <p className="text-gray-600 text-center">
                Download your resume instantly as a high-quality PDF with one click.
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <div className="text-sm text-secondary text-center flex items-center justify-center p-8 mt-10">
        <span className="flex gap-2"> Made with <p className='size-10 animate-bounce cursor-pointer scale-150 hover:scale-160 transition'>❤️</p>... By Hamzah Amir</span>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
