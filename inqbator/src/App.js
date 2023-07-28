import { AskMentors, Contact, Events, Home, MentorList, Mentorship, Profile, Services } from './Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google'
import Navbar2 from './components/Navbar2';
import { decodeJwt } from 'jose';
import API_URL from './api/Api';
import axios from 'axios';
import Success from './components/miscellenius/Success';
import { useContext } from 'react';
import { DataState } from './context/DataProvider';
import Mentor from './Pages/Mentor/Mentor';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/mentorlist" element={<MentorList />} />
      <Route exact path="/services" element={<Services/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/events" element={<Events/>} />
      <Route exact path="/askmentors" element={<AskMentors/>} />
      <Route exact path="/mentor" element={<Mentor/>} />
      <Route exact path="/profile" element={<Profile/>} />

      <Route exact path="/freementorship" element={<Mentorship />} />
      <Route exact path="/success" element={<Success />} />
    </Routes>
  )
}

function App() {
  const { user, setUser, accessToken, setAuthData, logout } = DataState();

  // const handleLogout = async () => {
  //   localStorage.removeItem('userInfo');
  //   // window.location.href = '/login';
  // };


  // if (!accessToken && useGoogleOneTapLogin({
  //   onSuccess: async (credentialResponse) => {
  //     try {

  //       const { credential } = credentialResponse;

  //       const response = await axios.post(`${API_URL}/api/google-login`, { idToken: credential });
  //       const { accessToken } = response.data;
  //       // setAuthData(accessToken, refreshToken);
  //       localStorage.setItem("accesstoken", JSON.stringify(accessToken));
  //     } catch (error) {
  //       console.log(error)
  //       alert('Error occured during login')
  //     }
  //   },
  //   onError: error => console.log(error)
  // })
  // )

    // const handleLogout = async () => {
    //   try {
    //     await logout();
    //   } catch (error) {
    //     console.log(error);
    //     alert("Error during logout");
    //   }
    // };

    return (
      <Router>
        {/* {accessToken ? (
          <>
            <p>User is logged in!</p>
            {user && (
              <>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <img src={user.picture} alt="Profile Picture" />
              </>
            )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Login with Google</button>
        )} */}
        {/* <Navbar/> */}
        {/* <Navbar2/> */}
        <Routing />

      </Router>
    );
}

export default App;
