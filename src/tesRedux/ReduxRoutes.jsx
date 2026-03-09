import MainPage from "./MainPage";
import Page1 from "./Page1";
import Page2 from "./Page2";
import ReduxProvider from "./ReduxProvider";

export const reduxRoutes = {
    path: "/redux",
    element: (
        <ReduxProvider>
            <MainPage />
        </ReduxProvider>
    ),
    children: [
        {
            path: "page1",
            element: <Page1 />
        },
        {
            path: "page2",
            element: <Page2 />
        }
    ]
};