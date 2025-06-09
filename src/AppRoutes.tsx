import LandingPage from "./pages/LandingPage.tsx";
import type { ReactNode } from "react";
import NotFound from "./pages/NotFound.tsx";
import About from "./pages/About.tsx";

export type RouteInfo = { index?: boolean, path?: string, element: ReactNode };

export const AppRoutes : RouteInfo[] = [
    {
        index: true,
        element: <LandingPage />,
    },
    {
        path:'/about',
        element: <About/>,
    },
    {
        path: '*',
        element: <NotFound/>
    }
];