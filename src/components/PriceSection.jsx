import React, { useState } from "react";

import { FcCheckmark } from "react-icons/fc";

const PriceSection = () => {
  const [isClicked, setIsClicked] = useState(false);

  const showMore = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="container ">
        <div className="pricing_container">
          <h1>Web Hosting</h1>
          <div className="pricing_content">
            <div className="first_sec col">
              <ul>
                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>Unmetered</b> traffic
                    (Unlimited GB) ?
                  </p>
                </li>

                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>100</b> Websites
                  </p>
                </li>

                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>100 GB</b> SSD Storage ?
                  </p>
                </li>

                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>Free</b> Weekly Backups
                    ?
                  </p>
                </li>
              </ul>
            </div>

            <div className="divider"></div>
            <div className="second_sec col">
              <h2>
                <sup>₹</sup>149.00<span>/mo</span>
              </h2>
              <p>₹249.00/mo when you renew</p>
              <button className="select_btn btn">Select</button>
            </div>

            <div className="divider"></div>
            <div className="third_sec col">
              <ul>
                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>Unlimited</b> Free SSL ?
                  </p>
                </li>
                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>Free Domain ? </b>
                  </p>
                </li>
                <li>
                  <p>
                    <FcCheckmark className="icon" /> <b>Free Email ? </b>
                  </p>
                </li>
                <li>
                  <p>
                    <FcCheckmark className="icon" />
                    <b>Optimized for WordPress ?</b>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={isClicked ? "show" : "hidden"}>
            <h4>Plan Feautures</h4>
            <div className="hidden_info">
              <div className="first_sec col">
                <ul>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unmetered </b> traffic
                      (Unlimited GB)
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>20</b> Entry Processes
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>400</b> 000 Inodes
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unlimited</b> Cronjobs
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Auto</b> Script
                      Installer
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Usage</b> Monitoring
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Automated</b> Scaling
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>GIT</b> support
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>SSH</b> Access
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Access</b> Management
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>99</b>.9% Uptime
                      Guarantee
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unlimited</b> FTP
                      accounts
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>20</b> minutes average
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>24</b>/7/365 chat
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Knowledge</b> Base
                    </p>
                  </li>
                </ul>
              </div>
              <div className="divider"></div>
              <div className="second_sec col">
                <ul>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>40</b> Active
                      Processes
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>20</b> Entry Processes
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>400</b> 000 Inodes
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unlimited</b> Cronjobs
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Auto</b> Script
                      Installer
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Usage</b> Monitoring
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Automated</b> Scaling
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>GIT</b> support
                      ultimate plan
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>SSH</b> Access
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Access</b> Management
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>99</b>.9% Uptime
                      Guarantee
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unlimited</b> FTP
                      accounts
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>20</b> minutes average
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>24</b>/7/365 chat
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Knowledge</b> Base
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Tutorials</b>
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Webinars</b>
                    </p>
                  </li>
                </ul>
              </div>

              <div className="divider"></div>
              <div className="third_sec col">
                <ul>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>40</b> Active
                      Processes
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>20</b> Entry Processes
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>400</b> 000 Inodes
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unlimited</b> Cronjobs
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Auto</b> Script
                      Installer
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Usage</b> Monitoring
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Automated</b> Scaling
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>GIT</b> support
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>SSH</b> Access
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Access</b> Management
                    </p>
                  </li>
                  <p></p>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>99</b>.9% Uptime
                      Guarantee
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Unlimited</b> FTP
                      accounts
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>20</b> minutes average
                      issue
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>24</b>/7/365 chat and
                      email service
                    </p>
                  </li>
                  <li>
                    <p>
                      <FcCheckmark className="icon" /> <b>Knowledge</b> Base
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="toggler">
            <p
              className={isClicked ? "show_less" : "show_more"}
              onClick={showMore}
            >
              See More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
