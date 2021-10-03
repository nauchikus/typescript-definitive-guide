import React, {FC, useState} from "react";
import {AppHeader} from "../../components/app-header/AppHeader";
import {AppFooter} from "../../components/app-footer/AppFooter";
import {AppContent} from "../../components/app-content/AppContent";
import {Layout} from "antd";
import {createSharedStore, SharedStoreContext} from "../../stores/shared-store";
import {useLocalObservable} from "mobx-react-lite";


const BaseAppLayout: FC = ({children}) => {
    const sharedStore = useLocalObservable(createSharedStore);

    return (
        <SharedStoreContext.Provider value={sharedStore}>
            <div className="base-layout">
                <AppHeader></AppHeader>
                    {children}
                <AppFooter></AppFooter>
            </div>
        </SharedStoreContext.Provider>
    )
};


/*const getText = () => (`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere urna vel nisl vehicula, ac fermentum quam pellentesque. Vestibulum quis lacus eu nisi molestie tempus quis eget ipsum. Quisque eleifend dui ut auctor efficitur. Integer cursus eu ipsum in rhoncus. Sed consequat vestibulum tellus, sit amet cursus nulla placerat convallis. Mauris pulvinar nulla ut luctus porttitor. Sed vitae erat eget turpis euismod sagittis nec vitae justo. Fusce non sodales neque. Fusce accumsan urna commodo neque dapibus, sit amet pretium ante iaculis. Ut sed interdum magna. Ut venenatis hendrerit mi. Vestibulum tempor libero id risus bibendum tempor. Donec congue eu felis ullamcorper pharetra.

Vestibulum mauris tortor, vehicula non arcu ut, commodo lacinia lacus. Morbi in enim erat. Phasellus vestibulum justo dolor, ut dignissim arcu sagittis eu. Integer laoreet magna sollicitudin, molestie nunc a, suscipit felis. Mauris non euismod est. Mauris turpis lorem, vulputate id pellentesque nec, facilisis a tellus. Aenean consequat purus at neque vulputate aliquet. Suspendisse malesuada euismod neque a vulputate. Nunc interdum finibus leo, in semper risus elementum ac. Maecenas dictum enim id lorem eleifend, in vestibulum nibh porttitor. Proin laoreet orci nec metus sodales, ac mollis libero euismod. Integer vitae malesuada magna, et pulvinar ipsum. Duis pharetra metus odio, ac hendrerit est tempus nec. In et enim et mi consectetur iaculis.

Vestibulum nulla ante, convallis nec nulla dapibus, ullamcorper pulvinar nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, metus vel malesuada congue, sapien arcu posuere nisl, id dignissim orci sem a urna. Nunc ac sodales nisi. Aliquam et viverra lacus. Curabitur non vestibulum lacus, ac porta mauris. Donec blandit varius orci, nec aliquam dolor gravida nec. Cras tincidunt auctor leo, sit amet volutpat leo pharetra vel.

Donec quis arcu tortor. Integer ut augue at arcu venenatis sagittis venenatis nec dui. In vulputate quam et libero tempus, at facilisis purus eleifend. Aliquam dapibus, est ac scelerisque sollicitudin, eros est maximus dolor, vitae faucibus elit lorem quis lacus. Maecenas viverra posuere massa sed sodales. Pellentesque ac pharetra odio, cursus lacinia purus. Quisque fermentum sem elit, a blandit enim congue vel.

Etiam ac turpis non urna molestie sollicitudin. Curabitur pharetra id sapien non tincidunt. Morbi placerat, ipsum non egestas viverra, sapien purus pretium erat, vel sollicitudin elit nisl nec diam. Vestibulum nisi ante, pellentesque vel tincidunt in, ultricies a risus. Vivamus suscipit nulla ex, in lobortis nisi convallis sed. Pellentesque non nunc posuere, tincidunt neque non, gravida libero. Praesent ac turpis nibh. Etiam sodales metus quis velit efficitur, nec gravida libero accumsan. Cras nec tellus elementum, lacinia mauris lacinia, vehicula magna. Nam sit amet ligula in ex placerat tempus in et tellus.
`)



const BaseAppLayout: FC = ({children}) => {
    const [state, setState] = useState(true);

    return (
        <Layout>
            <Layout.Header className="a">Header</Layout.Header>
            <Layout hasSider={true}>
                <Layout.Sider trigger={null}
                              collapsible
                              collapsed={state}
                              collapsedWidth={0}
                              width={280}
                              theme="light" style={{backgroundColor: "green", position: "relative!important", }}>
                    <div className="b">
                        <span>top</span>
                        <span>bottom</span>
                    </div>
                </Layout.Sider>
                <Layout.Content>
                    <div style={{backgroundColor: "tomato", height: "2000px", maxWidth: "800px"}}>
                        <button onClick={()=>setState(!state)}>toggle</button>
                        {[getText(), getText(), getText()].map(text => <p>{text}</p>)}
                    </div>
                </Layout.Content>
                <Layout.Footer>
                    <button onClick={()=>setState(!state)}>toggle</button>
                </Layout.Footer>
            </Layout>

        </Layout>
    )
}*/
export default BaseAppLayout;