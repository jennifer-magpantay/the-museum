import { Card } from "./Card";

export const Exhibitions = () => {
  return (
    <section className="section">
      <div className="section--header">
        <h3 className="section--header-title">Title</h3>
        {/* filters */}
        <div className="section--header-filters">
          <div className="filter">
            <label className="filter--label" htmlFor="data">
              Data
            </label>
            <select className="filter--select" name="data" id="data">
              <option className="filter--select-option" value="Tuttle le date">
                Tuttle le date
              </option>
              <option className="filter--select-option" value="Più recente">
                Più recente
              </option>
              <option className="filter--select-option" value="Più antigo">
                Più antigo
              </option>
            </select>
          </div>

          <div className="filter">
            <label className="filter--label" htmlFor="cosa">
              Cosa
            </label>
            <select className="filter--select" name="cosa" id="cosa">
              <option
                className="filter--select-option"
                value="Tutte le attività"
              >
                Tutte le attività
              </option>
              <option
                className="filter--select-option"
                value="Performance e Concerto"
              >
                Performance e Concerto
              </option>
              <option className="filter--select-option" value="Mostra">
                Mostra
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="section--body">
        <Card
          image="http://lorempixel.com/640/360"
          title="Gallery 1"
          date="Apr 17 - Nov 01, 2020"
        />
        <Card
          image="http://lorempixel.com/640/360"
          title="Lorem, ipsum dolor."
          date="Apr 17 - Nov 01, 2020"
        />
        <Card
          image="http://lorempixel.com/640/360"
          title="Lorem ipsum dolor sit amet consectetur."
          date="Apr 17 - Nov 01, 2020"
        />
        <Card
          image="http://lorempixel.com/640/360"
          title="Lorem ipsum dolor sit amet consectetur."
          date="Apr 17 - Nov 01, 2020"
        />
      </div>

      <button className="button--load">Load More</button>
    </section>
  );
};
