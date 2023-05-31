import "./App.css";
import { Box } from "@mui/material";
import React from "react";
import Navbar from "./UZmarket/Navbar/Navbar";
import foto1 from "./UZmarket/Slayper/uzumFoto.jpg";
import foto2 from "./UZmarket/Slayper/uzumFoto2.jpg";
import foto3 from "./UZmarket/Slayper/uzumFoto3.jpg";
import foto4 from "./UZmarket/Slayper/foto .jpg";
import foto5 from "./UZmarket/Slayper/foto2.jpg";
import { UzumMarket } from "./UzumMarket";
import fotoVintelator from "./UZmarket/poject_Item/vintelator.jpg";
import fotorugan from "./UZmarket/poject_Item/rugan.jpg";
import fotodeg from "./UZmarket/poject_Item/deg.jpg";
import fotord from "./UZmarket/poject_Item/ord.jpg";
import fotolosk from "./UZmarket/poject_Item/losk.jpg";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./UZmarket/Karzina/Karzina";
import { Error } from "./UZmarket/Error/Error";
import Kirish from "./UZmarket/Kirish/Registratsiya";
import Yoqani from "./UZmarket/yoqanlari/Yoqani"; 
import elektronika from "./UZmarket/poject_Item/chexol.jpg"
import elektronika2 from "./UZmarket/poject_Item/iaerpodts.jpg"
import elektronika3 from "./UZmarket/poject_Item/iperpods.jpg"
import elektronika4 from "./UZmarket/poject_Item/maxnaushnik.jpg"
import elektronika5 from "./UZmarket/poject_Item/naushnik.jpg"
import elektronika6 from "./UZmarket/poject_Item/ps.jpg"
import elektronika7 from "./UZmarket/poject_Item/soat.jpg"
import { ItemProduct } from "./UZmarket/project-darun/ItemProduct";

