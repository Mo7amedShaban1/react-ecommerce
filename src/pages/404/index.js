import React from "react";
import DefaultLayout from "../../layouts/default";
import Button from "../../components/button/button.component.jsx";
import "./404.style.scss";

export default function NotFound({ location, history }) {
   return (
      <DefaultLayout>
         <main>
            <div className="not-found">
               <span className="path-name">{location.pathname} </span>
               <h1 className="title">404 NOT FOUND</h1>
               <Button color="dark" size="md" clicked={() => history.push("/")}>
                  Back to Home Page
               </Button>
            </div>
            ;
         </main>
      </DefaultLayout>
   );
}
