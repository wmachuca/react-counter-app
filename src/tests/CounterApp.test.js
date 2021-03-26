import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Prueba de CounterApp.js', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrar 100 en el valor por defecto', () => {
        const defaultValue = 100;
        const wrapper = shallow(<CounterApp value={defaultValue} />);
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe(defaultValue.toString());
    })

    test('Debe incrementar el contador con el boton +1', () => {
        const initialValue = wrapper.find('h2').text().trim();
        wrapper.find('#btnAdd').simulate('click');
        const currentValue = wrapper.find('h2').text().trim();
        expect(currentValue).toBe((parseInt(initialValue) + 1).toString());
    })

    test('Debe decrementar el contador con el boton -1', () => {
        const initialValue = wrapper.find('h2').text().trim();
        wrapper.find('#btnSubstract').simulate('click');
        const currentValue = wrapper.find('h2').text().trim();
        expect(currentValue).toBe((parseInt(initialValue) - 1).toString());
    })

    test('Debe colocar el valor por defecto con el boton Reset', () => {
        const defaultValue = 100;
        const wrapper = shallow(<CounterApp value={defaultValue} />);
        wrapper.find('#btnAdd').simulate('click');
        wrapper.find('#btnReset').simulate('click');
        const currentValue = wrapper.find('h2').text().trim();
        expect(currentValue).toBe(defaultValue.toString());
    })

})
