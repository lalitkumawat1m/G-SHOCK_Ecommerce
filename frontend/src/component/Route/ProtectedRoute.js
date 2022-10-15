import React, { Fragment }  from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Navigate, Route, Outlet  } from "react-router-dom";




export const ProtectedRoute = ({}) => {
   const {isAdmin, component: Component, ...rest}=useParams();

   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    
    
     <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Navigate to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Navigate to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>


  )
}
