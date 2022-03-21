const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: "valor A",
  chaveB: "Valor B",
};

objetoA.chaveD = "Outro Valor";
console.log(objetoA);
