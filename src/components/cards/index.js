import React from 'react';
import { Card, CardIcon, CardTitle, CardDescription, CardLearnMore, CardsContainer } from './CardElements';
import LuxuryIcon from '../../images/icon-luxury.svg';
import SedansIcon from '../../images/icon-sedans.svg';
import SuvsIcon from '../../images/icon-suvs.svg';
import Theme from '../../Theme';

const CardsConfig = [
  {
    icon: SedansIcon,
    title: 'sedans',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    color: Theme.brightOrange,
  },
  {
    icon: SuvsIcon,
    title: 'suvs',
    description:
      'Take a SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    color: Theme.darkCyan,
  },
  {
    icon: LuxuryIcon,
    title: 'luxury',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    color: Theme.veryDarkCyan,
  },
];

export default function Cards() {
  return (
    <CardsContainer>
      {CardsConfig.map((item, index) => (
        <Card key={index} bgColor={item.color}>
          <CardIcon src={item.icon} alt={item.title} />
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
          <CardLearnMore color={item.color}>Learn more</CardLearnMore>
        </Card>
      ))}
    </CardsContainer>
  );
}
