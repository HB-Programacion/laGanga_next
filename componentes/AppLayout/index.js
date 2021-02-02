import Footer from "./../Footer";
import Header from "./../Header/Header";
import FilterCategory from "./../FilterCategory/FilterCategory";
import HeaderNuevo from "../Header/HeaderNuevo";

const AppLayout = ({ children, promotionsData }) => {
  return (
    <div className="container-ganga">
      {/* <Header  promotionsData={ promotionsData } ></Header> */}
      <HeaderNuevo promotionsData={promotionsData}></HeaderNuevo>
      <FilterCategory />
      <main className="margin-top-4">{children}</main>
      <Footer></Footer>
      <style jsx global>
        {`
          @font-face {
            font-family: "made-tomy-sof-regular";
            src: url(fonts/made-tommy.otf);
          }
          .margin-top-4 {
            margin-top: 4rem;
          }
          .font-made-tomy-sof-regular {
            font-family: "made-tomy-sof-regular";
          }

          .title-ganga {
            font-family: "made-tomy-sof-regular";
            font-size: 1.8rem;
            font-weight: 700;
          }

          .subtitle-ganga {
            font-family: "made-tomy-sof-regular";
            font-size: 1rem;
            font-weight: 600;
          }

          .link {
            text-decoration: none !important;
          }

          /* Estilos Judith  :D */

          .container,
          .container-fluid,
          .container-lg,
          .container-md,
          .container-sm,
          .container-xl {
            width: 100%;
            padding-right: 0px !important;
            padding-left: 0px !important;
          }

          .margin-box {
            padding: 0rem 5rem !important;
          }
          /* @media (min-width: 576px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 900px!important;
  }
  }
  @media (min-width: 900px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 992px!important;
  }
  }
  @media (min-width: 992px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1200px!important;
  }
  }
  @media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
      max-width: 1500px!important;
  }
  } */
          .carousel-control-next,
          .carousel-control-prev {
            width: 8% !important;
          }

          @media (min-width: 576px) {
            .container-ganga {
              max-width: 900px !important;
              margin: auto;
            }
          }
          @media (min-width: 900px) {
            .container-ganga {
              max-width: 992px !important;
              margin: auto;
            }
          }
          @media (min-width: 992px) {
            .container-ganga {
              max-width: 1200px !important;
              margin: auto;
            }
          }
          @media (min-width: 1200px) {
            .container-ganga {
              max-width: 1500px !important;
              margin: auto;
            }
          }

          @media (max-width: 769px) {
            html {
              font-size: 4.6vw;
            }
            .margin-top-4 {
            margin-top: 0rem;
          }
            .margin-box {
              padding: 0rem 1rem !important;
            }

            .title-ganga {
              font-size: 1.4rem;
            }

            .subtitle-ganga {
              font-size: 0.8rem;
            }
          }

          /* ANIMACIONES */
          .react-parallax-bgimage {
            position: fixed !important;
            height: 100% !important;
            width: auto !important;
          }

          .fade-in {
            -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
              both;
            animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
          }
          @-webkit-keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animated {
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }
        `}
      </style>
    </div>
  );
};

export default AppLayout;
