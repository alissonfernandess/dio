
public class Main {

    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.setNome("Alisson Fernandes");

        Conta cc = new ContaCorrente(cliente);
        Conta cp = new ContaPoupanca(cliente);

        cc.depositar(100);
        cc.transferir(50, cp);

        cc.imprimirExtra();
        cp.imprimirExtra();

    }

}
