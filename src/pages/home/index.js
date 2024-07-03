import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from "emailjs-com";
import Typewriter from "typewriter-effect";
import { introdata, meta, dataportfolio, dataabout, worktimeline, skills, services, contactConfig, imageMap } from "../../content_option";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomePage = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          {/* <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div> */}
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="#portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {dataportfolio.length > 0 && (
          <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                  <div className="btn-wrapper">
                    <a href={data.link}>View Project</a>
                    <a href={data.github}>View Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>




      <section id="about" className="about">
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{dataabout.aboutme}</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timeline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.length > 0 &&
                    worktimeline.map((data, i) => (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Skills</h3>
            </Col>
            <Col lg="7">
              <div className="skills-grid">
                {skills.length > 0 &&
                  skills.map((data, i) => (
                    <div key={i} className="skill-item">
                      <img
                        src={imageMap[data.image]}
                        alt={data.name}
                        className="skill-image"
                      />
                    </div>
                  ))}
              </div>
            </Col>
          </Row>

          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Education</h3>
            </Col>
            <Col lg="7">
              {services.length > 0 &&
                services.map((data, i) => (
                  <div className="service_ py-4" key={i}>
                    <h5>{data.title}</h5>
                    <p>{data.description}</p>
                  </div>
                ))}
            </Col>
          </Row>
        </Container>
      </section>
      


      <section id="contact" className="contact">
        <Container>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4">Contact</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row>
            <Col lg="5">
              <h3 className="color_sec py-4">Contact Me</h3>
              {formData.show && (
                <Alert
                  className="co_alert"
                  variant={formData.variant}
                  onClose={() => setFormdata({ ...formData, show: false })}
                  dismissible
                >
                  {formData.alertmessage}
                </Alert>
              )}
              {/* <ul className="po_items_ho">
                {socialIcons.length > 0 &&
                  socialIcons.map((icon, index) => (
                    <li key={index}>
                      <a href={icon.url}>
                        <i className={icon.class}></i>
                      </a>
                    </li>
                  ))}
              </ul> */}
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <Row>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col lg="6" className="form-group">
                    <input
                      className="form-control rounded-0"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
                <textarea
                  className="form-control rounded-0"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <br />
                <Row>
                  <Col lg="12" className="form-group">
                    <button className="btn ac_btn" type="submit" disabled={formData.loading}>
                      {formData.loading ? "Sending..." : "Send Message"}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};

export default HomePage;
