import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import {AppBar} from "../AppBar/AppBar";
import {PageWrapper} from "../CommonComponents/Pages.styles";



export const Layout = () => {
  return (
    <PageWrapper>
        <AppBar/>
      <Suspense>
          <main>
        <Outlet />
          </main>
      </Suspense>
    </PageWrapper>
  );
};
