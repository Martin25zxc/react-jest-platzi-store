import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';
describe('<Footer />', () => {
  //Crear la estructura que necesito
  const footer = mount(<Footer />);

  test('Render del component Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
describe('Footer Snapshot', () => {
  test('Comprobar la UI del component Footer', () => {
    const footer = create(<Footer />);
    //Sino el existe el Snapshot lo crea
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
