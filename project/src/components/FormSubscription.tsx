import {ArrowRight} from 'phosphor-react'

export const FormSubscription = () => {
  return (
    <div className="subscription--container">
      <p className="subscription--title">
        Resta sempre aggiornato su mostre, workshop ed eventi
      </p>
      <form role="subscription">
        <label htmlFor="email">
          <span className="visually-hidden">Add email</span>
        </label>

        <input className="email" type="email" id="email" placeholder="email" />
        <div className="container--row checkbox">
          <input className="checkbox--input" type="checkbox" id="checkbox" />
          <label className="checkbox--label" htmlFor="checkbox">
            <a className="checkbox--label-link" href="http://">
              Accetto i termini e condizioni
            </a>
          </label>
        </div>

        {/* <button type="submit">
          <span className="visually-hidden">Submit</span>
        </button> */}
      </form>
      <div className="container--row">
        <a className="newsletter--link" href="http://">
          iscriviti alla newsletter
        </a>
        <ArrowRight size={32} weight="light" color="#c3051e" />
      </div>
    </div>
  );
};
