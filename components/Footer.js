import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Footer() {
  let router = useRouter();
  console.log(router.route);
  return (
    <>
      <div className="footer">
        {router.route == "/products/[slug]" ? null : (
          <div className="footer-container">
            <div className="support foot-item">
              <p>
                <b>Support</b>
              </p>
              <button>
                <p>Help Centre</p>
              </button>
              <button>
                <p>Safety information</p>
              </button>
              <button>
                <p>Returns</p>
              </button>

              <button>
                <p>Supporting people with disabilities</p>
              </button>
              <button>
                <p>Report a neighbourhood concern</p>
              </button>
            </div>
            <div className="community foot-item">
              <p>
                <b>Community</b>
              </p>

              <button>
                <p>Support refugees</p>
              </button>
              <button>
                <p>Celebrating diversity & belonging</p>
              </button>
              <button>
                <p>Combating discrimination</p>
              </button>
            </div>

            <div className="about foot-item">
              <p>
                <b>About</b>
              </p>
              <button>
                <p>Newsroom</p>
              </button>
              <button>
                <p>Learn about new features</p>
              </button>
              <button>
                <p>Letter from our founders</p>
              </button>
              <button>
                <p>Careers</p>
              </button>
              <button>
                <p>Investors</p>
              </button>
            </div>
          </div>
        )}
      </div>{" "}
      <div className="footer-nav-wrapper">
        <div className="footer-nav-container">
          <div className="footer-nav">
            <ul>
              <li>
                <button>© 2022 MrChreesa Productions, Inc.</button>
              </li>
              <li>
                <button>Privacy</button>
              </li>
              <li>
                <button>Terms</button>
              </li>
              <li>
                <button>Sitemap</button>
              </li>

              <li>
                <button>Company details</button>
              </li>
            </ul>
          </div>
          {/* <div className="empty"></div> */}
          <div className="footer-nav-right">
            <div className="menu-footer">
              <ul>
                <li>Enlgish(GB)</li>
                <li>£ GBP</li>
              </ul>
              <Link href="http://www.twitter.com/mrchreesa" passHref={true}>
                <a target="_blank">
                  <div className="social fb"></div>
                </a>
              </Link>
              <Link href="http://www.instragram.com/mrchreesa" passHref={true}>
                <a target="_blank">
                  <div className="social ig"></div>
                </a>
              </Link>
              <Link href="http://www.twitter.com/mrchreesa" passHref={true}>
                <a target="_blank">
                  <div className="social twitter"></div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
