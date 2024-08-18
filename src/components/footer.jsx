import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8 mt-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold">Abstract</h4>
          <ul className="mt-4 space-y-2">
            <li>Branches</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-4 space-y-2">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notes</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Community</h4>
          <ul className="mt-4 space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-4 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
            <li>Contact Us: info@abstract.com</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-sm text-center">
        &copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
