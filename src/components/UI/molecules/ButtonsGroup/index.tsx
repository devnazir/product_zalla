import { Fragment } from 'react';
import Button from 'components/UI/atoms/Button';

function ButtonGroupNavLanding() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ButtonGroupNavLanding;
