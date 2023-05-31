import { Box, Typography, Button, Modal } from "@mui/material";
import React, { katalog } from "react";
import uzumFoto from "./uzum_market.svg";
import uz from "./kisspng-flag-of-uzbekistan-flags-of-asia-national-flag-uzbekistan-state-university-of-world-languages-s-5d240565227364.2389355915626417651411.jpg";
import { Link } from "react-router-dom";
// import { useState } from "react";

export default function Navbar() {
  let obshi = () => {};
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "500px",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    display: "flex",
    alignItems: "start",
    justifContent: "center",
    flexDirection: "column",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        justifyContent: "center",
        
      }}
    >
      <Box sx={{ bgcolor: "#F4F5F5" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            padding: "0 100px",
            
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Typography sx={{ fontSize: "20px", display: "flex" }}>
              {" "}
              <Typography sx={{ fontSize: "25px" }}>
                <i class="bx bx-location-plus"></i>
              </Typography>
              Город: Ташкент
            </Typography>
            <Typography>Пункты выдачи</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#62656A", fontSize: "20px" }}>
              Доставим ваш заказ бесплатно - всего 1 ден!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              color: "#62656A",
              fontSize: "18px",
              alignItems: "center",
            }}
          >
            <Typography>Пройдите на Uzum</Typography>
            <Typography>Вопрос-ответа</Typography>
            <Typography>Мои заказы </Typography>
            <Typography sx={{ display: "flex", fontSize: "20px" }}>
              {" "}
              <img src={uz} alt="" width={"50px"} /> русский
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          gap: "10px",
          padding: "0 100px",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            gap: "45px",
          }}
        >
          <Link to="/">
            <img width={"250px"} src={uzumFoto} alt="" />
          </Link>

          <Button
            onClick={katalog}
            sx={{
              padding: "10px 25px",
              bgcolor: "#EAEAF9",
              border: "0",
              gap: "15px",
              fontWeight: "700",
            }}
            variant="outlined"
          >
            <i
              style={{ fontSize: "27px", fontWeight: "500" }}
              class="bx bx-collection"
            ></i>{" "}
            Каталог
          </Button>
        </Box>
        <Box
          border={"1px solid #ccc"}
          bgcolor={"#fff"}
          gap="250px"
          display={"flex"}
          justifyContent={"space-between"}
          padding={"0px 0px 0 20px"}
          borderRadius={"5px"}
        >
          <input
            type="text"
            placeholder="Искать товары и категории"
            style={{
              border: "solid red",
              outline: "none",
              fontSize: "17px",
              borderRadius: "5px",
              border: "0px",
            }}
          />
          <Box
            sx={{
              borderRadius: "5px",
              bgcolor: "#F8F8F8",
              padding: "10px 35px ",
            }}
          >
            <i style={{ fontSize: "25px" }} class="bx bx-search"></i>
          </Box>
        </Box>
        <Box sx={{ color: "#000", fontSize: "30px" }}>
          <Button
            onClick={handleOpen}
            sx={{ padding: "10px", alignItems: "center" }}
            variant="#000"
          >
            {" "}
            <i
              style={{ padding: "0 10px", fontSize: "25px" }}
              class="bx bx-user"
            ></i>
            <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
              {" "}
              Войти
            </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography variant="h5">Telefon raqamni kiriting</Typography>
                <Typography
                  color={"#111"}
                  fontSize={"18px"}
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  Tasdiqlash kodini SMS orqali yuboramiz
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ccc",
                    marginTop: "30px",
                    height: "50px",
                    borderRadius: "10px",
                    width: "320px",
                  }}
                >
                  <Typography variant="p">+998</Typography>
                  <input
                    type="tel"
                    name="tel_number"
                    id="number"
                    style={{
                      width: "200px",
                      border: "none",
                      background: "#ccc",
                      height: "25px",
                      padding: "20px  ",
                    }}
                    placeholder="00 000-00-00"
                  />
                </Box>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  background={"violet"}
                  sx={{
                    width: "320px",
                    height: "50px",
                    borderRadius: "12px",
                    mt: "20px",
                  }}
                >
                  Kodni Olish
                </Button>
                <Typography
                  variant="h6"
                  sx={{ cursor: "pointer", ml: "77px", mt: "15px" }}
                >
                  Parol bilan kirish
                </Typography>
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    cursor: "default",
                    marginTop: "50px",
                  }}
                >
                  {" "}
                  Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta
                  ishlash siyosatiga rozilik bildirasiz
                </span>
              </Box>
            </Modal>
          </Button>
          <Link to={"/yoqganlari"}>
            <Button sx={{ padding: "10px" }} variant="#000">
              {" "}
              <i
                style={{ padding: "0 10px", fontSize: "25px" }}
                class="bx bx-heart"
              ></i>
              <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                {" "}
                Избранное
              </Typography>
            </Button>
          </Link>

          <Link to="/cart">
            <Button onClick={obshi} sx={{ padding: "10px" }} variant="#000">
              <i
                style={{ padding: "0 10px", fontSize: "25px" }}
                class="bx bx-shopping-bag"
              ></i>
              <Typography sx={{ fontWeight: "600", fontSize: "15px" }}>
                {" "}
                Корзина
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 100px",
        }}
      >
        <Link to={"/"}>
          <Typography
            sx={[
              {
                color: "#8E8E8E",
                fontSize: "18.5px",
                cursor: "pointer",
              },
              {
                "&:hover": {
                  borderBottom: "solid 3px",
                  color: "#000",
                },
              },
            ]}
          >
            Электроника
          </Typography>
        </Link>

        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px", cursor: "pointer" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Бытовая техтика
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Одежда
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Обувь
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Аксесуары
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Красота
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Здоровье
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Товары дла дома
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Строитилство и ремонт
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Автотовары{" "}
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
                borderBottom: "solid #000 3px",
                animation: "3s linear 5s infinite running slidein;",
              },
            },
          ]}
        >
          Детские товары
        </Typography>
        <Typography
          sx={[
            { color: "#8E8E8E", fontSize: "18.5px" },
            {
              "&:hover": {
                color: "#000",
              },
            },
          ]}
        >
          Ещё
        </Typography>
      </Box>
    </Box>
  );
}
