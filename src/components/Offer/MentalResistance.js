import React from 'react'
import styles from './Offer.module.scss'

const MentalResistance = function() {
  return (
    <>
      <section className={styles.mentalResistance}>
        <div className={styles.animation_right}>
          <h1 className={styles.offerHeader__white}>Odpornośc psychiczna</h1>
          <img
            src="http://localhost:3000\assets\Offer\offer1.png"
            alt=""
            srcset=""
            className={styles.offerImg2}
          />
          <p className={styles.offerMainText__white}>
            Klienci lubią być dobrze obsługiwani. Przy podejmowaniu decyzji o
            zakupie, coraz częściej zwracają uwagę na jakość obsługi, dlatego
            budowanie długotrwałych relacji z nimi jest w interesie każdej
            firmy. Podczas obsługi klienta zdarzają się jednak trudności,
            sytuacje konfliktowe i nieporozumienia. To w jaki sposób pracownik
            obsługi zareaguje w danej sytuacji, w dużej mierze determinuje
            poziom zadowolenia klienta. Jeśli na tym etapie, osoba kontaktująca
            się bezpośrednio z klientem popełni błąd, cała organizacja może być
            narażona na straty wizerunkowe. Konsekwencją może być negatywna
            opinia na portalu społecznościowych, negatywny „marketing szeptany”,
            a nawet zaostrzenie konfliktu i wstąpienie na drogę sądową.
          </p>
          <ul className={styles.offerBenefits__white}>
            <li>nierealne oczekiwania ze strony pacjenta.</li>
            <li>
              zachowania, które pracownicy placówek medycznych często nazywają
              postawą roszczeniową pacjenta
            </li>
            <li>wymuszanie działań (często niezgodnych z prawem);</li>
            <li>
              emocjonalna reakcja (krzyk, agresja) w rozmowie z pracownikami
              placówki medycznej;
            </li>
            <li>
              zastraszanie lub szantaż w rozmowie z pracownikami placówki
              medycznej
            </li>
          </ul>
          <button className={styles.offerButton}>Pobierz ofertę</button>
        </div>
      </section>
    </>
  )
}

export default MentalResistance
