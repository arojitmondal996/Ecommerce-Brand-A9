import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../conponents/AuthProvider/AuthProvider";
import Loading from "../conponents/Loading/Loading";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(authContext);
    if(loading) {
        return <Loading></Loading>;
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate to={`/login`}></Navigate>
};

export default PrivateRoute;