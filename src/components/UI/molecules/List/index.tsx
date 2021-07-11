import { Link } from 'components/UI/atoms/Typhography';
import { Fragment } from 'react';

function ListNav() {
  return (
    <Fragment>
      <li>
        <Link  href="#">Beranda</Link>
      </li>
      <li>
        <Link href="#bootcamps">Bootcamps</Link>
      </li>
      <li>
        <Link href="#perusahaan">Perusahaan</Link>
      </li>
      <li>
        <Link href="#tentang">Tentang Kami</Link>
      </li>
    </Fragment>
  );
}

export default ListNav;
