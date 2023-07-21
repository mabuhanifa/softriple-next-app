import NavBar from "@/components/NavBar";
import store from "@/redux/store/store";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={inter.className}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
