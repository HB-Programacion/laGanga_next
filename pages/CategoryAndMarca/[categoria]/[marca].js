import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import AppLayout from "../../../componentes/AppLayout";
import CardPromotion from "../../../componentes/Promotions/CardPromotion";
import { useRouter } from "next/router";
const CategoryAndMarca = () => {
  const [filterCategoriesMarca, setfilterCategoriesMarca] = useState([]);
  const { categoria } = useRouter().query;
  const { marca } = useRouter().query;
  console.log(categoria, "judith router");
  console.log(marca, "judith router");
  return (
    <>
      <AppLayout>
        <p>Hola</p>
      </AppLayout>
    </>
  );
};

export default CategoryAndMarca;