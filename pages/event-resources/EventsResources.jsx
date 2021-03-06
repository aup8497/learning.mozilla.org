var React = require('react');

var IconLinks = require('../../components/icon-links.jsx');
var IconLink = require('../../components/icon-link.jsx');
var Illustration = require('../../components/illustration.jsx');

var EventsHeader = require('../../components/events/events-header.jsx');
var LogoAsset = require('./LogoAsset.jsx');
var LogoAssetLink = require('./LogoAssetLink.jsx');

import { FormattedHTMLMessage } from 'react-intl';

var EventsResources = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  statics: {
    pageTitle: 'Event Resources',
    pageClassName: 'event-resources',
    LogoAsset: LogoAsset
  },
  render: function() {
    return (
      <div>
        <EventsHeader/>

        <div className="inner-container">
          <section>
            <h2 className="text-center">
              {this.context.intl.formatMessage({id: 'host_maker_party'})}
            </h2>
            <p>
              {this.context.intl.formatMessage({id: 'host_maker_party_paragraph'})}
            </p>
          </section>

          <section>
            <h2 className="text-center">
              {this.context.intl.formatMessage({id: 'maker_party_activities'})}
            </h2>
          </section>

          <section>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/post-crimes.png"
            src2x="/img/pages/events/post-crimes_2x.png"
            alt="Maker Party logo"
            >
              <h3 className="uppercase">
                <a href="#">
                  {this.context.intl.formatMessage({id: 'maker_party_activity_7_title'})}
                </a>
              </h3>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_7_body'})}
              </p>
            </Illustration>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/meme.png"
            src2x="/img/pages/events/meme_2x.png"
            alt="Maker Party logo"
            >
              <h3 className="uppercase">
                <a href="#">
                  {this.context.intl.formatMessage({id: 'maker_party_activity_1_title'})}
                </a>
              </h3>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_1_body'})}
              </p>
            </Illustration>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/contribute.png"
            src2x="/img/pages/events/contribute_2x.png"
            alt="Maker Party logo"
            >
              <h3 className="uppercase">
                <a href="#">
                  {this.context.intl.formatMessage({id: 'maker_party_activity_2_title'})}
                </a>
              </h3>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_2_body'})}
              </p>
            </Illustration>
            <Illustration
            height={183} width={250}
            src1x="/img/pages/events/super-party.png"
            src2x="/img/pages/events/super-party_2x.png"
            alt="Maker Party logo"
            >
              <h3 className="uppercase">
                <a href="#">
                  {this.context.intl.formatMessage({id: 'maker_party_activity_8_title'})}
                </a>
              </h3>
              <p>
                {this.context.intl.formatMessage({id: 'maker_party_activity_8_body'})}
              </p>
            </Illustration>
          </section>

          <section>
            <h2 className="text-center">
              {this.context.intl.formatMessage({id: 'hosting_maker_party'})}
            </h2>
            <p>
              {this.context.intl.formatMessage({id: 'maker_party_hosting_paragraph_1'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'maker_party_hosting_paragraph_2'})}
            </p>
            <ol>
              <li>
                {this.context.intl.formatMessage({id: 'hosting_list_1'})}
              </li>
              <li>
                {this.context.intl.formatMessage({id: 'hosting_list_2'})}
              </li>
              <li>
                {this.context.intl.formatMessage({id: 'hosting_list_3'})}
              </li>
              <li>
                {this.context.intl.formatMessage({id: 'hosting_list_4'})}
              </li>
            </ol>
            <div className="text-center">
              <a href="https://mzl.la/makerpartyhostpack2016" className="btn">
                {this.context.intl.formatMessage({id: 'get_host_pack'})}
              </a>
            </div>
          </section>

          <section>
            <h2 id="logo-assets">
              {this.context.intl.formatMessage({id: 'logos_and_assets'})}
            </h2>
            <p>
              {this.context.intl.formatMessage({id: 'maker_party_logo_and_assets'})}
            </p>
            <FormattedHTMLMessage id="trademark"/>
            <div className="row">
              <LogoAsset head={this.context.intl.formatMessage({id: 'maker_party_logo'})}
              alt="Maker Party Logo Image"
              src1x="/img/pages/event-resources/maker-party-logo_thumb.png"
              src2x="/img/pages/event-resources/maker-party-logo_thumb@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party-logo/MakerPartyLogo.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party-logo/MakerPartyLogo.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'brand_palette'})}
              alt="Brand Palette Image"
              src1x="/img/pages/event-resources/resource-thumbnails-03.png"
              src2x="/img/pages/event-resources/resource-thumbnails-03@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party-brand-pallet/MakerPartyBrandPalette.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party-brand-pallet/MakerPartyBrandPalette.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'poster'})}
              alt="Poster Image"
              src1x="/img/pages/event-resources/maker-party-banner_thumb.png"
              src2x="/img/pages/event-resources/maker-party-banner_thumb@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party-banner/MakerPartyBanner.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party-banner/MakerPartyBanner.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'desktop_wallpaper'})}
              alt="Desktop Wallpaper Image"
              src1x="/img/pages/event-resources/maker-party_wallpapers_thumb.png"
              src2x="/img/pages/event-resources/maker-party_wallpapers_thumb@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_wallpapers/MakerPartyWallpaper-1-320x480.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_1'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_wallpapers/MakerPartyWallpaper-1-640x1136.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_2'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_wallpapers/MakerPartyWallpaper-1-768x1280.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_3'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_wallpapers/MakerPartyWallpaper-1-1920x1200.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_4'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_wallpapers/MakerPartyWallpaper-1-2560x1440.jpg">
                  {this.context.intl.formatMessage({id: 'maker_party_size_5'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'table_cloth_design'})}
              alt="Table Cloth Design Image"
              src1x="/img/pages/event-resources/maker-party_table_cloth_thumb.png"
              src2x="/img/pages/event-resources/maker-party_table_cloth_thumb@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_table_cloth/maker-party_table-cloth-50x42cm.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_table_cloth/maker-party_table-cloth-50x42cm.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
              <LogoAsset head={this.context.intl.formatMessage({id: 'buttons'})}
              alt="Buttons Image"
              src1x="/img/pages/event-resources/maker-party_buttons_thumb.png"
              src2x="/img/pages/event-resources/maker-party_buttons_thumb@2x.png">
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_buttons/maker-party_buttons.eps">
                  {this.context.intl.formatMessage({id: 'download_eps'})}
                </LogoAssetLink>
                <LogoAssetLink href="https://stuff.webmaker.org/learning.mozilla.org/maker-party_buttons/MakerPartyButtons.png">
                  {this.context.intl.formatMessage({id: 'download_png'})}
                </LogoAssetLink>
              </LogoAsset>
            </div>
          </section>


          <div className="row full-row quote">
            <section>
              <div>
                <h3 className="text-center">
                  {this.context.intl.formatMessage({id: 'become_maker_party_partner_resources'})}
                </h3>
                <p className="text-center">
                  {this.context.intl.formatMessage({id: 'become_maker_party_partner_resources_paragraph'})}
                </p>
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4>
                      {this.context.intl.formatMessage({id: 'partner_item_1_title'})}
                    </h4>
                    <p>
                      {this.context.intl.formatMessage({id: 'partner_item_1_paragraph'})}
                    </p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4>
                      {this.context.intl.formatMessage({id: 'partner_item_2_title'})}
                    </h4>
                    <p>
                      {this.context.intl.formatMessage({id: 'partner_item_2_paragraph'})}
                    </p>
                  </div>
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4>
                      {this.context.intl.formatMessage({id: 'partner_item_3_title'})}
                    </h4>
                    <p>
                      {this.context.intl.formatMessage({id: 'partner_item_3_paragraph'})}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a href="https://mzl.la/2016MakerPartyPartner" className="secondary-button">
                    {this.context.intl.formatMessage({id: 'partner_with_us'})}
                  </a>
                </div>
              </div>
            </section>
          </div>

          <section>
            <IconLinks>
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

module.exports = EventsResources;
