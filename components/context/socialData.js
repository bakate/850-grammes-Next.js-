import React from 'react';
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa';

const socialData = [
  {
    id: 1,
    icon: <FaFacebook className="icon" />,
    url: '//www.facebook.com',
  },
  { id: 2, icon: <FaGoogle className="icon" />, url: '//www.google.com' },
  {
    id: 3,
    icon: <FaLinkedin className="icon" />,
    url: '//www.linkedin.com',
  },
  {
    id: 4,
    icon: <FaYoutube className="icon" />,
    url: '//www.youtube.com/',
  },
  { id: 5, icon: <FaGithub className="icon" />, url: '//www.github.com' },
];

export default socialData;
