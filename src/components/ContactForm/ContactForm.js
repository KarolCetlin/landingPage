import React from 'react'
import styles from './ContactForm.module.scss'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topic: 'default',
      rodo: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value

    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleChange(event) {
    this.setState({value: event.target.topic})
  }

  render() {
    return (
      <>
        <div className={styles.form_wrapper}>
          <form className={styles.form__form}>
            <h2 className={styles.form__h1}>Skontaktuj się ze mną</h2>
            <img
              src="http://localhost:3000\assets\Offer\contact1.jpg"
              className={styles.form_img}
              alt="asd"
              srcset=""
            />
            <input
              type="text"
              name="phone"
              id="telephone"
              placeholder="podaj swój numer telefonu"
              maxLength="30"
              className={styles.form__phone}
            />
            <input
              type="text"
              id="name"
              placeholder="podaj swój adres email"
              className={styles.form__email}
            />
            <input
              type="text"
              id="name"
              placeholder="podaj swoje imię i nazwisko"
              className={styles.form__name}
            />
            <label className={styles.form__selector}>
              Wybierz temat rozmowy:
              <select
                name="topic"
                value={this.state.topic}
                onChange={this.handleInputChange}
                type="selector"
              >
                <option value="default">Żaden z poniższych</option>
                <option value="coaching">Coaching</option>
                <option value="mediacje">Mediacje w duchu NVC</option>
                <option value="szkolenia">Szkolenia dla firm</option>
              </select>
            </label>

            <textarea
              name="your-message"
              id=""
              cols="40"
              rows="10"
              className={styles.form__message}
            />

            <label className={styles.form__rodo}>
              Akceptuję warunki polityki prywatności:
              <input
                name="rodo"
                type="checkbox"
                checked={this.state.rodo}
                onChange={this.handleInputChange}
              />
            </label>

            <input
              type="button"
              value="Wyślij wiadomość"
              className={styles.form__button}
            />
          </form>
        </div>
      </>
    )
  }
}

export default ContactForm
