// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas de PrimeraApp.js', () => {

    // test('Debe mostrar el mensaje `Hola, soy Wilmer` ', () => {
    //     const saludo = 'Hola, soy Wilmer';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Wilmer';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Wilmer';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo} 
            />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })


})
