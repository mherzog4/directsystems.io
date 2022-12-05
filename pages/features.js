import Script from 'next/script'
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";

export default function Features() {
    return (
        <div className="App">
          <InlineWidget
            url="https://calendly.com/mattherzog/business-chat"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            
            text="Click here to schedule!"
          />


        </div>
      );
    };
    