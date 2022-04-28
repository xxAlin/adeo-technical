import React, { Fragment } from "react";
import clarityLogo from "../../images/claritylogo2.png";

import Footer from "../Footer/Footer";

function TermsAndConditions() {
  return (
    <Fragment>
      <div className="terms-container">
        <div className="terms-logo-containers">
          <span>
            <img className="terms-logo" src={clarityLogo} alt="" />
          </span>
        </div>
        <div className="terms-details">
          <p className="terms-title">Terms and Conditions</p>
          <p className="terms-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            aliquet facilisis neque, ac accumsan sapien facilisis sed.
            Suspendisse sodales ultrices dolor, at venenatis lectus luctus
            volutpat. Phasellus ullamcorper nunc non dui eleifend, a aliquet
            purus elementum. Nulla bibendum nunc sed mattis porttitor. Nam sit
            amet felis volutpat, condimentum nibh a, eleifend mauris. Phasellus
            lacinia, lectus nec efficitur venenatis, ante nunc faucibus tellus,
            vitae tristique sapien justo eget metus. Proin varius auctor quam
            sagittis iaculis. Etiam dapibus mollis ultrices. Vestibulum lorem
            augue, aliquam id varius eu, facilisis vel quam. Morbi justo nibh,
            elementum vitae massa ac, mollis dictum tortor. Nullam vitae
            scelerisque arcu. Quisque eros nisi, imperdiet feugiat risus et,
            sollicitudin blandit dolor. Phasellus facilisis gravida mattis.
            Integer erat enim, ullamcorper vitae dignissim quis, consectetur
            vitae est. Mauris mattis orci in lorem posuere, sed ultrices purus
            vehicula. Pellentesque vel odio non eros euismod dapibus. Sed
            pretium eget neque vitae tincidunt. Curabitur non placerat augue.
            Vestibulum id leo nisl. Donec pellentesque dapibus ex, malesuada
            commodo erat sollicitudin ac. Quisque lobortis tortor at massa
            porttitor rutrum. Proin fermentum odio vel porta elementum. Duis sit
            amet ex arcu. Ut augue turpis, molestie a tellus at, accumsan
            suscipit ligula. Suspendisse ornare diam lacus, at condimentum leo
            finibus fermentum. In sollicitudin enim nec pulvinar vulputate. Sed
            vehicula ipsum urna, sed cursus tortor euismod vel. Maecenas et sem
            blandit, iaculis velit vel, consectetur felis. Aliquam semper nibh
            sed dolor sodales, et posuere eros viverra. Integer pellentesque
            nibh massa, quis mollis ligula aliquet in. Quisque ac accumsan
            risus, eget pharetra odio. Vestibulum eu urna in quam scelerisque
            rutrum. Morbi eros nunc, feugiat pretium porttitor sed, lobortis
            vitae odio. Donec purus mi, egestas vel elit vitae, rhoncus posuere
            lorem. Donec vel blandit elit. Donec molestie feugiat bibendum.
            Suspendisse sed nulla condimentum, pharetra augue non, blandit
            tellus. Proin neque ante, imperdiet at luctus suscipit, gravida quis
            felis. Nullam quis ultricies magna. Nam fermentum euismod massa, ut
            dictum justo dignissim sed. Donec vulputate non est in laoreet.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Praesent fermentum risus nibh, non tempor
            nulla euismod non. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam facilisis mi nec blandit semper. Donec eu
            maximus elit, vel rutrum turpis. In sit amet elit ut ligula pulvinar
            vehicula in non dui. Sed vel vestibulum erat. Phasellus nec sapien
            nibh. Nunc gravida, lectus eu faucibus cursus, purus tellus lacinia
            metus, ac auctor mauris dui nec eros. Nunc viverra nisi nec posuere
            rutrum. Aenean sed cursus quam, non fringilla enim. Nullam rhoncus,
            dui nec tempor elementum, leo quam dignissim massa, eget fringilla
            lectus quam sed felis. Praesent et augue at metus commodo lacinia ac
            in velit. Proin cursus ante at auctor lobortis. Quisque nec tempus
            nisi. Nam non blandit sem, vitae blandit felis. Fusce in convallis
            mi, non feugiat ante.
          </p>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default TermsAndConditions;
