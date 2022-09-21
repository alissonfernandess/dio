
public class ContaCorrente extends Conta {

    public ContaCorrente(Cliente cliente) {
        super(cliente);
    }

    @Override
    public void imprimirExtra() {
        System.out.println("=== Extrato Conta Corrente ===");
        super.imprimirExtra();
    }

}
