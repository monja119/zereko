
import { useEffect, useState } from "react"
import "./Sign.scss"

// components
import Loader from "../../components/Loader"


// Lottie
import Lottie from 'react-lottie'
import animationData from '../../lotties/Banner.json'

const Sign = () => {

  // Loader
  const [load, setLoad] = useState(false)

  // input data 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    number: '',
    localisation : '',
    account_type: 0
  })

  // account type
    const [accountType, setAccountType] = useState('')

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
    
    setLoad(true)
    window.location.href = "/"
  }

  // signing
  const signing = () => {
    setLoad(true)
    window.location.href = "/"
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
                  <div className="input-wrap">
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
                    <a href="#" className="underline underline-offset-2 text-primary hover:text-secondary">Mot de passe oublié?</a>
                  </p>
                </div>
              </form>

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

                  <div className="input-wrap">
                    <select  className="input-field focus:text-gray-200" name="account_type" value={formData.account_type} onChange={handleChange} required>
                        <option value="0">Bénévole</option>
                        <option value="1">Organisations</option>
                    </select>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field focus:text-gray-200"
                      autoComplete="off"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    <label>Nom Complet</label>
                  </div>
                  
                  <div className="actual-form">
                    <div className="input-wrap">
                      <input
                        name="localisation"
                        id="localisation"
                        type="text"
                        className="input-field"
                        autoComplete="off"
                        value={formData.localisation}
                        onChange={handleChange}
                        required
                      />
                      <label>Localisation</label>
                    </div>
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