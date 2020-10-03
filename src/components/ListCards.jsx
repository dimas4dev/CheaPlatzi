import React from "react";

import CardHome from "./CardHome";

import "../assets/styles/components/ListCards.scss";

const ListCards = () => {
  return (
    <div className="list--cards">
      <CardHome
        linkImage="https://s1.qwant.com/thumbr/0x380/0/7/324e03aab78654cd0c027cf8321477ed4b9b7189cb995d0bcf14800457a5c4/playstation-4-slim-vertical-product-shot-01-us-07sep16.jpg?u=https%3A%2F%2Fmedia.playstation.com%2Fis%2Fimage%2FSCEA%2Fplaystation-4-slim-vertical-product-shot-01-us-07sep16%3F%24native%24&q=0&b=1&p=0&a=1"
        productoName="Play Station 4"
        productBrand="Sony"
        productDescription="Has llegado al sitio correcto. Estos exclusivos juegos te llevarán a viajes increíbles,desde los propuestos por desarrolladores independientes aclamados por la crítica hasta los éxitos galardonados de la AAA."
      />
      <CardHome
        linkImage="https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png"
        productoName="Xbox Series X"
        productBrand="Microsoft"
        productDescription="Consola de nueva generación. Juegos de nueva generación.
        Embárcate en nuevas aventuras de la forma en que deben vivirse en Xbox Series X."
      />
      <CardHome
        linkImage="https://www.lenovo.com/medias/lenovo-laptop-thinkpad-p43s-hero.png?context=bWFzdGVyfHJvb3R8MzIxMTkzfGltYWdlL3BuZ3xoOGMvaDUzLzEwMDM5NzE4NTQzMzkwLnBuZ3w1NTE4NWUyNzc0NWQ0MWExNmY5ZTcyYTdiYmZiMTkyNjJhNDdjNDUwYTQzMDBlMGQzM2Q4M2YwZThlZWNmZTc2"
        productoName="Lenovo ThinkPad P43s"
        productBrand="Lenovo"
        productDescription="Con un grosor de tan solo 17,9 mm y un peso a partir de 1,47 kg, la ThinkPad P43s es una de las workstations más pequeñas y livianas de Lenovo"
      />
      <CardHome
        linkImage="https://mxsonyb2c.vteximg.com.br/arquivos/ids/257874-370-370/5d02da5df552836db894cead8a68f5f3.jpg?v=637323405320470000"
        productoName="Audifonos Inhalámbricos"
        productBrand="Sony"
        productDescription="Los intuitivos e inteligentes audífonos WH-1000XM4 te ofrecen nuevas mejoras en la tecnología de noise cancelling líder del sector, una calidad de sonido excepcional."
      />
    </div>
  );
};

export default ListCards;
