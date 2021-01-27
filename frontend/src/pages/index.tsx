import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { CardsInformationDTO, CardsInformationSaveDTO } from '../dtos/CardsInformationDTO';

import { Title, Form, Informations } from './style';

import { queryBin } from '../service/graphql';
import api, { saveDate } from '../service/axios';

const Dashboard: React.FC = () => {
  const [newBin, setNewBin] = useState('');
  const [card, setCard] = useState<CardsInformationDTO>();
  const { data } = useQuery<CardsInformationSaveDTO>(queryBin, {
    variables: { number: newBin },
  });

  async function HandleWithCardInformationSearch(bin: string) {
    if (bin.length === 6) {
      const { data } = await api.get<CardsInformationDTO>(`/cards/${bin}`);

      if (data.card) {
        setCard(data);
      } else {
        setNewBin(bin);
      }
    }
  }

  useEffect(() => {
    if (data !== undefined) {
      saveDate(data, newBin);
    };
  })

  return (
    <>
      <Title>Enter the first 6 digits of your credit card</Title>

      <Form>
        <input
          onChange={(e) => HandleWithCardInformationSearch(e.target.value)}
        />
      </Form>

      {card?.card &&
        <Informations>
          <Link key={newBin} to="">
            <strong>{card?.card?.issuer} - {card?.card?.product.toUpperCase()}</strong>
            <div className="wrapper">
              {card?.usages &&
                <div className="box">
                  <strong>USOS</strong>
                  {card?.usages?.map(usages => (
                    <p>{usages.name.toUpperCase()}</p>
                  ))}
                </div>
              }
              {card?.allowed_captures &&
                <div className="box">
                  <strong>CAPTURAS PERMITIDAS</strong>
                  {card?.allowed_captures?.map(allowed => (
                    <p>{allowed.name.toUpperCase()}</p>
                  ))}
                </div>
              }

            </div>
          </Link>
        </Informations>
      }
    </>
  );
}

export default Dashboard;
