import localfont from "next/font/local";

const favorit = localfont({
  src: [
    {
      path: "../../public/_assets/fonts/extended/favorit-light.ttf",
      weight: "300",
    },
    {
      path: "../../public/_assets/fonts/extended/favorit-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/_assets/fonts/extended/favorit-medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/_assets/fonts/extended/favorit-bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/_assets/fonts/extended/favorit-extrabold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-favorite",
});

export { favorit };
