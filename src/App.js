import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Register from './components/Register/register';
import SignIn from './components/SignIn/SighIn';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/profile';
import './App.css';
//configs
import paramsProperty from './particlesjs-config';


const App = () => {


  const [searchInput, setSearchInput] = useState()

  const [imageUrl, setImageUrl] = useState('');

  const [box, setBox] = useState({});


  const calculateFaceBox = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
    setBox(box);
  }


  const [loadUser, setLoadUser] = useState({
    user: {
      id: '',
      name: '',
      email: '',
      entries: '0',
      joined: ''
    }
  });


  const getUser = (data) => {
    setLoadUser(
      {
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      }
    )
  };


  const buttonDetect = () => {
    setImageUrl(searchInput);
    fetch('https://polar-garden-61408.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: searchInput
      })
    }).then(res => res.json())
      .then(res => {
        if (res) {
          fetch('https://polar-garden-61408.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: loadUser.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              Object.assign(loadUser.user, { entries: count });
              setSearchInput(imageUrl);// just for the live update , forgive me !
            })
            .catch(console.log)
        }
        displayFaceBox(calculateFaceBox(res))
      })
      .catch(err => console.error("Clarifai error", err));
  };


  const [isAuth, setIsAuth] = useState(false);
  const [reg, setReg] = useState();

  const [showProfile, setShowProfile] = useState(false);

  //profile
  const [profile, setProfile] = useState([]);


  useEffect(() => {
    fetch(`https://polar-garden-61408.herokuapp.com/profile/${loadUser.user.id}`)
      .then(res => res.json())
      .then(user => setProfile(user));
  }, [loadUser.user.id]);




  return (
    <>
      <Particles
        params={paramsProperty}
        className='particles' />
      <Navigation
        setIsAuth={setIsAuth}
        isAuth={isAuth}
        reg={reg}
        setReg={setReg}
        setImageUrl={setImageUrl}
        setLoadUser={setLoadUser}
        setShowProfile={setShowProfile} />

      {
        isAuth ?
          (
            showProfile ?
              <Profile setShowProfile={setShowProfile} profile={profile} loadUser={loadUser} />
              :
              <div >
                <Rank loadUser={loadUser} />
                <ImageLinkForm
                  setSearchInput={setSearchInput}
                  buttonDetect={buttonDetect} />
                <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
          )

          :
          (
            reg ?
              <Register setIsAuth={setIsAuth} getUser={getUser} setImageUrl={setImageUrl} />
              :
              <SignIn setIsAuth={setIsAuth} setReg={setReg} getUser={getUser} setImageUrl={setImageUrl} />
          )
      }

    </>
  )


}
export default App;
