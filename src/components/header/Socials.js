import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {ImInstagram} from 'react-icons/im'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://instagram.com" target="_blank"><ImInstagram /></a>
    </div>
  )
}

export default Socials