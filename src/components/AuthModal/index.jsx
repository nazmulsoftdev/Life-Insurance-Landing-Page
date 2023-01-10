import React from 'react';
import {Tabs,Modal} from 'flowbite-react';
import Login from '../Login';
import Singup from '../Singup';

function AuthModal({openModal,ClodeModalHandler}) {
  return (
    <div>
      <React.Fragment>
        <Modal
          show={openModal}
          size="md"
          popup={true}
          onClose={ClodeModalHandler}
        >
          <Modal.Header />
          <Modal.Body>
            <Tabs.Group>
              <Tabs.Item active={true} title="Login">
                <Login />
              </Tabs.Item>
              <Tabs.Item title="Singup">
                <Singup />
              </Tabs.Item>
            </Tabs.Group>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default AuthModal