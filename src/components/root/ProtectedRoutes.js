import { Outlet } from "react-router"
import Signin from "../Signin";
import { useContext } from "react";
import { User } from "./App";

const ProtectedRoutes = () => {

  const {user} = useContext(User)

  return (
    user ? <Outlet /> : <Signin message={'You need to sign in to view this content'}/>
  )
}

export default ProtectedRoutes;