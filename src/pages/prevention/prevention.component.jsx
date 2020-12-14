import React from "react";
import "./prevention.styles.scss";

import Accordion from "../../components/accordion/accordion.component";

const Prevention = () => (
  <div className="prevention">
    <div className="body">
      <div className="side__options">
        <Accordion title="Advice for the public" body="Mythbusters" />
        <Accordion title="Covid-19 vaccines" body="Details on vaccines" />
      </div>
      <div className="prevention__body">
        <h2 className="prevention__title">
          Prevent covid-19 for your sake and others
        </h2>
        <p>
          Covid 19 is spreading in our communities. To be safe, take some simple
          precautions such as:
        </p>
        <ul>
          <li>Avoiding crowds</li>
          <li>Social or physical distancing</li>
          <li>Wearing a mask</li>
          <li>Avoiding crowds</li>
          <li>Keeping rooms well ventilated</li>
          <li>Regularly washing your hands</li>
          <li>Coughing into bent elbow or tissue</li>
          <li>etc...</li>
        </ul>
        <h2 className="prevention__title">
          To maintain your safety and that of others:
        </h2>
        <p>
          Observe at least a metre distance between yourself and others to
          minimize the risk of getting infected when they cough, sneeze or
          speak. Do the same even when indoors.
        </p>
        <p>
          It is important to get used to wearing of mask when around other
          peaple. Manage mask to make it as effective as possible by applying
          its appropriate use, storage, cleaning or disposal.
        </p>
        <p>Some of the points to note when wearing a mask include:</p>
        <ul>
          <li>
            Wash your hands before putting on a mask,before and after taking it
            off, and after touching it at any given time.
          </li>
          <li>
            On putting it on, make sure it covers your nose, mouth and chin.
          </li>
          <li>
            When you take off your mask, store it in a clean plastic bag, wash
            it daily if its a fabric mask and dispose in a trash can if its a
            medical mask.
          </li>
        </ul>
        <h2 className="prevention__title">
          Ensuring safety in the environment
        </h2>
        <p>
          <b>Stay away from social gatherings.</b> Coronavirus disease is mostly
          transmitted in night clubs, offices, fitness classes, restaurants,
          choir practices, places of worship, among others. The risks of getting
          infected are higher in crowded and poorly ventilated spaces where
          infected persons spend long periods of time together in close
          proximity. In these environments, the virus spreads by respiratory
          droplets or aerosols more efficiently.
        </p>
        <p>
          <b>If you must meet person(s), meet them ouside.</b> Outdoor meetings
          are better than indoor ones, especially when indoor spaces are limited
          and with insufficient air circulation.
        </p>
        <h2 className="prevention__title">
          Stick to the basics of proper hygiene
        </h2>
        <ul>
          <li>
            <b>Avoid touching your eyes, nose and mouth.</b>The chances of hands
            picking up viruses are very high since they touch many surfaces.
            Thus hands can transfer viruses to your eyes, nose and mouch, and
            may therefore end up infecting you after entering your body.
          </li>
          <li>
            <b>
              Clean your hands on regular basis with alcohol-based hand
              sanitiser or wash them with soap and water.
            </b>
            This clears germs including viruses that may be present on your
            hand.
          </li>
          <li>
            <b>
              Surfaces which are regularly touched should be cleaned and
              disinfected frequently
            </b>
            ,eg, door handles, phone screens, corridor walls, among others.
          </li>
          <li>
            <b>
              Cover your nose and mouth with your bent elbow or tissue when
              coughing or sneezing.
            </b>
            Then dispose of the used tissue immediately into a closed bin and
            wash your hands. By following good ‘respiratory hygiene’, you
            protect the people around you from viruses, which cause colds, flu
            and COVID-19.
          </li>
        </ul>
        <h2 className="prevention__title">What to do if you feel unwell</h2>
        <ul>
          <li>
            <b>Be aware of covid-19 range of symptoms,</b> the common ones being
            fever,dry cough and tiredness. Other less common symptoms include
            oss of taste or smell, aches and pains, headache, sore throat, nasal
            congestion, red eyes, diarrhoea, or a skin rash
          </li>
          <li>
            <b>
              Self quarantine or self-isolate even if you have minor symptoms
              such as cough, headache, mild fever
            </b>
            , until you recover. Call your health care provider or hotline for
            advice.
          </li>
          <li>
            <b>
              In case you have a fever, cough and difficulty breathing, seek
              medical attention immediately.
            </b>
          </li>
          <li>
            <b>
              Keep up to date on the latest information from trusted sources,
              such as WHO or your local and national health authorities.
            </b>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Prevention;
