var React = require('react');
var Link = require('react-router').Link;

var IconLinks = require('../../components/icon-links.jsx');
var IconLink = require('../../components/icon-link.jsx');
var Illustration = require('../../components/illustration.jsx');

var EventsHeader = require('../../components/events/events-header.jsx');

var EventsPage = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  statics: {
    pageTitle: 'Events',
    pageClassName: 'events'
  },
  render: function() {
    return (
      <div>
        <EventsHeader/>

        <div className="inner-container">
          <section className="join-global-movement">
            <Illustration
            height={280} width={238}
            src1x="/img/pages/events/svg/maker-party-logo.svg"
            alt="Maker Party logo"
            className="content-first"
            >
              <h2 className="text-center">
                {this.context.intl.formatMessage({id: 'what_is_maker_party'})}
              </h2>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_paragraph_1'})}
              </p>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_paragraph_1b'})}
              </p>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_paragraph_2'})}
              </p>
            </Illustration>
          </section>
        </div>

        <div className="inner-container">
          <section>
            <Illustration
              height={244} width={244}
              src1x="/img/pages/events/maker-party-quote.png"
              src2x="/img/pages/events/maker-party-quote_2x.png"
              alt="Maker Party logo"
            >
              <h2 className="text-center">
                {this.context.intl.formatMessage({id: 'why_love_maker_party'})}
              </h2>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_testimonial_1'})}
              </p>
            </Illustration>

            <div className="text-center">
              <a href="https://www.makerparty.community" className="btn">
                {this.context.intl.formatMessage({id: 'get_started'})}
              </a>
            </div>
          </section>

          <div className="row full-row quote">
            <section>
              <div className="text-center">
                <p>
                  {this.context.intl.formatMessage({id: 'maker_party_blockquote'})}
                </p>
                <div>
                  <a href="https://www.changecopyright.org/" className="secondary-button">
                    {this.context.intl.formatMessage({id: 'sign_petition'})}
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section>
            <IconLinks>
              <IconLink
                link="https://mzl.la/2016MakerPartyPartner"
                imgSrc="/img/pages/events/svg/icon-community.png"
                head={this.context.intl.formatMessage({id: 'partner'})}
                subhead={this.context.intl.formatMessage({id: 'become_maker_party_partner'})}
              />
              <IconLink
                link="mailto:press@mozilla.com"
                imgSrc="/img/pages/events/svg/icon-join.svg"
                head={this.context.intl.formatMessage({id: 'press'})}
                subhead={this.context.intl.formatMessage({id: 'maker_party_press'})}
              />
              <IconLink
                link="mailto:makerparty@mozilla.org"
                imgSrc="/img/pages/events/svg/icon-home-help.png"
                head={this.context.intl.formatMessage({id: 'contact'})}
                subhead={this.context.intl.formatMessage({id: 'maker_party_contact'})}
              />
            </IconLinks>
          </section>
        </div>
      </div>
    );
  }
});

module.exports = EventsPage;
