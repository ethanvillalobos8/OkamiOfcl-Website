import React from 'react'
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div>
          {/* <Link className="color" href="/about">Read Me</Link> */}
        </div>
        <div className="footer-container-policy">
          <p>All purchases are final. No refunds or exchanges.</p>
          <p>
            For questions or concerns, please email <a className="footer-container-email" href="mailto:order@example.com">
              support@okamiofcl.com
            </a>
          </p>
        </div>
        <p>Copyright © 2022 OkamiOfcl All rights reserved</p>
        <p>
          <AiFillInstagram className="icons"/>
          <Link href="https://www.instagram.com/okamiofcl/">@okamiofcl</Link>
          <Link className="color" href="/about"> - Read Me</Link>
          {/* <AiOutlineTwitter /> */}
        </p>
      </div>
    </>
  )
}

export default Footer