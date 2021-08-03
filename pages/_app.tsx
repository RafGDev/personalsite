import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import "@brainhubeu/react-carousel/lib/style.css";
import 'devicon/devicon.min.css';

const theme = extendTheme({
  colors: {
    primary: {
      "500": "#34495e",
    },
    secondary: {
      "500": "#1abc9c",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp
