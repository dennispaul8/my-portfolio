import './Navbar.css'
import logo from '../../../public/dennis.dev.png'

export const Navbar = ()=>{

  return(
    <>

<nav class="navbar navbar-expand-lg" >
  <div class="container-fluid move">
    <a class="navbar-brand nav-img" href="#"><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse yo" id="navbarNavAltMarkup">
      <div class="navbar-nav nav-txt">
        <a class="nav-link" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="#tech-stack">Tech Stack</a>
        <a class="nav-link" href="#projects">Projects</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}