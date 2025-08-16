// import { socialImgs } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="flex flex-col justify-center">
//           <p>Terms & Conditions</p>
//         </div>
//         <div className="socials">
//           {socialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <img src={socialImg.imgPath} alt="social icon" />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Muzzaiyyan Hussain. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import { socialImgs } from "../constants";
import { DiGithubAlt } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Terms */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social Icons */}
        <div className="socials flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </a>
          ))}
          <a href="https://github.com/MuzzaiyyanHussain"><DiGithubAlt className="bg-white rounded" color="black" size={32} /></a>
        
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Muzzaiyyan Hussain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
