import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at GGK Tech{" "}
                          <span> 2017 December - 2018 May</span>
                        </h2>
                        <p>
                          1. Received training in .NET applications with C# and
                          ADO.NET for 4 months <br /> 2. Worked on developing
                          "GitMonitor", a WPF application that can be used to
                          monitor all Git repositories on a system using Windows
                          Services and REST API.
                          <br /> 3. worked on React js
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Associate Software Engineer at GGK Tech{" "}
                          <span>2018 May - 2019 December</span>
                        </h2>
                        <p>
                          1. Integrated payment gateways like Bambora, Afterpay,
                          eWAY and SecurePay to eCommerce sites
                          <br />
                          2. Implemented state management for ecommerce
                          checkout.
                          <br />
                          3. Received accolades for fixing Afterpay and
                          SecurePay payment gateway issues, which once allowed
                          end users from duplicating browser tabs in payment
                          page and proceed to fraudulent payments.
                          <br />
                          4. Implemented a customer support portal, which helps
                          users to raise and resolve issues with their orders.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Bachelors at Gurunanak Institutions Technical Campus{" "}
                          <span> 2014 September - 2018 May </span>
                        </h2>
                        <p>
                          1. worked on Extracting Data from HDFS using Flume and
                          automating sqoop jobs in oozie.
                          <br />
                          2. worked on streaming data using Flume.
                          <br />
                          3. Implemented an Interactive web application for Sea
                          water quality monitoring at Smart India Hackathon 2017
                          held in Chennai, India
                          <br />
                          4. Organized a technical workshop on bigdata and
                          Extracting Data using Flume in Guru Nanak Institution
                          Technical Campus
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