function App() {
  function Swiper(Id, SwImg) {
    return {
      Id,
      SwImg,
    };
  }

  let SSwipe = [
    Swiper(1, foto1),
    Swiper(2, foto2),
    Swiper(3, foto3),
    Swiper(4, foto4),
    Swiper(5, foto5),
  ];
  function project_item(
    id,
    Name,
    Text,
    defImg,
    baho,
    oldPrise,
    newPrise,
    Img,
    Img2,
    Img3,
    Img4,
    Qoldi,
    Quensity
  ) {
    return {
      id,
      Name,
      Text,
      defImg,
      baho,
      oldPrise,
      newPrise,
      Img,
      Img2,
      Img3,
      Img4,
      Qoldi,
      Quensity,
    };
  }

  let Product = [
    project_item(
      1,
      "вентелвтор",
      "Вентелатор напольый Grand 2 в 1 с 3 лопастям",
      fotoVintelator,
      "6.0(65 оценок)",
      99000,
      89000,
      fotoVintelator,
      fotoVintelator,
      fotoVintelator,
      fotoVintelator,
      "6 ta qoldi",
      0
    ),
    project_item(
      2,
      "Rugan",
      "a",
      fotorugan,
      "6.0(65 оценок)",
      99000,
      89000,
      fotorugan,
      fotorugan,
      fotorugan,
      fotorugan,
      "47 ta qoldi",
      0
    ),
    project_item(
      3,
      "Tide",
      "Parashok",
      fotodeg,
      "6.0(65 baho)",
      99000,
      89000,
      fotodeg,
      fotodeg,
      fotodeg,
      fotodeg,
      "2 ta qoldi",
      0
    ),
    project_item(
      4,
      "Tide",
      "Parashok",
      fotord,
      "6.0(65 baho)",
      99000,
      89000,
      fotord,
      fotord,
      fotord,
      fotord,
      "2 ta qoldi",
      0
    ),

    project_item(
      5,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi",
      0
    ),
    project_item(
      6,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi",
      0
    ),
    project_item(
      7,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi",
      0
    ),
    project_item(
      8,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi",
      0
    ),
    project_item(
      9,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi",
      0
    ),
    project_item(
      10,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi",
      0
    ),
    project_item(
      11,
      "вентелвтор",
      "Вентелатор напольый Grand 2 в 1 с 3 лопастям",
      fotoVintelator,
      "6.0(65 оценок)",
      99000,
      89000,
      fotoVintelator,
      fotoVintelator,
      fotoVintelator,
      fotoVintelator,
      "6 ta qoldi",
      0
    ),
    project_item(
      12,
      "Rugan",
      "a",
      fotorugan,
      "6.0(65 оценок)",
      99000,
      89000,
      fotorugan,
      fotorugan,
      fotorugan,
      fotorugan,
      "47 ta qoldi",
      0
    ),
    project_item(
      13,
      "Tide",
      "Parashok",
      fotodeg,
      "6.0(65 baho)",
      99000,
      89000,
      fotodeg,
      fotodeg,
      fotodeg,
      fotodeg,
      "2 ta qoldi",
      0
    ),
    project_item(
      14,
      "Tide",
      "Parashok",
      fotord,
      "6.0(65 baho)",
      99000,
      89000,
      fotord,
      fotord,
      fotord,
      fotord,
      "2 ta qoldi"
    ),

    project_item(
      15,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi"
    ),
    project_item(
      16,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi"
    ),
    project_item(
      17,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi"
    ),
    project_item(
      18,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi"
    ),
    project_item(
      19,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi"
    ),
    project_item(
      20,
      "Tide",
      "Parashok",
      fotolosk,
      "6.0(65 baho)",
      99000,
      89000,
      fotolosk,
      fotolosk,
      fotolosk,
      fotolosk,
      "2 ta qoldi"
    ),
    project_item(
      21,
      "Electronika",
      "naushnik",
      elektronika,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika,
      elektronika,
      elektronika,
      elektronika,
      "2 ta qoldi"
    ),
    project_item(
      22,
      "Electronika",
      "naushnik",
      elektronika2,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika2,
      elektronika2,
      elektronika2,
      elektronika2,
      "2 ta qoldi"
    ),
    project_item(
      23,
      "Electronika",
      "naushnik",
      elektronika3,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika3,
      elektronika3,
      elektronika3,
      elektronika3,
      "2 ta qoldi"
    ),
    project_item(
    24,
      "Electronika",
      "naushnik",
      elektronika4,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika5,
      elektronika5,
      elektronika5,
      elektronika5,
      "2 ta qoldi"
    ),
    project_item(
      25,
      "Electronika",
      "naushnik",
      elektronika2,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika2,
      elektronika2,
      elektronika2,
      elektronika2,
      "2 ta qoldi"
    ),
    project_item(
      26,
      "Electronika",
      "naushnik",
      elektronika3,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika3,
      elektronika3,
      elektronika3,
      elektronika3,
      "2 ta qoldi"
    ),
    project_item(
      27,
      "Electronika",
      "naushnik",
      elektronika4,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika4,
      elektronika4,
      elektronika4,
      elektronika4,
      "2 ta qoldi"
    ),
    project_item(
      28,
      "Electronika",
      "naushnik",
      elektronika5,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika5,
      elektronika5,
      elektronika5,
      elektronika5,
      "2 ta qoldi"
    ),
    project_item(
      29,
      "Electronika",
      "naushnik",
      elektronika6,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika6,
      elektronika6,
      elektronika6,
      elektronika6,
      "2 ta qoldi"
    ),
    project_item(
      30,
      "Electronika",
      "naushnik",
      elektronika7,
      "6.0(65 baho)",
      50000,
      30000,
      elektronika7,
      elektronika7,
      elektronika7,
      elektronika7,
      "2 ta qoldi"
    ),
  ];

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={<UzumMarket SSwipe={SSwipe} Product={Product} />}
        />
        <Route path="/components/:productItemsId" element={<ItemProduct productItems={Product}/>}/>
        <Route path="/yoqganlari" element={<Yoqani />} />
        <Route path="/kirish" element={<Kirish />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Box>
  );
}

export default App;
