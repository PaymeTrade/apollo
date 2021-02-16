import React, { useCallback, useRef } from 'react';
import { FiAirplay, FiLock, FiUser } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import FooterBox, { IFooterBoxProps } from '@/components/FooterBox';
import Input from '@/components/Form/Input';
import Select, { ISelectValue } from '@/components/Form/Select';
import { useAuthentication } from '@/context/authentication';

interface IBrokerFormData {
  broker: ISelectValue;
  email: string;
}

const Broker: React.FC<Partial<IFooterBoxProps>> = ({ ...rest }) => {
  const brokerFormRef = useRef<FormHandles>(null);

  const { logOut } = useAuthentication();

  const handleSignInBroker = useCallback(
    (data: IBrokerFormData) => {
      console.log(data);

      logOut();
    },
    [logOut],
  );

  return (
    <FooterBox
      title="Corretora"
      description="Autentique-se na corretora para que seja possível fazer as operações em sua conta."
      footer={{
        hint: 'Suas credenciais ficam em seu dispositivo, seguras.',
        button: {
          text: 'Entrar',
          onClick: () => brokerFormRef.current?.submitForm(),
        },
      }}
      {...rest}
    >
      <Form ref={brokerFormRef} onSubmit={handleSignInBroker}>
        <Select
          name="broker"
          icon={FiAirplay}
          options={[
            {
              value: 'iqoption',
              label: 'IQ Option',
            },
          ]}
          defaultValue={{
            value: 'iqoption',
            label: 'IQ Option',
          }}
          disabled
        />

        <Input
          name="email"
          label="E-mail"
          icon={FiUser}
          type="email"
          placeholder="joao@exemplo.com"
          containerProps={{
            style: {
              marginTop: 16,
            },
          }}
        />

        <Input
          name="password"
          label="Password"
          icon={FiLock}
          type="password"
          placeholder="••••••"
          containerProps={{
            style: {
              marginTop: 16,
            },
          }}
        />
      </Form>
    </FooterBox>
  );
};

export default Broker;