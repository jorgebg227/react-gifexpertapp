import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas con <GifExpertApp />', () => {
    const wrapper = shallow(<GifExpertApp />);
    
    test('Debe de mostrar correctamente <GifExpertApp />', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar una lista de categorias', ()=>{
        const categories =['Nirvana', 'Real Madrid'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
