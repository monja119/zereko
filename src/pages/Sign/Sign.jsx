
import { useEffect, useState } from "react"
import "./Sign.scss"
import {useDispatch, useSelector} from 'react-redux';
import { setUser } from "../../reducers/userReducer.js"
import { useNavigate } from "react-router-dom"
// components
import Loader from "../../components/Loader"
import { createUser } from "../../services/userService.js";
import {authentification} from "../../services/authService.js";

// Lottie
import Lottie from 'react-lottie'
import animationData from '../../lotties/Banner.json'

const Sign = () => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [error, setError] = useState(null)

  // Loader
  const [load, setLoad] = useState(false)

  // input data 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  // Lottie option
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  // Fonction pour démarrer le chargement
  const startLoading = () => {
    setLoad(true);
  };

  // Fonction pour arrêter le chargement
  const stopLoading = () => {
    setLoad(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  // logining
  const login = (e) => {
    e.preventDefault()
    startLoading()
    if(formData.email === "" || formData.password === ""){
      setError("Veuillez remplir tous les champs")
      stopLoading()
      return
    }
    const data = {
      email: formData.email,
      password: formData.password
    }
    authentification(data)
    .then((res) => {
      let user = res.data.user
      localStorage.setItem("user", JSON.stringify(user))
      dispatch(setUser({user: user, isLoggedIn: true}))
      stopLoading()
      window.location.href = "/"

    })
    .catch(async (err) => {
        setError("Erreur lors de la connexion - " + err.message)
      stopLoading()
    })
  }

  // signing
  const signing = () => {
    setLoad(true)
    // is all the fields filled
    if(formData.name === "" || formData.email === "" || formData.password === "" || formData.confirm_password === ""){
        setError("Veuillez remplir tous les champs")
        setLoad(false)
        return
    }
    // is the password and confirm password the same
    if(formData.password !== formData.confirm_password){
      setError("Les mots de passe ne correspondent pas")
      setLoad(false)
      return
    }

    // password length must be greater than 4
    if(formData.password.length < 4){
        setError("Le mot de passe doit contenir au moins 4 caractères")
        setLoad(false)
        return
    }

    // create user
    const data = {
        name: formData.name,
        email: formData.email,
        password: formData.password
    }
    createUser(data)
    .then((res) => {
        console.log(res)
        stopLoading()
        window.location.href = "/"
    })
    .catch(async (err) => {

        let data = await err
        console.log(data)
        setError("Erreur lors de la création de l'utilisateur - " + data.message)
        stopLoading()
    })
  }

  // animation
  useEffect(() => {
    const handleInputFocus = (event) => {
      event.target.classList.add('active')
    }
    
    const handleInputBlur = (event) => {
      const input = event.target
      if (input.value === '') {
        input.classList.remove('active')
      }
    }
    
    const handleToggle = (e) => {
      e.preventDefault()
      const main = document.querySelector('main')
      main.classList.toggle('sign-up-mode')
    }
    
    const moveSlider = function () {
      const index = this.dataset.value
    
      const currentImage = document.querySelector(`.img-${index}`)
      const images = document.querySelectorAll('.image')
      images.forEach((img) => img.classList.remove('show'))
      currentImage.classList.add('show')
    
      const textSlider = document.querySelector('.text-group')
      textSlider.style.transform = `translateY(${-1 * (index - 1) * 2.2}rem)`
    
      const bullets = document.querySelectorAll('.bullets span')
      bullets.forEach((bull) => bull.classList.remove('active'))
      this.classList.add('active')
    }
    
    const inputs = document.querySelectorAll('.input-field')
    inputs.forEach((inp) => {
      inp.addEventListener('focus', handleInputFocus)
      inp.addEventListener('blur', handleInputBlur)
    })
    
    const toggle_btn = document.querySelectorAll('.toggleLink')
    toggle_btn.forEach((btn) => {
      btn.addEventListener('click', handleToggle)
    })
    
    const bullets = document.querySelectorAll('.bullets span')
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', moveSlider)
    })
    
    return () => {
      // Clean up event listeners when component unmounts
      inputs.forEach((inp) => {
        inp.removeEventListener('focus', handleInputFocus)
        inp.removeEventListener('blur', handleInputBlur)
      })
    
      toggle_btn.forEach((btn) => {
        btn.removeEventListener('click', handleToggle)
      })
    
      bullets.forEach((bullet) => {
        bullet.removeEventListener('click', moveSlider)
      })
    }
  }, []) 


  // verification si l'utilisateur est connecté
  useEffect(() => {
    if(user.isLoggedIn) {
      navigate('/home')
    }
    console.log(user)
  }, []);

  return (
    <div className="sign">
      <main>
        <div className="box bg-base-300 text-gray-200">
          <div className="inner-box">
            <div className="forms-wrap">
              <form autoComplete="off" className="sign-in-form">
                <div className="logo flex flex-row justify-center text-center">
                  <img src="/assets/images/logo_no_bg.png" alt="easyclass" />
                </div>

                <div className="heading">
                  <h2 className="text-gray-200 mb-3">
                    "Transformez votre temps libre en impact positif - Rejoignez notre communauté de bénévoles et chanez des vies dès aujourd'hui"
                  </h2>
                  <h6 className="text-gray-500">Pas encore de compte? </h6>
                  <a href="" className="toggleLink text-primary hover:text-secondary">S'inscrire</a>
                </div>

                <div className="actual-form">
                  <span className="error text-red-600 my-3">{error}</span>
                  <div className="input-wrap mt-3">
                    <input
                        type="text"
                        minLength="4"
                        className="input-field focus:text-gray-200"
                        autoComplete="off"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                        type="password"
                        minLength="4"
                        className="input-field focus:text-gray-200"
                        autoComplete="off"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label>Mot de passe</label>
                  </div>


                  <button
                      type="button"
                      onClick={(e) => login(e)}
                      className="sign-btn btn btn-primary text-white tracking-widest"
                  >
                    Se connecter

                  </button>

                  <p className="text">
                    <a href="#" className="underline underline-offset-2 text-primary hover:text-secondary">Mot de passe
                      oublié?</a>
                  </p>
                </div>
              </form>


              {/* sign in*/}
              <form action="index.html" autoComplete="off" className="sign-up-form">
                <div className="logo flex flex-row justify-center text-center">
                  <img src="/assets/images/logo_no_bg.png" alt="easyclass" />
                </div>

                <div className="heading">
                  <h2 className="text-gray-200">Créer un compte</h2>
                  <h6 className="text-gray-500">Vous avez déjà un compte? </h6>
                  <a href="" className="toggleLink text-primary hover:text-secondary">Se connecter</a>
                </div>


                <div className="actual-form">
                  <span className="error text-red-600">{error}</span>
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field focus:text-gray-200"
                      autoComplete="off"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label>Nom Complet</label>
                  </div>


                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Mot de passe</label>
                  </div>

                    <div className="input-wrap">
                        <input
                        type="password"
                        minLength="4"
                        className="input-field"
                        autoComplete="off"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        required
                        />
                        <label>Confirmer le mot de passe</label>
                    </div>

                  

                  <input 
                    type="button" 
                    value="S'inscrire" 
                    className="sign-btn btn btn-primary text-white tracking-widest" 
                    onClick={() => signing()}
                  />

                  <p className="text">
                    En m'inscrivant, j'accepte les Conditions d'utilisation et Politiques de confidentialité
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel bg-primary">
              <div className="images-wrapper">
                <Lottie 
                  options={defaultOptions}
                  height={400}
                  width={400}
              />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2 className="text-white">
                      "Faites la différence aujourd'hui"
                    </h2>
                  </div>
                </div>

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {load ? <Loader/> : ""}
    </div>
  )
}

export default Sign