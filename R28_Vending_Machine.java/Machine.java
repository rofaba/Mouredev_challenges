package reto28;
import org.apache.log4j.Logger;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class Machine {

    private static final Logger logger = Logger.getLogger(Machine.class);
    private Map<String, Integer> catalogo = new HashMap<>();
    private String product;
    private Integer price;
    private Integer moneypay;
    //cambiar por arrayList de monedas
    private Integer change;
    public void getCatalogo(){
        catalogo.put("P1 Super 8", 700);
        catalogo.put("P2 Trencito", 650);
        catalogo.put("P3 Tika Chips",1150);
        catalogo.put("P4 Coca Cola", 1500);
        catalogo.put("P5 Agua Mineral", 1255);
        catalogo.put("P6 Ramitas", 895);
        catalogo.put("P7 Orbits Menta", 990);
    }
     public void startMachine() {
         logger.info("Se creará una nueva máquina expenderoa");
         System.out.println("**    SPECIAL VENDING MACHINE      **" + "\n");
         System.out.println("Catálogo de Productos");
         System.out.println("---------------------");

         for (Map.Entry<String, Integer> entry : catalogo.entrySet()) {
             String key = entry.getKey();
             Integer value = entry.getValue();
             String formattedLine = String.format("%-20s $ : %6d", key, value);
             System.out.println(formattedLine);
             }
         System.out.println("---------------------");
     }
     public void sellProducts(){
         Scanner scanner = new Scanner(System.in);
         System.out.println("Elija el producto de su preferencia, ej. P5");
         String selection = scanner.nextLine();
         logger.info("Se ha recibido un nuevo pedido");
         System.out.println("Ingrese el dinero, max. 2000");

         moneypay = scanner.nextInt();
         System.out.println(" ----- procesando pago ----- ");
         String selectiondata = null;

         switch (selection) {
             case "P1":
                 selectiondata = "P1 Super 8";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             case "P2":
                 selectiondata = "P2 Trencito";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             case "P3":
                 selectiondata = "P3 Tika Chips";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             case "P4":
                 selectiondata = "P4 Coca Cola";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             case "P5":
                 selectiondata = "P5 Agua Mineral";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             case "P6":
                 selectiondata = "P6 Ramitas";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             case "P7":
                 selectiondata = "P7 Orbits Menta";
                 System.out.println("Se ha seleccionado: "+ selectiondata);
                 break;
             default:
                 System.out.println("Elección no es válida, la compra se anulará");
         }
         price = catalogo.get(selectiondata);
         change = moneypay - price;
         logger.info("Calculando el cambio");
         System.out.println(" ----- dispensando ---- ");
         CoinConverter converter = new CoinConverter(change);
         converter.changetoCoins();
         logger.info("Se ha completado la venta");
    }


}
