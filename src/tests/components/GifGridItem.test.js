import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    const title = 'Un título';
    const url = 'http://localhost:3000/logo192.png';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe de mostrar <GifGridItem /> correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', ()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen con el url y el alt igual a los props ', () => {
        const img = wrapper.find('img');
        //console.log(img.props())
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener la clase animate__backInLeft', ()=>{
        const div = wrapper.find('div');
        const animate='animate__backInLeft';
        const className = div.prop('className');
        expect(className.includes(animate)).toBe(true);
    });
    
});
