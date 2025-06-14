export type CardBrand =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'elo'
  | 'diners'
  | 'discover'
  | 'hipercard'
  | 'jcb'
  | 'aura'
  | 'maestro'
  | 'mir'
  | 'unionpay'
  | 'unknown';

export function getCardBrand(cardNumber: string): CardBrand {
  const sanitized = cardNumber.replace(/\D/g, '');

  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(sanitized)) return 'visa';
  if (/^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/.test(sanitized)) return 'mastercard';
  if (/^3[47][0-9]{13}$/.test(sanitized)) return 'amex';
  if (/^(4011(78|79)|431274|438935|451416|457393|504175|5067[0-6][0-9]|50677[0-8]|509[0-9]{3}|627780|636297|636368|650[4-9][0-9]{2}|6516[5-9][0-9]|6550[0-9]{2})[0-9]*$/.test(sanitized)) return 'elo';
  if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(sanitized)) return 'diners';
  if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(sanitized)) return 'discover';
  if (/^(606282|3841)[0-9]{10,12}$/.test(sanitized)) return 'hipercard';
  if (/^(?:2131|1800|35\d{3})\d{11}$/.test(sanitized)) return 'jcb';
  if (/^50[0-9]{14,17}$/.test(sanitized)) return 'aura';
  if (/^(5[06789]|6)[0-9]{0,}$/.test(sanitized)) return 'maestro';
  if (/^220[0-4][0-9]{12}$/.test(sanitized)) return 'mir';
  if (/^62[0-9]{14,17}$/.test(sanitized)) return 'unionpay';

  return 'unknown';
}

// Exemplo de uso:
// const brand = getCardBrand('4111111111111111'); // 'visa'