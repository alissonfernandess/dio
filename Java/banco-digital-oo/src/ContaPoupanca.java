
public class ContaPoupanca extends Conta {

    public ContaPoupanca(Cliente cliente) {
        super(cliente);
    }

    @Override
    public void imprimirExtra() {
        System.out.println("=== Extrato Conta Poupança ===");
        super.imprimirExtra();
    }

}
