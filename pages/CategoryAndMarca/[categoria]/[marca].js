import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import AppLayout from "../../../componentes/AppLayout";
import { useRouter } from "next/router";
import CardPromotion from "../../../componentes/Promotions/CardPromotion";

const CategoryAndMarca = () => {
  const [filterCategoriesMarca, setfilterCategoriesMarca] = useState([]);
  const { categoria } = useRouter().query;
  const { marca } = useRouter().query;

  const getProductsDay = async () => {
    let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS_LOCAL}/filterCategoryMarca/${categoria}&${marca}`;
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.MensajeRespuesta === "NO EXISTEN DATOS") {
          setfilterCategoriesMarca([]);
        } else {
          setfilterCategoriesMarca(data.promocionesFilterCategoriaMarca);
        }
        // setLoading(false);
      })
      .catch((e) => {
        console.log(e, "error");
      });
  };

  useEffect(() => {
    getProductsDay();
  }, [categoria, marca]);
  return (
    <AppLayout>
      <Container className="container-ganga margin-box">
        <div className="box-category">
          <h4 className="title-ganga">
            Categoría: {categoria} {marca}
          </h4>
        </div>
        <Row className="justify-content-md-center ">
          {filterCategoriesMarca.map((product) => (
            <CardPromotion product={product} key={product._id} />
          ))}
        </Row>
      </Container>
      <style jsx>
        {`
          .box-category {
            margin: 2rem 0rem;
            font-family: "made-tomy-sof-regular";
          }
        `}
      </style>
    </AppLayout>
  );
};

export default CategoryAndMarca;
