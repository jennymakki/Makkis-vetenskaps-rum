import Link from "next/link";

import { Atom, Dna, FlaskConical, Leaf } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div className="Intro">
        <h2 className="Intro__h2">Välkommen till Makkis Vetenskapsrum!</h2>

        <p className="Intro__p">
          Här kan du utforska lektionsmaterial, experiment och vetenskapens
          under.
        </p>
      </div>

      <div className="MainContent">
        <div className="Subjects">
          <h2 className="Subjects__h2">Ämnen</h2>

          <Link href="/naturkunskap">
            <button className="Subjects__naturkunskap">
              Naturkunskap <Leaf className="Subjects__naturkunskapIcon" />
            </button>
          </Link>

          <Link href="/biologi">
            <button className="Subjects__biologi">
              Biologi <Dna className="Subjects__biologiIcon" />
            </button>
          </Link>

          <Link href="/kemi">
            <button className="Subjects__kemi">
              Kemi <FlaskConical className="Subjects__kemiIcon" />
            </button>
          </Link>

          <Link href="/naturvetenskapligspecialisering">
            <button className="Subjects__naturspec">
              Naturvetenskaplig Specialisering{" "}
              <Atom className="Subjects__naturspecIcon" />
            </button>
          </Link>
        </div>

        <div className="About">
          <h3 className="about__h3">Om mig</h3>

          <img src="/images/Fares.png" alt="Fares" />

          <p className="about__p">
            Hej! Fares heter jag och undervisar i biologi, kemi och
            naturkunskap. Här kan du lära dig mer om världen omkring dig och vad
            naturen har att erbjuda!
          </p>
        </div>
      </div>
    </>
  );
}
