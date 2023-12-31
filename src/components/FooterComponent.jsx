import { Container, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

import Logo from "../assets/logo/logo.png";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex justify-content-between row-gap-5">
          <Col lg="5">
            <div className="d-flex align-items-center mb-3">
              <img
                alt=""
                src={Logo}
                width="60"
                height="60"
                className="logo-img d-inline-block align-top me-2"
              />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">MTs NEGRI 1</p>
                <p className="logo-text m-0 fw-bold lh-sm">KOTA BLITAR</p>
              </div>
            </div>
            <p
              className="lh-lg"
              style={{ fontSize: "14px", textAlign: "justify", color: "white" }}
            >
              MTs Negeri 1 Kota Blitar adalah Sekolah yang berupaya mengantarkan
              para siswa/siswi menuju sosok pelajar yang unggul dalam IMTAQ dan
              IPTEK yang berakhlaqul karimah dan berbudaya lingkungan.
            </p>
          </Col>
          <Col lg="3" className="menu-footer d-flex flex-column row-gap-2">
            <h5 className="fw-bold text-white">Sekolah</h5>
            <a href="/profil/sejarah">Sejarah Singkat</a>
            <a href="/profil/visi-misi">Visi dan Misi</a>
            <a href="https://mtsnegeriblitar.sch.id/ppdb">Pendaftaran</a>
            <a href="/kontak">Kontak & Alamat</a>
          </Col>
          <Col lg="3" className="menu-footer d-flex flex-column row-gap-2">
            <h5 className="fw-bold text-white">Sosial Media</h5>
            <a href="https://www.facebook.com/madsaneba.warta.5">
              <i class="fa fa-facebook"></i> Facebook
            </a>
            <a href="https://www.instagram.com/madsanebawarta/">
              <i class="fa fa-instagram"></i> Instagram
            </a>
            <a href="https://www.youtube.com/@mtsn1kotablitar539">
              <i class="fa fa-youtube"></i> YouTube
            </a>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <p className="px-md-0 px-3 text-center text-white">
              <span className="fw-bold">
                Make With <i class="fa fa-heart"></i> By Razan{" "}
              </span>
              &copy; Copyright {new Date().getFullYear()}, All Right Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
