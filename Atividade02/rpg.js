const criar = (nome, classe = "aventureiro", nivel = 1, ...itens) => ({
    nome, classe, nivel, itens,
    equipamento: { arma: "Adaga", armadura: "Túnica" }
  });
  
  const p1 = criar("Arthas");
  const p2 = criar("Lyra", "maga", 0, "Cajado"); 
  const p3 = criar("Kael", "guerreiro", 2, "Escudo");
  console.log("Personagens:", { p1, p2, p3 });
  
  const atacar = (...danos) => ({
    total: danos.reduce((a, b) => a + b, 0),
    maior: danos.length ? Math.max(...danos) : 0
  });
  console.log("Ataque:", atacar(15, 40, 22, 10));
  
  const bau = ["Poção", "Chave"];
  console.log("Inventário + baú:", [...p3.itens, ...bau], "| Original:", p3.itens);
  
  const base = { vida: 100, forca: 10, defesa: 10, velocidade: 10 };
  const statsGuerreiro = { ...base, forca: 16, defesa: 14 };
  const p3Up = { ...p3, nivel: p3.nivel + 1, stats: { ...statsGuerreiro, vida: statsGuerreiro.vida + 20 } };
  console.log("Subiu de nível:", p3Up);
  
  const copiaRasa = { ...p3Up };
  copiaRasa.equipamento.arma = "Machado";
  console.log("Cópia rasa alterou original?", p3Up.equipamento.arma, "| Cópia:", copiaRasa.equipamento.arma);
  
  p3Up.equipamento.arma = "Adaga";
  const copiaOk = { ...p3Up, equipamento: { ...p3Up.equipamento, arma: "Espada" } };
  console.log("Corrigido -> Original:", p3Up.equipamento.arma, "| Cópia:", copiaOk.equipamento.arma);