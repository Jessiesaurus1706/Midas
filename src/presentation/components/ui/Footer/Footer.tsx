import styles from './Footer.module.scss';

import DaviBankLogo from '../../../../assets/images/DAVIbanklogo.png';
import VigiladoLogo from '../../../../assets/images/SFC.png';

const Footer = () => {
  return (
   <footer className={styles.footer}>
        <div className={styles.topBorder} />

        <div className={styles.content}>
            <img
            src={DaviBankLogo}
            alt="DaviBank"
            className={styles.logo}
            />

            <div className={styles.center}>
            <p>
                © 2025 Crédito Fácil CODENSA. Todos los derechos reservados.
                En el marco de la integración de las operaciones de The Bank of
                Nova Scotia ("Scotiabank") en Colombia con el Grupo Davivienda,
                Scotiabank ha otorgado una licencia de uso temporal de la marca
                "Scotiabank" (y sus derivados) al Grupo Davivienda y a DAVIbank
                S.A. DAVIbank S.A. es el titular y responsable por los productos
                y servicios ofrecidos.
            </p>

            <img
                src={VigiladoLogo}
                alt="Vigilado Superintendencia Financiera de Colombia"
                className={styles.vigilado}
            />
            </div>
        </div>
    </footer>
  );
};

export default Footer;