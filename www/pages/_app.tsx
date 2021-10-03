import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import BaseAppLayout from "../layout/base-layout/base-app-layout";
import {Layout} from "antd";
import {AppFooter} from "../components/app-footer/AppFooter";
import {AppHeader} from "../components/app-header/AppHeader";
import {AppContent} from "../components/app-content/AppContent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <BaseAppLayout>
          <Component {...pageProps} />
      </BaseAppLayout>
  );
}
export default MyApp
