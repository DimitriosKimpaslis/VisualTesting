import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { createContext, useEffect, useState } from "react";
import supabase from "./Client";
import { CircularProgress } from "@mui/material";
import { getAllUserData } from "../../functions/statistics";

export const User = createContext()
export const UserBigData = createContext()
export const globalLoading = createContext()

function App() {
  const [user, setUser] = useState()
  const [bigData, setBigData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        return data.user
      }
    }
    getUser().then((res) => {
      setUser(res)
      let email
      if (res) {
        email = res.email
      }
      getAllUserData(email).then((data) => {
        setBigData(data)
        setLoading(false)
      })
    })
  }, [])

  var prevScrollpos = window.pageYOffset;
  // if (window.innerWidth > 768) {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-144px";
      }
      prevScrollpos = currentScrollPos;
    }
  // }

  return (
    <globalLoading.Provider value={{ loading, setLoading }} >
      <User.Provider value={{ user, setUser }} >
        <UserBigData.Provider value={{ bigData, setBigData }} >
          {!loading ?
            <div className='bg-abstract bg-cover min-h-screen'>
              <Navigation />

              <div className="md:h-36 h-28 relative"></div> {/* This is a spacer */}

              <Outlet />

              <div className="h-32 sm:h-20"></div> {/* This is a spacer */}

              <div className="bottom-0 h-12 flex items-center justify-center sm:h-5  text-gray-50 py-2 text-xs text-center fixed bg-black w-full">
                <p>All celebrity personalities are taken from CS Joseph's site. For more information  <a href="https://www.youtube.com/@CSJoseph" target="_blank" rel='noreferrer' className="text-blue-500 hover:text-blue-700">click here</a></p>
              </div>
            </div> :
            <div className="h-screen flex justify-center items-center w-full bg-gray-800">
              <CircularProgress />
            </div>
          }
        </UserBigData.Provider>
      </User.Provider>
    </globalLoading.Provider>

  );
}

export default App;
