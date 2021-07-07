import { Text } from 'components/UI/atoms/Typhography';
import { Fragment } from 'react';

function ListNav() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ListNav;
