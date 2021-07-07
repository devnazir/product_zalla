import Button from 'components/UI/atoms/Button';
import { Text } from 'components/UI/atoms/Typhography';

function NavbarLanding() {
  return (
    <nav className="navbar navbar-landing">
      <ul className="navbar-link link-landing">
        <li>
          <Text>Beranda</Text>
        </li>
        <li>
          <Text>Bootcamps</Text>
        </li>
        <li>
          <Text>Perusahaan</Text>
        </li>
        <li>
          <Text>Tentang Kami</Text>
        </li>
      </ul>

      <div className="btn-group">
        <Button
          size="large"
          label="LOGIN"
          className="btn bordered"
          style={{ marginRight: '1rem' }}
        />
        <Button
          size="large"
          type="primary"
          label="DAFTAR"
          className="btn btn-signup bordered"
        />
      </div>
    </nav>
  );
}

export default NavbarLanding;
