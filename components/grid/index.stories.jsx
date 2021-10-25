/* eslint-disable react/no-array-index-key,
                  react/jsx-props-no-spreading,
                  import/no-unresolved,
                  react/prop-types
*/

import React from 'react';
import './stories.scss';

import Row from './row';
import Col from './col';

export default {
  title: 'Layout/Grid',
  component: [Row, Col],
};

const Information = ({ title, description }) => (
  <Row>
    <Col col={24}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Col>
  </Row>
);

export const Default = () => (
  <>
    <Information
      title="Default Grid"
      description="В стандартной конфигурации grid имеет следующие настройки: colCount: 24, gapSize: 21, rowGap: 42"
    />
    <Row>
      {[...Array(24)].map((item, index) => (
        <Col col={item} key={index}>
          <p style={{ textAlign: 'center' }}>{index + 1}</p>
        </Col>
      ))}
    </Row>
  </>
);

export const Offset = () => (
  <>
    <Information title="Сетка с использованием offset" />
    <Row>
      <Col col={4}>
        <p style={{ textAlign: 'center' }}>col: 4</p>
      </Col>
      <Col col={4} offset={11}>
        <p style={{ textAlign: 'center' }}>col: 4, offset: 10</p>
      </Col>
      <Col col={4} offset={21}>
        <p style={{ textAlign: 'center' }}>col: 4, offset: 21</p>
      </Col>
    </Row>
  </>
);

export const Tag = () => (
  <>
    <Information
      title="Сетка с использованием Tag"
      description="Порой, для лучших показателей необходимо использовать семантические HTML тэги. Специально для этого был добавлен props - tag. Он позволяет разработчику переопределить тэг по дефолту - div, на тот который будет подходить лучше. Props Tag доступен для Row и Col."
    />
    <Row>
      <Col col={6} tag="aside">
        <p style={{ textAlign: 'center' }}>col: 4, tag: aside</p>
      </Col>
      <Col col={18} tag="main">
        <p style={{ textAlign: 'center' }}>Col 20, tag: main</p>
      </Col>
    </Row>
  </>
);

export const Play = () => (
  <>
    <Information
      title="Play"
      description="Здесь вы можете настроить Grid сетку и ее содержимое как угодно, что бы лучше понять как на самом деле она работает."
    />
  </>
);
