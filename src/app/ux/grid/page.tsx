import type { Metadata } from "next";
import "@/styles/style.css";
import "./grid-voorbeeld.css";

export const metadata: Metadata = {
  title: "Voorbeeld 12-koloms grid",
};

const Blok = ({
  classes,
  genest = false,
  children,
}: {
  classes: string;
  genest?: boolean;
  children?: React.ReactNode;
}) => (
  <div className={`mox-grid__cell ${classes}`}>
    <div
      className={
        genest
          ? "grid-voorbeeld__blok grid-voorbeeld__blok--genest"
          : "grid-voorbeeld__blok"
      }
    >
      <code className="grid-voorbeeld__code">
        {classes.replaceAll("mox-grid__cell--", "") || "–"}
      </code>
      {children}
    </div>
  </div>
);

export default function GridVoorbeeld() {
  return (
    <div className="rhc-theme grid-voorbeeld">
      <div className="mox-container">
        <h1 className="grid-voorbeeld__kop">Voorbeeld 12-koloms grid</h1>
        <p className="grid-voorbeeld__uitleg">
          Maak het venster smaller en breder om te zien hoe de blokken
          meeschalen. Breakpoints: sm vanaf 640px, md vanaf 768px, lg vanaf
          1024px, xl vanaf 1280px.
        </p>

        <section className="grid-voorbeeld__sectie">
          <h2 className="grid-voorbeeld__kop">12 losse kolommen</h2>
          <div className="mox-grid">
            {Array.from({ length: 12 }, (_, i) => (
              <Blok key={i} classes="mox-grid__cell--1" />
            ))}
          </div>
        </section>

        <section className="grid-voorbeeld__sectie">
          <h2 className="grid-voorbeeld__kop">Vaste verdelingen</h2>
          <div className="mox-grid">
            <Blok classes="mox-grid__cell--6" />
            <Blok classes="mox-grid__cell--6" />
            <Blok classes="mox-grid__cell--4" />
            <Blok classes="mox-grid__cell--4" />
            <Blok classes="mox-grid__cell--4" />
            <Blok classes="mox-grid__cell--3" />
            <Blok classes="mox-grid__cell--9" />
          </div>
        </section>

        <section className="grid-voorbeeld__sectie">
          <h2 className="grid-voorbeeld__kop">Responsive kaarten</h2>
          <p className="grid-voorbeeld__uitleg">
            Op mobiel één kolom, vanaf sm twee, vanaf lg drie en vanaf xl vier
            naast elkaar.
          </p>
          <div className="mox-grid">
            {Array.from({ length: 8 }, (_, i) => (
              <Blok
                key={i}
                classes="mox-grid__cell--sm-6 mox-grid__cell--lg-4 mox-grid__cell--xl-3"
              />
            ))}
          </div>
        </section>

        <section className="grid-voorbeeld__sectie">
          <h2 className="grid-voorbeeld__kop">Pagina-indeling met zijbalk</h2>
          <p className="grid-voorbeeld__uitleg">
            Vanaf md staat de navigatie naast de inhoud, net als in het portaal.
          </p>
          <div className="mox-grid">
            <Blok classes="mox-grid__cell--md-4 mox-grid__cell--lg-3" />
            <Blok classes="mox-grid__cell--md-8 mox-grid__cell--lg-9" />
          </div>
        </section>

        <section className="grid-voorbeeld__sectie">
          <h2 className="grid-voorbeeld__kop">Geneste grid</h2>
          <p className="grid-voorbeeld__uitleg">
            Een grid binnen een cel heeft weer 12 eigen kolommen. De oranje
            cellen nemen de breedte van hun ouder niet over.
          </p>
          <div className="mox-grid">
            <Blok classes="mox-grid__cell--md-8">
              <div className="mox-grid">
                <Blok classes="" genest />
                <Blok classes="mox-grid__cell--6" genest />
                <Blok classes="mox-grid__cell--6" genest />
              </div>
            </Blok>
            <Blok classes="mox-grid__cell--md-4" />
          </div>
        </section>
      </div>
    </div>
  );
}
