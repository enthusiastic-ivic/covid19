import React from "react";
import "./vaccines.styles.scss";

const Vaccines = () => (
  <div className="vaccines">
    <div className="vaccines__header">
      <h1 className="vaccines__title">How do vaccines work?</h1>
    </div>
    <div className="body">
      <div className="body__1">
        <h1 className="__title">
          The body's natural response against pathogens
        </h1>
        <p>
          When a person is susceptible and they encounter a harmful
          organism(germs) it can lead to disease and death.The body has many
          ways of defending itself against pathogens (disease-causing
          organisms). Skin, mucus, and cilia (microscopic hairs that move debris
          away from the lungs) all work as physical barriers to prevent
          pathogens from entering the body in the first place.
        </p>
        <p>
          Our immune system is triggered when pathogen attacks the body. The
          immune system attacks the body and destroys it.
        </p>
        <p>
          A pathogen is a bacterium, virus, parasite or fungus that can cause
          disease within the body. Each pathogen is made up of several subparts,
          usually unique to that specific pathogen and the disease it causes.
          The subpart of a pathogen that causes the formation of antibodies is
          called an antigen. The antibodies produced in response to the
          pathogen’s antigen are an important part of the immune system. You can
          consider antibodies as the soldiers in your body’s defense system.
          Each antibody, or soldier, in our system is trained to recognize one
          specific antigen. We have thousands of different antibodies in our
          bodies. When the human body is exposed to an antigen for the first
          time, it takes time for the immune system to respond and produce
          antibodies specific to that antigen. In the meantime, the person is
          susceptible to becoming ill.
        </p>
        <p>
          Once the antigen-specific antibodies are produced, they work with the
          rest of the immune system to destroy the pathogen and stop the
          disease. Antibodies to one pathogen generally don’t protect against
          another pathogen except when two pathogens are very similar to each
          other, like cousins. Once the body produces antibodies in its primary
          response to an antigen, it also creates antibody-producing memory
          cells, which remain alive even after the pathogen is defeated by the
          antibodies. If the body is exposed to the same pathogen more than
          once, the antibody response is much faster and more effective than the
          first time around because the memory cells are at the ready to pump
          out antibodies against that antigen.This means that if the person is
          exposed to the dangerous pathogen in the future, their immune system
          will be able to respond immediately, protecting against disease.
        </p>
        <h1 className="__title">How vaccines operate</h1>
        <p>
          Vaccines contain weakened or inactive parts of a particular organism
          (antigen) that triggers an immune response within the body. Newer
          vaccines contain the blueprint for producing antigens rather than the
          antigen itself. Regardless of whether the vaccine is made up of the
          antigen itself or the blueprint so that the body will produce the
          antigen, this weakened version will not cause the disease in the
          person receiving the vaccine, but it will prompt their immune system
          to respond much as it would have on its first reaction to the actual
          pathogen.
        </p>
        <p>
          There are vaccines require multiple doses, given weeks or months
          apart, in order to allow for the production of long-lived antibodies
          and development of memory cells. In this way, the body is trained to
          fight the specific disease-causing organism, building up memory of the
          pathogen so as to rapidly fight it if and when exposed in the future.
        </p>
        <h1 className="__title">The herd immunity</h1>
        <p>
          When someone is vaccinated, they are very likely to be protected
          against the targeted disease. But not everyone can be vaccinated.
          People with underlying health conditions that weaken their immune
          systems (such as cancer or HIV) or who have severe allergies to some
          vaccine components may not be able to get vaccinated with certain
          vaccines. These people can still be protected if they live in and
          amongst others who are vaccinated. When a lot of people in a community
          are vaccinated the pathogen has a hard time circulating because most
          of the people it encounters are immune. So the more that others are
          vaccinated, the less likely people who are unable to be protected by
          vaccines are at risk of even being exposed to the harmful pathogens.
          This is called herd immunity.
        </p>
        <p>
          This is especially important for those people who not only can’t be
          vaccinated but may be more susceptible to the diseases we vaccinate
          against. No single vaccine provides 100% protection, and herd immunity
          does not provide full protection to those who cannot safely be
          vaccinated. But with herd immunity, these people will have substantial
          protection, thanks to those around them being vaccinated.
        </p>
        <p>
          Vaccinating not only protects yourself, but also protects those in the
          community who are unable to be vaccinated. So, if you are able to, get
          vaccinated.
        </p>
      </div>
      <div className="body__2"></div>
    </div>
  </div>
);

export default Vaccines;
