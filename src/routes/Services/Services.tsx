import styles from "./Services.module.css";

import service1Image from "../../assets/serviceImages/service1-1.webp";
import service2Image from "../../assets/serviceImages/service2-1.webp";
import service3Image from "../../assets/serviceImages/service3-1.webp";

export const Services = () => {
  return (
    <section id="services">
      <h1>Our Services</h1>
      <ul>
        <li>
          <h2>Automation platform</h2>
          <img
            src={service1Image}
            alt="Automation platform"
            className={styles.serviceImage}
          />
          <p>
            Out automation platform is a cloud-based automation platform that
            helps businesses automate repetitive tasks and processes. With this
            service, you can easily automate tasks such as data entry,
            scheduling, and more. Additionally, you can also set up custom
            workflows and integrations with other tools you use.
          </p>
        </li>
        <li>
          <h2>Advanced analytics</h2>
          <img
            src={service2Image}
            alt="Advanced analytics"
            className={styles.serviceImage}
          />
          <p>
            Our advanced analytics solution helps businesses gain insights from
            their data. With this service, you can easily track key performance
            indicators, create custom reports, and visualize data in a variety
            of formats. Additionally, you can also set up automated alerts and
            notifications to keep you informed of important trends.
          </p>
        </li>
        <li>
          <h2>Cybersecurity Service</h2>
          <img
            src={service3Image}
            alt="Cybersecurity Service"
            className={styles.serviceImage}
          />
          <p>
            Our cybersecurity Service helps businesses protect their data and
            systems from cyber threats. With this service, you can easily
            monitor your network for potential threats, and respond quickly to
            any incidents. Additionally, you can also set up automated security
            protocols and access controls to ensure that your data stays safe
            and secure.
          </p>
        </li>
      </ul>
      <p>
        Our services are designed to work seamlessly together, and we offer
        flexible pricing plans to suit the needs of any business. Contact us to
        learn more about how we can help your business.
      </p>
    </section>
  );
};
