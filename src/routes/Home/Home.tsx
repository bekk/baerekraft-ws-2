import { Logo } from "../../components/Logo";
import styles from "./Home.module.css";

import service1Image from "../../assets/serviceImages/service1.webp";
import service2Image from "../../assets/serviceImages/service2.webp";
import service3Image from "../../assets/serviceImages/service3.webp";

export const Home = () => {
  return (
    <>
      <section id="about">
        <Logo className={styles.logo} />
        <p>
          Our company is a leading provider of digital services. We specialize
          in developing innovative solutions that help businesses streamline
          their operations and improve their bottom line. Our team of experts
          has years of experience in the technology industry, and we are
          dedicated to staying on the cutting edge of new developments and
          trends.
        </p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>
            <h3>Automation platform</h3>
            <img
              src={service1Image}
              alt="Advanced analytics"
              className={styles.serviceImage}
            />
            <p>
              Our automation platform is a cloud-based automation solution that
              helps businesses automate repetitive tasks and processes. With
              this service, you can easily automate tasks such as data entry,
              scheduling, and more. Additionally, you can also set up custom
              workflows and integrations with other tools you use.
            </p>
          </li>
          <li>
            <h3>Advanced analytics</h3>
            <img
              src={service2Image}
              alt="Advanced analytics"
              className={styles.serviceImage}
            />
            <p>
              Our advanced analytics solution helps businesses gain insights
              from their data. With this service, you can easily track key
              performance indicators, create custom reports, and visualize data
              in a variety of formats. Additionally, you can also set up
              automated alerts and notifications to keep you informed of
              important trends.
            </p>
          </li>
          <li>
            <h3>Cybersecurity Service</h3>
            <img
              src={service3Image}
              alt="Cybersecurity Service"
              className={styles.serviceImage}
            />
            <p>
              Our cybersecurity Service helps businesses protect their data and
              systems from cyber threats. With this service, you can easily
              monitor your network for potential threats, and respond quickly to
              any incidents. Additionally, you can also set up automated
              security protocols and access controls to ensure that your data
              stays safe and secure.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};
