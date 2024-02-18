import {React, useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../../router";
import Loader from '../UI/Loader/Loader';
import Landing from "../../pages/Landing"
import { AuthContext } from '../../context';

const AppRouter = ({}) => {
	// const isLoading = useContext(AuthContext)

    // if(isLoading){
    //     return <Loader/>
    // }
	return (
		<Routes>
          {privateRoutes.map(route => 
            <Route key={route.path} element={route.component} path = {route.path} exact = {route.exact} />
          )};
          <Route path="*" element={<Landing/>}/>
        </Routes>
	);
};


export default AppRouter;