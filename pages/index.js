import AppLayout from "../componentes/AppLayout";
import Container from "react-bootstrap/Container";
import CarouselBanner from "../componentes/CarouselBanner/CarouselBanner";
import OfertasDelDia from "../componentes/Promotions/OfertasDelDia";
import GangaDelDia from '../componentes/Promotions/GangaDelDia';
const Home = () => {
  return (
    <AppLayout>
      <Container className="container-ganga box-home fade-in animated">
        <CarouselBanner />
        <OfertasDelDia />
        <GangaDelDia />
      </Container>
    </AppLayout>
  );
};

// export async function getServerSideProps() {
//   console.log("holitass")
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/get-promotion-all/user`
//   console.log(url, "urli")
//   const res = await fetch(
//     url
//   );
//   const promotionsData = await res.json();
//   if (!promotionsData) {
//     return {
//       notFound: true,
//     };
//   }
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       promotionsData,
//     },
//   };
// }

export default Home;
