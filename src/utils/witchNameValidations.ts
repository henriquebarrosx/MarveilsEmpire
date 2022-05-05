export function validateWithName(witchName: string): string | null {
  const isEmptyWitchName = !witchName;
  const tooShortName = witchName.length < 2;

  if (isEmptyWitchName) {
    return 'O campo "Nome De Feiticeiro" não pode ficar em branco';
  }

  if (tooShortName) {
    return 'O campo "Nome De Feiticeiro" deve conter ao menos duas letras.'
  }

  return null;
}