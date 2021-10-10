import React, {FC, useState} from "react";
import {AppHeader} from "../../components/app-header/AppHeader";
import {AppFooter} from "../../components/app-footer/AppFooter";
import {createSharedStore, SharedStoreContext} from "../../stores/shared-store";
import {useLocalObservable} from "mobx-react-lite";
import Head from "next/head";
import { YMInitializer } from "react-yandex-metrika";


const BaseAppLayout: FC = ({children}) => {
    const sharedStore = useLocalObservable(createSharedStore);


  return (
        <SharedStoreContext.Provider value={sharedStore}>

            <div className="base-layout">
              <YMInitializer accounts={[51846272]} />
                <AppHeader></AppHeader>
                    {children}
                <AppFooter></AppFooter>
            </div>
        </SharedStoreContext.Provider>
    )
};


export default BaseAppLayout;