import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";

gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      gestureOrientation: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
    ScrollTrigger.addEventListener("refresh", () => {});
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.removeEventListener("refresh", () => {});
    };
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main className="min-h-screen overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
