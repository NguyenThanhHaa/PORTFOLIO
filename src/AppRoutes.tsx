import LandingPage from "./pages/LandingPage.tsx";
import type { ReactNode } from "react";
import NotFound from "./pages/NotFound.tsx";

export type RouteInfo = { index?: boolean, path?: string, element: ReactNode };

export const AppRoutes : RouteInfo[] = [
    {
        index: true,
        element: <LandingPage />,
    },
    {
        path: '*',
        element: <NotFound/>
    }
];