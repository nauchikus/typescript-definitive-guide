import type { NextPage } from 'next';
import Head from "next/head";
import React, {CSSProperties, useMemo} from "react";
import {A4Layer} from "../../components/layers/a4-layer/A4Layer";
import {Button, Card} from "antd";
import {DownloadOutlined} from "@ant-design/icons";
import { MetaMultiDescription } from "../../components/meta-multi-description/MetaMultyDescription";


const Pdf: NextPage = ({}) => {
    const headStyles = useMemo<CSSProperties>(() => ({
        fontSize: `24px`,
        fontWeight: `bold`,

    }), []);

  // @ts-ignore
  const onClick = () => ym( 51846272, "reachGoal", "download-pdf-button" );


    return (
      <A4Layer className="pdf__layer">
        <Head>
          <MetaMultiDescription description="Скачать руководство в формате Pdf" />
        </Head>
          <div className="card__bg">
              <Card headStyle={headStyles}>
                  <h1 className="pdf__title">TypeScript Подробное Руководство</h1>
                  <iframe
                      className="pdf__iframe_donate-form"
                      src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D1%83%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%20%D0%B2%20%D0%B0%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8&targets-hint=&default-sum=200&button-text=11&payment-type-choice=on&mobile-payment-type-choice=on&hint=&successURL=&quickpay=shop&account=410016532024848&"
                      width="423"
                      height="250"
                      frameBorder="0"
                      allowtransparency="true"
                      scrolling="no"></iframe>
                  <Button type="primary"
                          size="large"
                          icon={<DownloadOutlined/>}
                          block={true}
                          href="tdg.pdf"
                          download={true}
                          onClick={onClick}>Скачать</Button>
              </Card>
          </div>
      </A4Layer>
  );
}

export default Pdf;
