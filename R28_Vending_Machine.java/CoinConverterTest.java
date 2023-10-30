package reto28;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CoinConverterTest {
@Test
public void zeroChangeTest() {
    String expected = "Vuelto::: 0, no hay monedas para entregar";
    CoinConverter conversor = new CoinConverter(0);
    String result = conversor.changetoCoins();
        assertEquals(expected, result );
}
    @Test
    public void noZeroChangeTest() {
        // Configurar el escenario de prueba
        CoinConverter converter = new CoinConverter(245);
        String result = converter.changetoCoins();
        String expected = "El vuelto de 245 se ha entregado en: 1 monedas de 200  -  0 monedas de 100  -  0 monedas de 50  -  4 monedas de 10  -  1 monedas de 5  -  ";
        assertEquals(expected, result);
    }
}


