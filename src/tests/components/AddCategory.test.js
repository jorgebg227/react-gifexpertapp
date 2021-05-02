import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input');
       const value = 'Hola Mundo'
       input.simulate('change', {target:{value: value}});
       expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe de postear la informacion onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar a setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', {target:{value: value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); //Cuantas veces sea llamado 1 sola vez
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //Espera que sea llamado con una funcion
        expect(input.prop('value')).toBe('');
    });
    
    
});
