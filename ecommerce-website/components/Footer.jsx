import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-policy">
          <p>All purchases are final. No refunds or exchanges.</p>
          <p>
            For questions or concerns, please email <a className="footer-container-email" href="mailto:order@example.com">
              support@okamiofcl.com
            </a>
          </p>
        </div>
        <p>Copyright © 2022 OkamiOfcl All rights reserved</p>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    </>
  )
}

export default Footer