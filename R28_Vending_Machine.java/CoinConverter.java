package reto28;
import java.util.ArrayList;
import java.util.List;
public class CoinConverter {
    private int change;
    private int coinNumber;
    private ArrayList<Integer> coinsBack = new ArrayList<>();
    final List<Integer> coinOps = new ArrayList<>();

    private String messagetoreturn;

    public CoinConverter(int change) {
        this.change = change;
        this.coinsBack = new ArrayList<>();
    }

    public String changetoCoins() {
        coinOps.add(200);
        coinOps.add(100);
        coinOps.add(50);
        coinOps.add(10);
        coinOps.add(5);

        int originalChange = change;
        if (change == 0) {
            System.out.println("Vuelto::: 0, no hay monedas para entregar");
            return "Vuelto::: 0, no hay monedas para entregar";
        }
        for (Integer coin : coinOps) {
            if (change != 0) {
                coinNumber = change / coin;
                coinsBack.add(coinNumber);
                change = change % coin;
            }
        }
        if (originalChange != 0) {
            StringBuilder message = new StringBuilder();
            message.append("El vuelto de ").append(originalChange).append(" se ha entregado en: ");
            for (int i = 0; i < coinsBack.size(); i++) {
                int coinValue = coinOps.get(i);
                int numberOfCoins = coinsBack.get(i);
                message.append(numberOfCoins).append(" monedas de ").append(coinValue).append("  -  ");
            }
            messagetoreturn = message.toString();
            System.out.println(messagetoreturn);

        }
        return messagetoreturn;
    }
}